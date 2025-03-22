'use client'

import NavBar from './NavBar'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  console.log('✅ ClientLayout rendered')
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
