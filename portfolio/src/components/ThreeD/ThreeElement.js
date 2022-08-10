import React, { Suspense, useRef, useState } from 'react'
import { PerspectiveCamera, Stars, Html, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Button from '../Button'

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

  /*position={[0.8, 0, -0.5]} rotation={[0, -0.5, 0]}
        <ambientLight intensity={0} color={'blue'} />
      <spotLight
        intensity={15}
        position={[10, 5, 10]}
        angle={0.3}
        color={'purple'}
      />
  */

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
      className={`z-0 ${props.className}`}
    >
      <Html fullscreen position={[0.2, 0.6, 0]}>
        <div className='text-7xl font-bold transition-colors duration-300'>
          <span className='gradient-text select-none to-pink-400'>
            Joey Southerland
          </span>
          <span className='mx-16 flex select-none items-center gap-1 text-2xl font-medium text-gray-500 transition-colors duration-300 dark:text-gray-400'>
            Software developer
          </span>
          <ButtonContainer />
        </div>
      </Html>
      <PerspectiveCamera makeDefault position={[-0.2, 1.5, 2.5]} />
      <ambientLight intensity={0} color={'purple'} />
      <spotLight
        intensity={30}
        position={[10, 5, 10]}
        angle={0.3}
        color={'purple'}
      />
      <Stars />
      <Suspense fallback={null}>
        <mesh ref={ref} position={[0.8, 0.2, -0.5]} rotation={[0, -0.5, 0]}>
          <Model />
        </mesh>
      </Suspense>
    </Canvas>
  )
}

export const ButtonContainer = (props) => {
  return (
    <div className={`ml-16 flex items-center gap-4 pt-2`}>
      <div className='button-container-none'>
        <Button
          text='LinkedIn'
          src="https://www.linkedin.com/in/joey-southerland-ksu/'"
          className='bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:text-white dark:hover:bg-black'
        />
      </div>
      <div className='button-container-none'>
        <Button
          text='Resume'
          src='./media/Resume.pdf'
          className='bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:text-white dark:hover:bg-black'
        />
      </div>
    </div>
  )
}

export default ThreeElement
