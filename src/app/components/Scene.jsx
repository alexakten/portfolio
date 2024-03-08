'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Model from '@/app/components/Model'

export default function Scene () {
  return (
    <Canvas
      style={{ backgroundColor: '#000', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1} position={[0, 3, 2]} />
      <Model />
    </Canvas>
  )
}
