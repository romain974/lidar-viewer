/**
 * Construction de la distribution autonome.
 *
 *   node build.mjs
 *
 * Produit dans dist/ :
 *   - lidar-viewer.js       lisible, non minifié (lecture, débogage intégration)
 *   - lidar-viewer.min.js   minifié, à charger en production
 *   - laz-perf.wasm         décompression LAZ, chargé à côté du script
 *   - version.json
 */
import { build } from 'esbuild'
import { copyFileSync, mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ici = dirname(fileURLToPath(import.meta.url))
const dist = join(ici, 'dist')
mkdirSync(dist, { recursive: true })

const version = JSON.parse(readFileSync(join(ici, 'package.json'), 'utf8')).version

const bandeau = `/*! lidar-viewer v${version} — visionneuse de nuages de points LiDAR HD (IGN, open data)
 *  Utilisation libre, y compris commerciale, à condition de conserver le crédit
 *  vers simulateur-toiture.fr affiché par la visionneuse.
 *  Dépôt et documentation : https://github.com/romain974/lidar-viewer
 */`

for (const [fichier, minifier] of [
  ['lidar-viewer.js', false],
  ['lidar-viewer.min.js', true],
]) {
  await build({
    entryPoints: [join(ici, 'src', 'index.js')],
    outfile: join(dist, fichier),
    bundle: true,
    format: 'iife',
    globalName: 'LidarViewer',
    target: ['es2019'],
    minify: minifier,
    legalComments: 'none',
    banner: { js: bandeau },
  })
}

const wasm = [
  join(ici, 'node_modules', 'laz-perf', 'lib', 'web', 'laz-perf.wasm'),
  join(ici, '..', 'surface-toiture', 'node_modules', 'laz-perf', 'lib', 'web', 'laz-perf.wasm'),
].find((p) => existsSync(p))
if (!wasm) throw new Error('laz-perf.wasm introuvable — lancez `npm install` d\'abord.')
copyFileSync(wasm, join(dist, 'laz-perf.wasm'))

writeFileSync(join(dist, 'version.json'), JSON.stringify({ lib: 'lidar-viewer', version }, null, 2) + '\n')

const ko = (f) => (readFileSync(join(dist, f)).length / 1024).toFixed(0) + ' Ko'
console.log(`✓ dist/lidar-viewer.js ${ko('lidar-viewer.js')} · lidar-viewer.min.js ${ko('lidar-viewer.min.js')} · laz-perf.wasm ${ko('laz-perf.wasm')}`)
