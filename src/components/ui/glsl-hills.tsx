"use client"
import { useEffect, useRef } from "react"

declare global {
  interface Window {
    THREE_HILLS?: boolean
  }
}

export function GlslHills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    renderer: unknown
    animationId: number | null
  }>({
    renderer: null,
    animationId: null,
  })

  useEffect(() => {
    if (!containerRef.current) return

    // Check if THREE is already loaded from shader-lines
    const existingScript = document.querySelector('script[src*="three.min.js"]')

    const init = () => {
      if (containerRef.current && (window as unknown as Record<string, unknown>).THREE) {
        initThreeJS()
      }
    }

    if (existingScript && (window as unknown as Record<string, unknown>).THREE) {
      init()
    } else {
      const script = document.createElement("script")
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js"
      script.onload = init
      document.head.appendChild(script)
    }

    return () => {
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId)
      }
      if (sceneRef.current.renderer) {
        (sceneRef.current.renderer as { dispose: () => void }).dispose()
      }
    }
  }, [])

  const initThreeJS = () => {
    if (!containerRef.current) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const THREE = (window as any).THREE
    const container = containerRef.current
    container.innerHTML = ""

    const camera = new THREE.Camera()
    camera.position.z = 1
    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneBufferGeometry(2, 2)

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }

    const vertexShader = `void main() { gl_Position = vec4(position, 1.0); }`

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 6; i++) {
          value += amplitude * noise(p);
          p *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main(void) {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        uv.x *= resolution.x / resolution.y;

        float t = time * 0.02;

        // Layered hills
        float hills = 0.0;
        for (int i = 0; i < 4; i++) {
          float fi = float(i);
          float scale = 2.0 + fi * 1.5;
          float speed = t * (0.3 + fi * 0.1);
          float height = 0.15 + fi * 0.12;
          float h = fbm(vec2(uv.x * scale + speed, fi * 3.14)) * height;
          float y = uv.y - (0.2 + fi * 0.15);
          float line = smoothstep(0.0, 0.003, abs(y - h));
          float fill = smoothstep(h, h - 0.15, y);

          float brightness = 0.08 + fi * 0.04;
          hills += (1.0 - line) * brightness * 2.0;
          hills += fill * brightness * 0.3;
        }

        // Base gradient
        float gradient = smoothstep(0.0, 1.0, uv.y) * 0.03;

        vec3 color = vec3(hills + gradient);

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    sceneRef.current = { renderer, animationId: null }

    const onResize = () => {
      const rect = container.getBoundingClientRect()
      renderer.setSize(rect.width, rect.height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }
    onResize()
    window.addEventListener("resize", onResize, false)

    const animate = () => {
      sceneRef.current.animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }
    animate()
  }

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0" />
  )
}
