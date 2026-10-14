/**
 * Rendu d'un nuage de points en WebGL — volontairement minimal.
 *
 * Aucune dépendance, aucun habillage : on affiche les points, un ton unique,
 * sans coloration, sans maillage, sans ombrage. Une caméra orbitale (glisser
 * pour tourner, molette pour zoomer) suffit à lire la géométrie.
 *
 * Pour éviter les problèmes de précision des flottants 32 bits sur des
 * coordonnées françaises (Lambert-93 : X ≈ 650 000, Y ≈ 6 600 000), on
 * recentre et on normalise le nuage dans une sphère de rayon 1 avant l'envoi
 * au GPU. La caméra travaille donc toujours en [-1, 1].
 */

const VS = `
attribute vec3 aPos;
uniform mat4 uMVP;
uniform float uDensity;
void main() {
  vec4 vue = uMVP * vec4(aPos, 1.0);
  gl_Position = vue;
  float dist = max(length(vue.xyz), 0.001);
  gl_PointSize = clamp(uDensity / dist, 1.2, 7.0);
}`

const FS = `
precision mediump float;
uniform vec3 uColor;
void main() {
  vec2 d = gl_PointCoord - vec2(0.5);
  float r = dot(d, d);
  if (r > 0.25) discard;
  float alpha = smoothstep(0.25, 0.12, r);
  gl_FragColor = vec4(uColor, alpha);
}`

/* ── algèbre de matrices 4×4 (colonnes, convention WebGL) ── */

function perspective(fov, aspect, near, far) {
  const f = 1 / Math.tan(fov / 2)
  const nf = 1 / (near - far)
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, 2 * far * near * nf, 0,
  ])
}

function lookAt(oeil, cible, haut) {
  let z = [oeil[0] - cible[0], oeil[1] - cible[1], oeil[2] - cible[2]]
  const lz = Math.hypot(...z) || 1
  z = z.map((v) => v / lz)
  let x = [haut[1] * z[2] - haut[2] * z[1], haut[2] * z[0] - haut[0] * z[2], haut[0] * z[1] - haut[1] * z[0]]
  const lx = Math.hypot(...x) || 1
  x = x.map((v) => v / lx)
  const y = [z[1] * x[2] - z[2] * x[1], z[2] * x[0] - z[0] * x[2], z[0] * x[1] - z[1] * x[0]]
  return new Float32Array([
    x[0], y[0], z[0], 0,
    x[1], y[1], z[1], 0,
    x[2], y[2], z[2], 0,
    -(x[0] * oeil[0] + x[1] * oeil[1] + x[2] * oeil[2]),
    -(y[0] * oeil[0] + y[1] * oeil[1] + y[2] * oeil[2]),
    -(z[0] * oeil[0] + z[1] * oeil[1] + z[2] * oeil[2]),
    1,
  ])
}

function multiplier(a, b) {
  const out = new Float32Array(16)
  for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
      out[c * 4 + r] =
        a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3]
    }
  }
  return out
}

export class VisionneusePoints {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {{ couleur?: string, fond?: string, density?: number }} options
   */
  constructor(canvas, options = {}) {
    this.canvas = canvas
    this.fond = options.fond || '#0b1220'
    this.couleur = hexVersRgb(options.couleur || '#e2e8f0')
    this.density = options.density || 1

    const gl = canvas.getContext('webgl', { antialias: true, alpha: false, preserveDrawingBuffer: true })
    if (!gl) throw new Error('WebGL indisponible dans ce navigateur.')
    this.gl = gl

    this.programme = this._programme(VS, FS)
    this.aPos = gl.getAttribLocation(this.programme, 'aPos')
    this.uMVP = gl.getUniformLocation(this.programme, 'uMVP')
    this.uDensity = gl.getUniformLocation(this.programme, 'uDensity')
    this.uColor = gl.getUniformLocation(this.programme, 'uColor')

    this.buffer = gl.createBuffer()
    this.nb = 0
    this.rayon = 1
    this.centre = [0, 0, 0]

    this.azimut = -0.9
    this.elevation = 0.62
    this.distance = 2.7

    this._lierEvenements()
    this.redimensionner()
  }

  _programme(vsSrc, fsSrc) {
    const gl = this.gl
    const creer = (type, src) => {
      const s = gl.createShader(type)
      gl.shaderSource(s, src)
      gl.compileShader(s)
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s))
      return s
    }
    const p = gl.createProgram()
    gl.attachShader(p, creer(gl.VERTEX_SHADER, vsSrc))
    gl.attachShader(p, creer(gl.FRAGMENT_SHADER, fsSrc))
    gl.linkProgram(p)
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p))
    return p
  }

  _lierEvenements() {
    const c = this.canvas
    let x0 = 0
    let y0 = 0
    let actif = false

    const debut = (x, y) => {
      actif = true
      x0 = x
      y0 = y
    }
    const mouvement = (x, y) => {
      if (!actif) return
      this.azimut -= (x - x0) * 0.008
      this.elevation = Math.max(-1.35, Math.min(1.45, this.elevation + (y - y0) * 0.006))
      x0 = x
      y0 = y
      this.dessiner()
    }

    c.addEventListener('pointerdown', (e) => {
      c.setPointerCapture(e.pointerId)
      debut(e.clientX, e.clientY)
    })
    c.addEventListener('pointermove', (e) => mouvement(e.clientX, e.clientY))
    c.addEventListener('pointerup', () => {
      actif = false
    })
    c.addEventListener('pointercancel', () => {
      actif = false
    })
    c.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault()
        this.distance = Math.max(0.35, Math.min(12, this.distance * (1 + Math.sign(e.deltaY) * 0.12)))
        this.dessiner()
      },
      { passive: false }
    )

    // Pincement à deux doigts
    let pince = 0
    const doigts = new Map()
    c.addEventListener('pointerdown', (e) => doigts.set(e.pointerId, null))
    c.addEventListener(
      'pointermove',
      (e) => {
        if (!doigts.has(e.pointerId)) return
        doigts.set(e.pointerId, e)
        if (doigts.size === 2) {
          const [a, b] = [...doigts.values()]
          if (a && b) {
            const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY)
            if (pince) {
              this.distance = Math.max(0.35, Math.min(12, this.distance * (pince / d)))
              this.dessiner()
            }
            pince = d
          }
        }
      },
      { passive: true }
    )
    const relacher = (e) => {
      doigts.delete(e.pointerId)
      if (doigts.size < 2) pince = 0
    }
    c.addEventListener('pointerup', relacher)
    c.addEventListener('pointercancel', relacher)

    this._observer = new ResizeObserver(() => this.redimensionner())
    this._observer.observe(c)
  }

  /** Charge un nuage de points : [{x, y, z}, …] en coordonnées réelles. */
  setPoints(points) {
    const gl = this.gl
    const n = points.length
    this.nb = n
    if (!n) {
      this.donnees = new Float32Array(0)
      this.dessiner()
      return
    }

    // Centre et rayon (le nuage est ramené dans une sphère de rayon 1)
    let minX = Infinity
    let minY = Infinity
    let minZ = Infinity
    let maxX = -Infinity
    let maxY = -Infinity
    let maxZ = -Infinity
    for (const p of points) {
      if (p.x < minX) minX = p.x
      if (p.y < minY) minY = p.y
      if (p.z < minZ) minZ = p.z
      if (p.x > maxX) maxX = p.x
      if (p.y > maxY) maxY = p.y
      if (p.z > maxZ) maxZ = p.z
    }
    this.centre = [(minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2]
    this.rayon = Math.max(maxX - minX, maxY - minY, maxZ - minZ) / 2 || 1
    this.etendue = { x: maxX - minX, y: maxY - minY, z: maxZ - minZ }

    const data = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      data[i * 3] = (points[i].x - this.centre[0]) / this.rayon
      data[i * 3 + 1] = (points[i].y - this.centre[1]) / this.rayon
      data[i * 3 + 2] = (points[i].z - this.centre[2]) / this.rayon
    }
    this.donnees = data

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
    this.dessiner()
  }

  redimensionner() {
    const c = this.canvas
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const l = Math.max(1, Math.round(c.clientWidth * dpr))
    const h = Math.max(1, Math.round(c.clientHeight * dpr))
    if (c.width !== l || c.height !== h) {
      c.width = l
      c.height = h
    }
    this.dessiner()
  }

  /** Replace la caméra sur la vue d'ensemble. */
  recadrer() {
    this.azimut = -0.9
    this.elevation = 0.62
    this.distance = 2.7
    this.dessiner()
  }

  dessiner() {
    const gl = this.gl
    const c = this.canvas
    if (!c.width || !c.height) return

    gl.viewport(0, 0, c.width, c.height)
    const f = hexVersRgb(this.fond)
    gl.clearColor(f[0], f[1], f[2], 1)
    gl.clearDepth(1)
    gl.enable(gl.DEPTH_TEST)
    gl.depthFunc(gl.LEQUAL)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    if (!this.nb) return

    gl.useProgram(this.programme)

    const aspect = c.width / c.height
    const proj = perspective((50 * Math.PI) / 180, aspect, 0.02, 60)

    const ce = Math.cos(this.elevation)
    const oeil = [
      Math.cos(this.azimut) * ce * this.distance,
      Math.sin(this.azimut) * ce * this.distance,
      Math.sin(this.elevation) * this.distance,
    ]
    const mvp = multiplier(proj, lookAt(oeil, [0, 0, 0], [0, 0, 1]))

    gl.uniformMatrix4fv(this.uMVP, false, mvp)
    gl.uniform1f(this.uDensity, (c.height / 2) * 0.019 * this.density)
    gl.uniform3f(this.uColor, this.couleur[0], this.couleur[1], this.couleur[2])

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
    gl.enableVertexAttribArray(this.aPos)
    gl.vertexAttribPointer(this.aPos, 3, gl.FLOAT, false, 0, 0)
    gl.drawArrays(gl.POINTS, 0, this.nb)
  }

  destroy() {
    if (this._observer) this._observer.disconnect()
    const gl = this.gl
    if (gl) {
      gl.deleteBuffer(this.buffer)
      gl.deleteProgram(this.programme)
      const perte = gl.getExtension('WEBGL_lose_context')
      if (perte) perte.loseContext()
    }
  }
}

function hexVersRgb(hex) {
  const h = hex.replace('#', '')
  const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const n = parseInt(v, 16)
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}
