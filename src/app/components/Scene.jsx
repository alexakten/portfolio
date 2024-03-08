'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Model from '@/app/components/Model'

export default function Scene () {
  // Decide on your canvas size
  const fixedWidth = window.innerWidth
  const fixedHeight = window.innerHeight

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Canvas>
        <ambientLight intensity={1} position={[0, 3, 2]} />
        <Model />
      </Canvas>
    </div>
  )
}
