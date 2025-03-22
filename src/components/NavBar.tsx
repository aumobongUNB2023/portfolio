'use client'

import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50" aria-label="Primary Navigation">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <Link href="/" className="text-xl font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Mava.dev
        </Link>
        {/* Navigation Links */}
        <div className="space-x-6">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className="text-gray-700 hover:text-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Projects
          </Link>
          <Link 
            href="/post-its" 
            className="text-gray-700 hover:text-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Post-Its
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-700 hover:text-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
