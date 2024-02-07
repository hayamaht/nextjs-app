import React, { ReactNode } from 'react'

export default function BlogLayout({
  children
}:{
  children: ReactNode
}) {
  return (
    <div>
      <h2>Blog Layout</h2>
      {children}
    </div>
  )
}
