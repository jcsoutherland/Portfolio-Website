import React, { Suspense } from 'react'
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Html,
  useGLTF,
} from '@react-three/drei'

export const Model = () => {
  const gltf = useGLTF('/computer-model/scene.gltf', true)
  return <primitive object={gltf.scene} dispose={null} />
}

function ThreeElement(props) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[-0.2, 1.5, 2.5]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      {/*<OrbitControls enablePan={false} enableZoom={false} />*/}
      <Stars />
      {/*<mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color='hotpink' />
      </mesh>*/}
      <Suspense fallback={null}>
        <mesh position={[0.8, 0, -0.5]} rotation={[0, -0.5, 0]}>
          <Model />
        </mesh>
      </Suspense>
    </>
  )
}

export default ThreeElement
