'use client'

import React from 'react'

import { ReactLenis } from 'lenis/react'

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactLenis root options={{ anchors: true, lerp: 0.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
