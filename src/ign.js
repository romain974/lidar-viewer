/**
 * Résolution de la dalle LiDAR HD de l'IGN pour une emprise géographique, et
 * changements de repère.
 *
 * Le service utilisé est le WFS de la Géoplateforme (open data, sans clé) :
 * on y demande les métadonnées des dalles qui intersectent l'emprise, et on
 * récupère l'URL du nuage de points (`url_npl`) à lire en COPC.
 */
import proj4 from 'proj4'

const WFS = 'https://data.geopf.fr/wfs/ows'

/**
 * Définitions des repères utilisés par les dalles LiDAR HD.
 * Lambert-93 couvre la France métropolitaine ; les DROM ont les leurs.
 */
const REPERES = {
  'EPSG:2154':
    '+proj=lcc +lat_0=46.5 +lon_0=3 +lat_1=49 +lat_2=44 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
  'EPSG:2975':
    '+proj=utm +zone=40 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
  'EPSG:5490':
    '+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
  'EPSG:2972':
    '+proj=utm +zone=22 +north +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
  'EPSG:4467':
    '+proj=utm +zone=21 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
}

for (const [code, def] of Object.entries(REPERES)) {
  proj4.defs(code, def)
}
proj4.defs('EPSG:4326', '+proj=longlat +datum=WGS84 +no_defs')

/** Longitude/latitude (WGS84) → coordonnées du repère cible. */
export function depuisWgs84(lon, lat, epsg) {
  // `epsg` arrive aussi bien en nombre (2154) qu'en code complet ('EPSG:2154').
  const cle = 'EPSG:' + String(epsg).replace(/[^0-9]/g, '')
  const def = REPERES[cle]
  if (!def) return [lon, lat] // repère inconnu : on ne transforme pas
  const [x, y] = proj4('EPSG:4326', cle, [lon, lat])
  return [x, y]
}

function pointDansGeometrie(pt, geom) {
  if (!geom) return false
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.type === 'MultiPolygon' ? geom.coordinates : []
  for (const poly of polys) {
    const anneau = poly[0] || []
    let dedans = false
    for (let i = 0, j = anneau.length - 1; i < anneau.length; j = i++) {
      const [xi, yi] = anneau[i]
      const [xj, yj] = anneau[j]
      if (yi > pt[1] !== yj > pt[1] && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) dedans = !dedans
    }
    if (dedans) return true
  }
  return false
}

function parametre(url, cle) {
  try {
    return new URL(url).searchParams.get(cle)
  } catch {
    const m = String(url).match(new RegExp(`[?&]${cle}=([^&]+)`, 'i'))
    return m ? decodeURIComponent(m[1]) : null
  }
}

/**
 * Trouve la dalle LiDAR HD qui contient (ou couvre au mieux) l'emprise.
 *
 * @param {number[]} bbox [minLon, minLat, maxLon, maxLat] en WGS84
 * @returns {Promise<{urlNpl: string, epsg: number, dalle: string}>}
 */
export async function resolveTile(bbox) {
  const [minLon, minLat, maxLon, maxLat] = bbox
  const cx = (minLon + maxLon) / 2
  const cy = (minLat + maxLat) / 2

  // WFS 2.0 en EPSG:4326 : ordre des axes lat,lon
  const url =
    `${WFS}?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature` +
    `&TYPENAME=IGNF_LIDAR-HD_METADONNEE:metadata` +
    `&outputFormat=application/json&SRSName=epsg:4326` +
    `&count=20&BBOX=${minLat},${minLon},${maxLat},${maxLon}`

  const r = await fetch(url)
  if (!r.ok) throw new Error(`Service IGN indisponible (HTTP ${r.status})`)
  const d = await r.json()
  const dalles = (d.features || []).filter((f) => f.properties && f.properties.url_npl)
  if (!dalles.length) {
    throw new Error("Aucune dalle LiDAR HD pour cette emprise (zone non couverte, ou hors France).")
  }

  // On préfère la dalle qui CONTIENT le centre de l'emprise.
  let choisie = dalles[0]
  const contenante = dalles.find((f) => pointDansGeometrie([cx, cy], f.geometry))
  if (contenante) choisie = contenante

  const urlNpl = choisie.properties.url_npl
  const crs = parametre(urlNpl, 'CRS') || parametre(choisie.properties.url_mns || '', 'CRS') || 'EPSG:2154'
  const epsg = parseInt(String(crs).replace(/[^0-9]/g, ''), 10) || 2154

  return { urlNpl, epsg, dalle: choisie.properties.coordonnees_nw || '' }
}

/** Emprise en mètres autour d'un point (par défaut 150 m de côté). */
export function bboxDepuisCentre(lon, lat, largeurM = 150) {
  const dLon = largeurM / 2 / (111320 * Math.cos((lat * Math.PI) / 180))
  const dLat = largeurM / 2 / 110540
  return [lon - dLon, lat - dLat, lon + dLon, lat + dLat]
}
