/**
 * lidar-viewer — afficher un nuage de points LiDAR HD (IGN, open data) dans
 * une page web, à partir d'une simple emprise géographique.
 *
 *   LidarViewer.create({ container: '#vue', center: [6.13, 43.14], span: 120 })
 *
 * Utilisation libre et gratuite, y compris commerciale, à une condition :
 * conserver le lien de crédit vers simulateur-toiture.fr affiché par la
 * librairie (option `credit`, activée par défaut).
 *
 * Les données LiDAR HD sont produites par l'IGN et diffusées en open data.
 * Cette librairie n'en est qu'une visionneuse, sans coloration ni maillage.
 */
import { fetchPointsInBbox, setWasmUrl } from './copc.js'
import { resolveTile, bboxDepuisCentre, depuisWgs84 } from './ign.js'
import { VisionneusePoints } from './gl.js'

const VERSION = '1.0.0'
const SITE = 'https://www.simulateur-toiture.fr'
const STYLE_ID = 'lidar-viewer-style'

/** URL du .wasm de décompression : à côté du script qui charge la librairie. */
function baseDuScript() {
  try {
    const courant = document.currentScript
    const src = courant && courant.src
      ? courant.src
      : [...document.scripts].map((s) => s.src).find((s) => /lidar-viewer(\.min)?\.js/.test(s))
    if (src) return new URL('.', src).href
  } catch {
    /* ignore */
  }
  return './'
}

const FEUILLE = `
.lv-cadre{position:relative;width:100%;background:#0b1220;border-radius:12px;overflow:hidden;font-family:Inter,system-ui,-apple-system,'Segoe UI',sans-serif}
.lv-canvas{display:block;width:100%;height:100%;cursor:grab;touch-action:none}
.lv-canvas:active{cursor:grabbing}
.lv-etat,.lv-aide,.lv-credit{position:absolute;z-index:2;font-size:12px;line-height:1.35;border-radius:999px;padding:5px 10px;backdrop-filter:blur(6px)}
.lv-etat{top:10px;left:10px;background:rgba(15,23,42,.72);color:#e2e8f0;transition:opacity .8s}
.lv-etat--erreur{background:rgba(127,29,29,.85);color:#fee2e2}
.lv-aide{bottom:10px;left:10px;background:rgba(15,23,42,.6);color:#94a3b8;transition:opacity .6s}
.lv-aide--cache{opacity:0}
/* crédit : discret, mais présent — c'est le lien qui fait vivre la librairie */
.lv-credit{bottom:8px;right:8px;background:rgba(15,23,42,.5);color:rgba(226,232,240,.62);font-size:11px;padding:4px 9px}
.lv-credit a{color:rgba(226,232,240,.78);text-decoration:none;border-bottom:1px solid rgba(226,232,240,.28)}
.lv-credit a:hover{color:#fff;border-bottom-color:#fff}
`

function injecterFeuille() {
  if (document.getElementById(STYLE_ID)) return
  const s = document.createElement('style')
  s.id = STYLE_ID
  s.textContent = FEUILLE
  document.head.appendChild(s)
}

function cible(container) {
  if (!container) throw new Error('lidar-viewer : option `container` manquante.')
  const el = typeof container === 'string' ? document.querySelector(container) : container
  if (!el) throw new Error(`lidar-viewer : conteneur introuvable (${container}).`)
  return el
}

/**
 * Crée une visionneuse dans un conteneur.
 *
 * @param {object} options
 * @param {string|HTMLElement} options.container
 * @param {number[]} [options.bbox] [minLon, minLat, maxLon, maxLat] en WGS84
 * @param {number[]} [options.center] [lon, lat] — alternative à `bbox`
 * @param {number} [options.span] côté de l'emprise en mètres si `center` est utilisé (150 par défaut)
 * @param {number} [options.height] hauteur en pixels (360 par défaut)
 * @param {string} [options.couleur] couleur des points
 * @param {string} [options.fond] couleur de fond
 * @param {boolean} [options.credit] afficher le lien de crédit (true par défaut)
 * @param {string} [options.wasmUrl] URL explicite du fichier laz-perf.wasm
 * @param {(etat: string) => void} [options.onStatus]
 * @param {(infos: object) => void} [options.onReady]
 * @param {(erreur: Error) => void} [options.onError]
 */
export function create(options = {}) {
  injecterFeuille()
  const hote = cible(options.container)
  const hauteur = options.height || 360

  const cadre = document.createElement('div')
  cadre.className = 'lv-cadre'
  cadre.style.height = hauteur + 'px'

  const canvas = document.createElement('canvas')
  canvas.className = 'lv-canvas'
  cadre.appendChild(canvas)

  const etat = document.createElement('div')
  etat.className = 'lv-etat'
  etat.textContent = 'Préparation…'
  cadre.appendChild(etat)

  const aide = document.createElement('div')
  aide.className = 'lv-aide'
  aide.textContent = 'glisser pour pivoter · molette pour zoomer'
  cadre.appendChild(aide)

  if (options.credit !== false) {
    const credit = document.createElement('div')
    credit.className = 'lv-credit'
    const lien = document.createElement('a')
    lien.href = options.creditUrl || SITE
    lien.target = '_blank'
    lien.rel = 'noopener'
    lien.textContent = 'simulateur-toiture.fr'
    credit.append('LiDAR HD (IGN) · visionneuse ', lien)
    cadre.appendChild(credit)
  }

  hote.appendChild(cadre)

  if (options.wasmUrl) setWasmUrl(options.wasmUrl)
  else setWasmUrl(baseDuScript() + 'laz-perf.wasm')

  let visionneuse = null
  const dire = (texte) => {
    etat.className = 'lv-etat'
    etat.textContent = texte
    options.onStatus && options.onStatus(texte)
  }

  try {
    visionneuse = new VisionneusePoints(canvas, {
      couleur: options.couleur || '#e2e8f0',
      fond: options.fond || '#0b1220',
    })
  } catch (e) {
    etat.className = 'lv-etat lv-etat--erreur'
    etat.textContent = e.message
    options.onError && options.onError(e)
    return { destroy: () => cadre.remove(), ready: Promise.reject(e) }
  }

  setTimeout(() => aide.classList.add('lv-aide--cache'), 5000)

  const lire = async (bbox) => {
    try {
      dire('Recherche de la dalle LiDAR HD…')
      const { urlNpl, epsg, dalle } = await resolveTile(bbox)
      dire('Téléchargement des points…')
      const [x1, y1] = depuisWgs84(bbox[0], bbox[1], epsg)
      const [x2, y2] = depuisWgs84(bbox[2], bbox[3], epsg)
      const xmin = Math.min(x1, x2)
      const xmax = Math.max(x1, x2)
      const ymin = Math.min(y1, y2)
      const ymax = Math.max(y1, y2)
      const points = await fetchPointsInBbox(urlNpl, xmin, ymin, xmax, ymax, {
        maxPoints: options.maxPoints || 400000,
        onProgress: dire,
      })
      if (!points.length) throw new Error('Aucun point LiDAR dans cette emprise.')
      visionneuse.setPoints(points)
      dire(`${points.length.toLocaleString('fr-FR')} points`)
      setTimeout(() => (etat.style.opacity = '0.35'), 2500)
      options.onReady && options.onReady({ points: points.length, epsg, dalle, urlNpl })
      return points
    } catch (e) {
      etat.className = 'lv-etat lv-etat--erreur'
      etat.textContent = e.message
      options.onError && options.onError(e)
      throw e
    }
  }

  const api = {
    version: VERSION,
    canvas,
    cadre,
    visionneuse,
    recadrer: () => visionneuse.recadrer(),
    setPoints: (points) => visionneuse.setPoints(points),
    setBbox: (bbox) => lire(bbox),
    setCenter: (centre, span) => lire(bboxDepuisCentre(centre[0], centre[1], span || options.span || 150)),
    destroy: () => {
      visionneuse.destroy()
      cadre.remove()
    },
  }

  const premier = options.bbox
    ? options.bbox
    : options.center
      ? bboxDepuisCentre(options.center[0], options.center[1], options.span || 150)
      : null

  api.ready = premier ? lire(premier) : Promise.resolve(null)
  return api
}

export const version = VERSION

export default { create, version: VERSION }
