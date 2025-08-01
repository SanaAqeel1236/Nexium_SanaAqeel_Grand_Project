'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CreatePage() {
  const router = useRouter()
  const [linkedinUsername, setLinkedinUsername] = useState('')

  const handleLinkedin = () => {
    if (linkedinUsername.trim()) {
      router.push(`/create/manual?linkedin=${linkedinUsername}`)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
            How do you want to create your resume?
          </h2>

          <div className="space-y-4">
            <Button
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold"
              onClick={() => router.push('/create/manual')}
            >
              Fill Manually
            </Button>

            <div className="border-t border-gray-300 pt-4 space-y-3">
              <p className="text-sm text-gray-600 text-center">OR enter LinkedIn username</p>
              <Input
                placeholder="e.g. johndoe123"
                className="bg-white border-gray-300"
                value={linkedinUsername}
                onChange={(e) => setLinkedinUsername(e.target.value)}
              />
              <Button
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold"
                onClick={handleLinkedin}
              >
                Fetch from LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}


