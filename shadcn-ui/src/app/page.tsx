'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Welcome to <span className="text-indigo-600">Resume Tailor</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Create a beautiful, AI-enhanced resume in just a few clicks.
          </p>
          <Button
            size="lg"
            className="text-lg px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white transition duration-300 shadow-md hover:shadow-lg"
            onClick={() => router.push('/create')}
          >
            Create Resume
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}


