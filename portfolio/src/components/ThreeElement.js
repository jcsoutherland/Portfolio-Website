import React from 'react'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'

function ThreeElement(props) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[-0.2, 1.5, 2.5]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      {/*<OrbitControls enablePan={false} enableZoom={false} />*/}
      <Stars />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color='hotpink' />
      </mesh>
    </>
  )
}

export default ThreeElement
