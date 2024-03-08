import { MeshTransmissionMaterial, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useControls } from 'leva'

export default function Model () {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.005
    mesh.current.rotation.y += 0.005
  })

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true }
  })

  return (
    <group>
      <Text
        fontSize={0.5}
        color={'#fff'}
        letterSpacing={-0.05}
        font='fonts/NHaasGroteskTXPro-55Rg.ttf'
        position={[0, 0.25, -0.5]}
      >
        hey. im alex.
      </Text>
      <Text
        fontSize={0.5}
        color={'#fff'}
        letterSpacing={-0.05}
        font='fonts/NHaasGroteskTXPro-55Rg.ttf'
        position={[0, -0.25, -0.5]}
      >
       ( designer + dev )
      </Text>
      <mesh ref={mesh} scale={1.5}>
        <boxGeometry />
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}
