import { MeshTransmissionMaterial, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef, useState, useEffect } from 'react'

import { useControls } from 'leva'

export default function Model () {
  const mesh = useRef()
  const [scale, setScale] = useState(1.5) // Starting scale

  useFrame(() => {
    mesh.current.rotation.x += 0.004
    mesh.current.rotation.y += 0.005
  })

  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.01 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1, min: 0, max: 3, step: 0.01 },
  //   chromaticAberration: { value: 0.02, min: 0, max: 1 },
  //   backside: { value: true },
  // })

  const materialProps = {
    thickness: 0.3,
    roughness: 0.01,
    transmission: 1,
    ior: 1,
    chromaticAberration: 0.015,
    backside: true
  }

  const fontSize = 0.18
  const lineHeight = 0.4 // Adjust the line height as needed

  return (
    <group scale={0.88}>
      <Text
        fontSize={fontSize}
        color={'#fff'}
        font='fonts/NHaasGroteskTXPro-65Md.ttf'
        position={[-0.39, 1 * lineHeight, -0.5]} // First text above
      >
        hey. i&apos;m alex.
      </Text>
      <Text
        fontSize={fontSize}
        color={'#fff'}
        font='fonts/NHaasGroteskTXPro-65Md.ttf'
        position={[0.29, 0.5 * lineHeight, -0.5]} // Second text above
      >
        i&apos;m a (designer)
      </Text>
      <Text
        fontSize={fontSize}
        color={'#fff'}
        font='fonts/NHaasGroteskTXPro-65Md.ttf'
        position={[0, 0, -0.5]} // Central text
      >
        & &lt;/developer&gt; based
      </Text>
      <Text
        fontSize={fontSize}
        fontWeight={200}
        color={'#fff'}
        font='fonts/NHaasGroteskTXPro-65Md.ttf'
        position={[-0.84, -0.5 * lineHeight, -0.5]} // First text below
      >
        in
      </Text>
      <Text
        fontSize={fontSize}
        color={'#fff'}
        font='fonts/NHaasGroteskTXPro-65Md.ttf'
        position={[-0.075, -1 * lineHeight, -0.5]} // Second text below
      >
        stockholm, sweden.
      </Text>
      <mesh ref={mesh} scale={1.4}>
        <torusGeometry />
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}
