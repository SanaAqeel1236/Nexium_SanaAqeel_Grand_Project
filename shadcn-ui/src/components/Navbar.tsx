'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaRegFileAlt } from 'react-icons/fa' // Optional: Icon as logo

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo and title */}
        <Link href="/" className="flex items-center space-x-2 text-white hover:text-gray-200 transition">
          <FaRegFileAlt className="text-2xl" />
          <span className="text-xl font-bold tracking-wide">Resume Tailor</span>
        </Link>

        {/* Desktop nav */}
        <nav className="space-x-4 hidden sm:flex items-center">
          <Link href="/">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 transition">Home</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
