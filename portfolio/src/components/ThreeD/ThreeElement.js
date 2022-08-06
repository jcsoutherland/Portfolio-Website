import React, { Suspense, useRef, useState } from 'react'
import { PerspectiveCamera, Stars, Html, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

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
  window.addEventListener('scroll', () => {
    let windowTop = document.documentElement.scrollTop
    if (windowTop === 0) {
      ref.current.rotation.y = -0.5
    }
  })

  return (
    <Canvas
      onMouseDown={() => {
        setMouseDown(true)
      }}
      onMouseUp={() => {
        setMouseDown(false)
      }}
      onMouseMove={handleMouseMove}
    >
      <Html fullscreen position={[0.2, 0.6, 0]}>
        <div className='transition-colors duration-300 font-bold text-7xl'>
          <span className='select-none gradient-text to-pink-400'>
            Joey Southerland
          </span>
          <span className='select-none transition-colors duration-300 flex items-center gap-1 font-medium text-2xl text-gray-500 mx-10 dark:text-gray-400'>
            Front-end web developer
          </span>
          <ButtonContainer />
        </div>
      </Html>
      <PerspectiveCamera makeDefault position={[-0.2, 1.5, 2.5]} />
      <ambientLight intensity={0} color={'blue'} />
      <spotLight
        intensity={15}
        position={[10, 5, 10]}
        angle={0.3}
        color={'purple'}
      />
      <Stars />
      <Suspense fallback={null}>
        <mesh ref={ref} position={[0.8, 0, -0.5]} rotation={[0, -0.5, 0]}>
          <Model />
        </mesh>
      </Suspense>
    </Canvas>
  )
}

export const ButtonContainer = () => {
  return (
    <div className='flex items-center gap-4 ml-16 pt-2'>
      <div className='button-container-none'>
        <button
          className='button'
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/joey-southerland-ksu/',
              '_blank'
            )
          }}
        >
          <span className='select-none dark:text-white'>LinkedIn</span>
        </button>
      </div>
      <div className='button-container-none'>
        <button
          className='button'
          onClick={() => {
            window.open('./media/Resume.pdf', '_blank')
          }}
        >
          <span className='select-none dark:text-white'>Resume</span>
        </button>
      </div>
    </div>
  )
}

export default ThreeElement
