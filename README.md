# lidar-viewer

**Affichez une portion de dalle LiDAR HD de l'IGN dans n'importe quelle page web.**

On donne une emprise géographique (ou une adresse, côté démo), la librairie télécharge les
seuls blocs nécessaires au format [COPC](https://copc.io/) par requêtes HTTP Range, et rend le
nuage de points en 3D. Pas de clé d'API, pas de serveur, pas de bundler, pas de dépendance de build.

- **Données** : LiDAR HD © IGN, open data (licence Etalab 2.0) — ~10 points/m² sur toute la France
- **Poids** : ~70 Ko compressé, dont la décompression LAZ en WebAssembly
- **Rendu** : WebGL minimal — des points, un ton unique, sans coloration ni maillage
- **Licence** : libre, y compris en usage commercial, à une condition — conserver le crédit

## Démonstration

- Exemple en ligne (GitHub Pages) : <https://romain974.github.io/lidar-viewer/>
- Documentation en français : <https://www.simulateur-toiture.fr/lidar-viewer>
- Démo locale, sans rien installer d'autre :

```bash
git clone https://github.com/romain974/lidar-viewer.git
cd lidar-viewer && npm install && npm run build && npm run demo
# → http://localhost:5180  (même page que celle publiée sur GitHub Pages)
```

## Installation

### En une balise script

```html
<div id="vue" style="height:420px"></div>

<script src="https://cdn.jsdelivr.net/gh/romain974/lidar-viewer@main/dist/lidar-viewer.min.js"></script>
<script>
  LidarViewer.create({
    container: '#vue',
    center: [6.1294, 45.8992], // [longitude, latitude]
    span: 150,                 // côté de l'emprise, en mètres
    height: 420,
  })
</script>
```

La même version est servie depuis le site, si vous préférez une origine unique :

```
https://www.simulateur-toiture.fr/lidar-viewer/lidar-viewer.min.js
```

Le fichier `laz-perf.wasm` doit se trouver **à côté** du script (il est chargé automatiquement
depuis le dossier du script). Sur jsDelivr comme sur notre site, c'est le cas.

### En npm

```bash
npm install lidar-viewer
```

```js
import { create } from 'lidar-viewer'

const vue = create({ container: '#vue', center: [6.1294, 45.8992], span: 150 })
```

## Démarrage rapide

```js
const vue = LidarViewer.create({
  container: '#vue',
  bbox: [6.1280, 45.8985, 6.1308, 45.8999], // [minLon, minLat, maxLon, maxLat]
  onReady: (infos) => console.log(infos.points, 'points'),
})

vue.ready.then(() => console.log('affiché'))
```

Une seule des deux options `bbox` ou `center` est nécessaire. `center` + `span` est le plus
simple : on ne connaît jamais son emprise exacte, seulement le lieu.

## Options

| Option | Rôle | Défaut |
| --- | --- | --- |
| `container` | Sélecteur CSS ou élément qui reçoit la visionneuse | **obligatoire** |
| `bbox` | Emprise `[minLon, minLat, maxLon, maxLat]` en WGS84 | — |
| `center` | Centre de l'emprise `[lon, lat]` | — |
| `span` | Côté de l'emprise en mètres (avec `center`) | `150` |
| `height` | Hauteur en pixels | `360` |
| `couleur` | Teinte unique des points | `#e2e8f0` |
| `fond` | Couleur de fond de la visionneuse | `#0b1220` |
| `maxPoints` | Plafond de points téléchargés | `400000` |
| `credit` | Afficher le lien de crédit | `true` |
| `wasmUrl` | URL explicite du fichier `laz-perf.wasm` | déduite du script |
| `onStatus` | `(texte) => void`, étapes de chargement | — |
| `onReady` | `(infos) => void`, `{ points, epsg, dalle, urlNpl }` | — |
| `onError` | `(erreur) => void` | — |

## Méthodes de l'instance

| Méthode | Effet |
| --- | --- |
| `setCenter([lon, lat], span)` | Charge une autre zone sans recréer la visionneuse |
| `setBbox(bbox)` | Idem, avec une emprise explicite |
| `setPoints(points)` | Affiche un nuage fourni par vous (`[{x, y, z}, …]`) |
| `recadrer()` | Replace la caméra sur la vue d'ensemble |
| `destroy()` | Libère le contexte WebGL et retire la visionneuse du DOM |
| `ready` | `Promise` résolue quand le premier nuage est affiché |

Fonctions exportées : `create(options)`, `version`, et pour les usages avancés
`resolveTile(bbox)` (trouve la dalle IGN) et `fetchPointsInBbox(urlNpl, x1, y1, x2, y2)`.

## Comment ça marche

Les dalles LiDAR HD sont livrées en **COPC** : un octree feuilleté dont chaque nœud est un petit
bloc compressé. La librairie ne télécharge **que** les nœuds qui intersectent votre emprise, via
des requêtes HTTP Range — quelques dizaines de Ko pour une maison, au lieu de plusieurs
gigaoctets pour la dalle entière. Chaque nœud lu est mis en cache : réafficher la même zone ne
retélécharge rien.

Le nuage est ensuite recentré et normalisé (coordonnées françaises : X ≈ 650 000, Y ≈ 6 600 000 —
hors de portée d'un flottant 32 bits), puis rendu par un programme WebGL unique : des points, un
test de profondeur, une caméra orbitale. Aucune bibliothèque 3D n'est embarquée.

Repères gérés pour la conversion de l'emprise : Lambert-93 (métropole), RGR92/UTM 40S (La
Réunion), RGAF09/UTM 20N (Antilles), RGFG95/UTM 22N (Guyane), RGTAAF07/UTM 21S (Terres
australes). Une zone non encore couverte par le programme LiDAR HD renvoie une erreur explicite.

## Licence et crédit

Utilisation **libre, y compris commerciale, gratuite**, sans inscription — à une condition :
**conserver le lien de crédit vers <https://www.simulateur-toiture.fr> affiché par la visionneuse**
(option `credit`, activée par défaut). Ce lien discret finance le développement et l'hébergement
de la librairie. Le masquer, le rendre inopérant ou le remplacer n'est pas autorisé par la licence.

Une dérogation est accordée sans difficulté aux projets éducatifs, de recherche et associatifs :
il suffit de demander.

Les données LiDAR HD sont produites par l'**IGN** et diffusées en open data (licence Etalab 2.0).
Cette librairie n'est qu'une visionneuse : elle ne produit ni ne modifie ces données. Si vous
publiez une carte, une étude ou un outil, citez l'IGN pour les données.

## Limites assumées

- **Affichage seulement.** Pas de coloration par classification, pas de maillage, pas de mesure.
  C'est volontaire : l'objectif est de lire la géométrie du terrain, pas de produire une image.
  Pour mesurer la surface et la pente d'une toiture, voir
  [le simulateur](https://www.simulateur-toiture.fr).
- **WebGL requis.** La visionneuse signale son absence par un message et via `onError`.
- **Réseau requis.** Les points sont lus à la demande depuis les serveurs de l'IGN : comptez
  une à trois secondes pour une maison.
- Pas de rendu hors écran ni d'export d'image natif : `canvas.toDataURL()` reste possible
  (`preserveDrawingBuffer` est activé pour cela).

## Développement

```bash
npm install
npm run build   # → dist/lidar-viewer.js, .min.js, laz-perf.wasm, version.json
npm run demo    # → http://localhost:5180
```

Le code source tient en quatre fichiers :

| Fichier | Rôle |
| --- | --- |
| `src/copc.js` | Lecture COPC en HTTP Range, cache par nœud |
| `src/ign.js` | Résolution de la dalle (WFS Géoplateforme) et changements de repère |
| `src/gl.js` | Rendu WebGL des points et caméra orbitale |
| `src/index.js` | API publique, habillage de la visionneuse, crédit |

## Liens

- Documentation en français : <https://www.simulateur-toiture.fr/lidar-viewer>
- Le simulateur de mesure de toiture : <https://www.simulateur-toiture.fr>
- Le LiDAR HD expliqué : <https://www.simulateur-toiture.fr/lidar-hd-mesurer-toiture>
- Programme LiDAR HD de l'IGN : <https://geoservices.ign.fr/lidarhd>
