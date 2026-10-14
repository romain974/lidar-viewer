/**
 * Serveur statique minimal pour la démonstration — aucune dépendance.
 *
 *   node demo/serve.mjs        → http://localhost:5180
 *
 * Sert la racine du dépôt : l'exemple index.html s'affiche donc exactement
 * comme sur GitHub Pages (https://romain974.github.io/lidar-viewer/).
 */
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const racine = join(dirname(fileURLToPath(import.meta.url)), '..')
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.wasm': 'application/wasm',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
}

createServer(async (req, res) => {
  try {
    let chemin = decodeURIComponent(new URL(req.url, 'http://x').pathname)
    if (chemin === '/') chemin = '/index.html'
    const fichier = join(racine, normalize(chemin).replace(/^([/\\])+/, ''))
    const s = await stat(fichier)
    if (s.isDirectory()) throw new Error('dossier')
    const corps = await readFile(fichier)
    const entetes = { 'content-type': TYPES[extname(fichier)] || 'application/octet-stream' }
    // Requêtes Range : indispensables pour la lecture COPC par blocs.
    const range = req.headers.range
    if (range && /^bytes=/.test(range)) {
      const [deb, fin] = range.replace('bytes=', '').split('-')
      const a = deb ? parseInt(deb, 10) : 0
      const b = fin ? Math.min(parseInt(fin, 10), s.size - 1) : s.size - 1
      res.writeHead(206, {
        ...entetes,
        'content-range': `bytes ${a}-${b}/${s.size}`,
        'accept-ranges': 'bytes',
        'content-length': b - a + 1,
      })
      res.end(corps.subarray(a, b + 1))
      return
    }
    res.writeHead(200, { ...entetes, 'accept-ranges': 'bytes', 'content-length': s.size })
    res.end(corps)
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
    res.end('404')
  }
}).listen(5180, () => console.log('démonstration : http://localhost:5180'))
