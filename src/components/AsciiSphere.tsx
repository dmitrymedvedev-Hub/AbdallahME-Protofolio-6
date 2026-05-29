import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function AsciiSphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0, isDown: false, lastX: 0, lastY: 0 })
  const rotationRef = useRef({ x: Math.PI * 0.15, y: 0, autoRotate: true })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    )
    camera.position.set(0, 0, 45)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(1.6, window.devicePixelRatio))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 1)
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.cursor = 'grab'
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Add a wireframe cage
    const cageGeometry = new THREE.IcosahedronGeometry(18, 4)
    // derive color from CSS variables so theme tokens control the wireframe color
    const cssWhite = getComputedStyle(document.documentElement).getPropertyValue('--color-white-rgb') || '255 255 255'
    const wireColor = `rgb(${cssWhite.trim()})`
    const cageMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(wireColor),
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    })
    const cage = new THREE.Mesh(cageGeometry, cageMaterial)
    scene.add(cage)

    // Animation
    let elapsedTime = 0
    let lastTime = performance.now()

    const animate = () => {
      const now = performance.now()
      const delta = (now - lastTime) / 1000
      lastTime = now
      elapsedTime += delta

      // Auto-rotation
      if (rotationRef.current.autoRotate && !mouseRef.current.isDown) {
        rotationRef.current.y += delta * 0.15
      }

      // Apply rotation
      cage.rotation.y = rotationRef.current.y * 0.8
      cage.rotation.x = rotationRef.current.x * 0.8

      renderer.render(scene, camera)
      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    // Mouse interaction
    const handlePointerDown = (e: PointerEvent) => {
      mouseRef.current.isDown = true
      mouseRef.current.lastX = e.clientX
      mouseRef.current.lastY = e.clientY
      rotationRef.current.autoRotate = false
      renderer.domElement.style.cursor = 'grabbing'
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (!mouseRef.current.isDown) return
      const dx = e.clientX - mouseRef.current.lastX
      const dy = e.clientY - mouseRef.current.lastY
      rotationRef.current.y += dx * 0.005
      rotationRef.current.x += dy * 0.005
      rotationRef.current.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, rotationRef.current.x))
      mouseRef.current.lastX = e.clientX
      mouseRef.current.lastY = e.clientY
    }

    const handlePointerUp = () => {
      mouseRef.current.isDown = false
      renderer.domElement.style.cursor = 'grab'
      setTimeout(() => {
        rotationRef.current.autoRotate = true
      }, 2000)
    }

    renderer.domElement.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameRef.current)
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      cageGeometry.dispose()
      cageMaterial.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0"
    />
  )
}

export default AsciiSphere
