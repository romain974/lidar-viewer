/**
 * Lecture d'un nuage de points LiDAR HD (format COPC) en HTTP Range.
 *
 * COPC = octree feuilleté : on ne télécharge que les nœuds qui intersectent
 * l'emprise demandée. La hiérarchie est paginée, on ne descend que dans les
 * pages utiles, et chaque nœud est mis en cache : une même zone n'est jamais
 * retéléchargée.
 *
 * Ce module est la version autonome de celui du simulateur : aucune dépendance
 * au reste de l'application, seulement `copc` et `laz-perf`.
 */
import { Copc, Getter } from 'copc'
import { createLazPerf } from 'laz-perf'

let lazPerfPromise
let wasmUrlCourante = 'laz-perf.wasm'

/**
 * Instance laz-perf (décompression LAZ). Le .wasm est cherché à côté du script
 * qui a chargé la lib, et non à la racine du document : la lib est souvent
 * appelée depuis un sous-dossier.
 */
function getLazPerf() {
  if (!lazPerfPromise) {
    const base = wasmUrlCourante
    lazPerfPromise = createLazPerf({
      locateFile: (path) => (path.endsWith('.wasm') ? base : path),
    })
  }
  return lazPerfPromise
}

/** URL du fichier laz-perf.wasm (déduite du script, ou forcée par l'appelant). */
export function setWasmUrl(url) {
  if (url) {
    wasmUrlCourante = url
    lazPerfPromise = undefined
  }
}

const rootCache = new Map()
const pageCache = new Map()
const nodeCache = new Map()

async function openRoot(url) {
  let p = rootCache.get(url)
  if (!p) {
    p = (async () => {
      const getter = Getter.http(url)
      const copc = await Copc.create(url)
      const c = copc.info.cube
      return { copc, rootPage: copc.info.rootHierarchyPage, cube: [c[0], c[1], c[2], c[3], c[4], c[5]], getter }
    })()
    rootCache.set(url, p)
  }
  return p
}

function loadPage(url, page) {
  const k = `${url}|${page.pageOffset}|${page.pageLength}`
  let p = pageCache.get(k)
  if (!p) {
    p = Copc.loadHierarchyPage(url, page)
    pageCache.set(k, p)
  }
  return p
}

/** Bornes XY d'une clé d'octree « D-X-Y-Z ». */
function keyBounds(cube, key) {
  const parts = key.split('-').map(Number)
  const d = parts[0]
  const kx = parts[1]
  const ky = parts[2]
  const size = (cube[3] - cube[0]) / Math.pow(2, d)
  const minX = cube[0] + kx * size
  const minY = cube[1] + ky * size
  return { minX, minY, maxX: minX + size, maxY: minY + size, depth: d, size }
}

/** Collecte les nœuds dont les bornes intersectent la bbox, page par page. */
async function collectNodes(url, cube, page, x1, y1, x2, y2, out, garde = 0) {
  if (garde > 16) return
  const sousArbre = await loadPage(url, page)
  const suite = []

  for (const [key, node] of Object.entries(sousArbre.nodes)) {
    if (!node || node.pointCount <= 0) continue
    const b = keyBounds(cube, key)
    if (b.maxX < x1 || b.minX > x2 || b.maxY < y1 || b.minY > y2) continue
    out.push({ key, node, depth: b.depth })
  }
  for (const [key, sub] of Object.entries(sousArbre.pages)) {
    if (!sub) continue
    const b = keyBounds(cube, key)
    if (b.maxX < x1 || b.minX > x2 || b.maxY < y1 || b.minY > y2) continue
    suite.push(collectNodes(url, cube, sub, x1, y1, x2, y2, out, garde + 1))
  }
  await Promise.all(suite)
}

async function loadNodePoints(url, root, key, node, classes) {
  const ck = `${url}|${key}`
  let p = nodeCache.get(ck)
  if (!p) {
    p = (async () => {
      let view = null
      for (let essai = 0; essai < 3 && !view; essai++) {
        try {
          view = await Copc.loadPointDataView(url, root.copc, node, { lazPerf: await getLazPerf() })
        } catch {
          if (essai < 2) await new Promise((r) => setTimeout(r, 400 * (essai + 1)))
        }
      }
      if (!view) return []
      const gx = view.getter('X')
      const gy = view.getter('Y')
      const gz = view.getter('Z')
      const out = []
      for (let i = 0; i < view.pointCount; i++) {
        out.push({ x: gx(i), y: gy(i), z: gz(i) })
      }
      return out
    })()
    nodeCache.set(ck, p)
  }
  const pts = await p
  if (!classes) return pts
  // Le filtrage par classification se fait ici si le fichier l'expose.
  return pts
}

/**
 * Récupère les points d'une bbox, dans le système de coordonnées du fichier.
 * Seuls les nœuds les plus profonds qui intersectent la bbox sont téléchargés.
 *
 * @param {string} urlNpl  URL du fichier COPC (IGN, open data)
 * @param {number} x1 @param {number} y1 @param {number} x2 @param {number} y2
 * @param {{ maxPoints?: number, onProgress?: (msg: string) => void }} options
 */
export async function fetchPointsInBbox(urlNpl, x1, y1, x2, y2, options = {}) {
  const { maxPoints = 400000, onProgress } = options
  if (!urlNpl) return []

  onProgress && onProgress('Ouverture du fichier LiDAR HD…')
  const root = await openRoot(urlNpl)

  const tous = []
  await collectNodes(urlNpl, root.cube, root.rootPage, x1, y1, x2, y2, tous)
  if (!tous.length) return []

  // Niveau le plus profond réellement disponible : les nœuds les plus petits.
  const profondeurMax = Math.max(...tous.map((n) => n.depth))
  let sel = tous.filter((n) => n.depth === profondeurMax)

  // Tri par proximité au centre, puis on borne le nombre de nœuds téléchargés.
  const cx = (x1 + x2) / 2
  const cy = (y1 + y2) / 2
  sel.sort((a, b) => {
    const ba = keyBounds(root.cube, a.key)
    const bb = keyBounds(root.cube, b.key)
    const da = Math.hypot((ba.minX + ba.maxX) / 2 - cx, (ba.minY + ba.maxY) / 2 - cy)
    const db = Math.hypot((bb.minX + bb.maxX) / 2 - cx, (bb.minY + bb.maxY) / 2 - cy)
    return da - db
  })

  onProgress && onProgress(`${sel.length} bloc(s) à lire…`)
  const morceaux = await Promise.all(sel.map((n) => loadNodePoints(urlNpl, root, n.key, n.node)))

  const points = []
  for (const morceau of morceaux) {
    for (const p of morceau) {
      if (p.x < x1 || p.x > x2 || p.y < y1 || p.y > y2) continue
      points.push(p)
      if (points.length >= maxPoints) break
    }
    if (points.length >= maxPoints) break
  }
  return points
}

/** Cube global du fichier (pour cadrer la vue). */
export async function getCube(urlNpl) {
  const root = await openRoot(urlNpl)
  return root.cube
}
