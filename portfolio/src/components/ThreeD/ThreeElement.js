import React, { Suspense, useRef, useState } from 'react'
import { PerspectiveCamera, Stars, Html, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

export const Model = () => {
  const gltf = useGLTF('/computer-model/scene.gltf', true)
  return <primitive object={gltf.scene} dispose={null} />
}

function ThreeElement(props) {
  const [mouseDown, setMouseDown] = useState(false)

  let timestamp = 0
  let mX = 0
  const handleMouseMove = (e) => {
    if (mouseDown) {
      let multiplier = 1
      let now = Date.now()
      let currentmX = e.screenX
      let dt = now - timestamp
      if (currentmX < mX) {
        multiplier = -1
      }
      let distance = Math.abs(currentmX - mX)
      let speed = (Math.round(distance / dt) / 30) * multiplier
      ref.current.rotation.y += speed
      mX = currentmX
      timestamp = now
    }
  }

  const ref = useRef()
  /*useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    ref.current.rotation.x = a
  })*/

  return (
    <Canvas
      onMouseDown={() => {
        setMouseDown(true)
      }}
      onMouseUp={() => {
        setMouseDown(false)
      }}
      onMouseMove={handleMouseMove}
      className={`z-0 ${props.className}`}
      id='three-canvas'
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 3, 5]}
        rotation={[-0.4, 0, 0]}
      />
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <mesh ref={ref} position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <Model />
        </mesh>
      </Suspense>
    </Canvas>
  )
}

export default ThreeElement
