import { MeshTransmissionMaterial, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useControls } from 'leva'

export default function Model () {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.003
    mesh.current.rotation.y += 0.003
  })

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true }
  })

  const lineHeight = 0.66 // Adjust the line height as needed

  return (
    <group>
      <Text
        fontSize={0.28}
        color={'#fff'}
        font='fonts/NHaasGroteskTXPro-65Md.ttf'
        position={[-0.64, 1 * lineHeight, -0.5]} // First text above
      >
        hey. im alex.
      </Text>
      <Text
        fontSize={0.28}
        color={'#fff'}
        font='fonts/NHaasGroteskTXPro-65Md.ttf'
        position={[0.44, 0.5 * lineHeight, -0.5]} // Second text above
      >
        i&apos;m a (designer)
      </Text>
      <Text
        fontSize={0.28}
        color={'#fff'}
        font='fonts/NHaasGroteskTXPro-65Md.ttf'
        position={[0, 0, -0.5]} // Central text
      >
        & &lt;/developer&gt; based
      </Text>
      <Text
        fontSize={0.28}
        fontWeight={200}
        color={'#fff'}
        font='fonts/NHaasGroteskTXPro-65Md.ttf'
        position={[-1.32, -0.5 * lineHeight, -0.5]} // First text below
      >
        in
      </Text>
      <Text
        fontSize={0.28}
        color={'#fff'}
        font='fonts/NHaasGroteskTXPro-65Md.ttf'
        position={[-0.13, -1 * lineHeight, -0.5]} // Second text below
      >
        stockholm, sweden.
      </Text>
      <mesh ref={mesh} scale={1.6}>
        <boxGeometry />
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}
