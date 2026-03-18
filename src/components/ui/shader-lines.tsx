"use client"
import { useEffect, useRef } from "react"

declare global {
  interface Window {
    THREE: typeof import("three")
  }
}

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: unknown
    scene: unknown
    renderer: unknown
    uniforms: Record<string, unknown>
    animationId: number | null
  }>({
    camera: null,
    scene: null,
    renderer: null,
    uniforms: {},
    animationId: null,
  })

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js"
    script.onload = () => {
      if (containerRef.current && window.THREE) {
        initThreeJS()
      }
    }
    document.head.appendChild(script)

    return () => {
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId)
      }
      if (sceneRef.current.renderer) {
        (sceneRef.current.renderer as { dispose: () => void }).dispose()
      }
      if (script.parentNode) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const initThreeJS = () => {
    if (!containerRef.current || !window.THREE) return
    const THREE = window.THREE
    const container = containerRef.current

    container.innerHTML = ""

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const camera = new (THREE as any).Camera()
    camera.position.z = 1

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const scene = new (THREE as any).Scene()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const geometry = new (THREE as any).PlaneBufferGeometry(2, 2)

    const uniforms = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      time: { type: "f", value: 1.0 } as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      resolution: { type: "v2", value: new (THREE as any).Vector2() } as any,
    }

    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      float random (in float x) {
          return fract(sin(x)*1e4);
      }
      float random (vec2 st) {
          return fract(sin(dot(st.xy,
                               vec2(12.9898,78.233)))*
              43758.5453123);
      }

      varying vec2 vUv;
      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

        vec2 fMosaicScal = vec2(4.0, 2.0);
        vec2 vScreenSize = vec2(256,256);
        uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
        uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

        float t = time*0.06+random(uv.x)*0.4;
        float lineWidth = 0.0008;
        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*1.0 - length(uv));
          }
        }
        gl_FragColor = vec4(color[2],color[1],color[0],1.0);
      }
    `

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const material = new (THREE as any).ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mesh = new (THREE as any).Mesh(geometry, material)
    scene.add(mesh)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderer = new (THREE as any).WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: null,
    }

    const onWindowResize = () => {
      const rect = container.getBoundingClientRect()
      renderer.setSize(rect.width, rect.height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    const animate = () => {
      sceneRef.current.animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }
    animate()
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute"
    />
  )
}
