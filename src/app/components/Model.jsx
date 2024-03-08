import { MeshTransmissionMaterial, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef, useState, useEffect } from 'react'

import { useControls } from 'leva'

export default function Model () {
  const mesh = useRef()
  const [scale, setScale] = useState(1.5); // Starting scale


  useFrame(() => {
    mesh.current.rotation.x += 0.003
    mesh.current.rotation.y += 0.003
  })

  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0.02, min: 0, max: 1 },
  //   backside: { value: true },
  // })

  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1,
    chromaticAberration: 0.02,
    backside: true
  }

   // Define breakpoints and corresponding scales
   const breakpoints = [
    { height: 1200, groupScale: 1.8 },
    { height: 992, groupScale: 1.8 },
    { height: 768, groupScale: 1.5 },
    { heiht: 576, groupScale: 0.8 },
    { height: 0, groupScale: 3 }, // default to the smallest size
  ];

    // Update scale based on window width
    useEffect(() => {
      function updateScale() {
        const width = window.innerWidth;
        const activeBreakpoint = breakpoints.find(breakpoint => width >= breakpoint.width) || breakpoints[breakpoints.length - 1];
        setScale(activeBreakpoint.groupScale);
      }
  
      window.addEventListener('resize', updateScale);
      updateScale(); // Initial call
  
      return () => window.removeEventListener('resize', updateScale);
    }, []);

  const fontSize = 0.18
  const lineHeight = 0.45 // Adjust the line height as needed

  return (
    <group scale={scale}>
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
      <mesh ref={mesh} scale={1.6}>
        <boxGeometry />
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}
