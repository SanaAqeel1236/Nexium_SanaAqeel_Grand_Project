'use client'

import { useResume } from '@/context/ResumeContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const styles = [
  { id: 'style1', name: 'Classic Resume' },
  { id: 'style2', name: 'Modern Two-Column' },
  { id: 'style3', name: 'Minimalist Full-Width' },
  { id: 'style4', name: 'Timeline Layout' },
  { id: 'style5', name: 'Creative Sidebar' },
]

export default function SelectStylePage() {
  const router = useRouter()
  const { resumeData } = useResume()
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)

  useEffect(() => {
    const savedStyle = localStorage.getItem('selectedStyle')
    if (savedStyle) {
      setSelectedStyle(savedStyle)
    }
  }, [])

  const handleContinue = () => {
    if (!selectedStyle) {
      alert('Please select a resume style.')
      return
    }

    localStorage.setItem('selectedStyle', selectedStyle)

    if (resumeData) {
      localStorage.setItem('formData', JSON.stringify(resumeData))
    } else {
      alert('No resume data found. Please go back and fill the form.')
      return
    }

    router.push('/create/preview')
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800">
      <Navbar />

      <br></br>

      <main className="flex-grow py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Select a <span className="text-indigo-600">Resume Style</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Choose a layout that best represents your personality and profession.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {styles.map((style) => (
              <motion.div
                key={style.id}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedStyle(style.id)}
                className={`rounded-xl p-6 cursor-pointer transition-all border shadow-md bg-white hover:shadow-xl ${
                  selectedStyle === style.id
                    ? 'border-indigo-500 ring-2 ring-indigo-300'
                    : 'border-gray-200'
                }`}
              >
                <h2 className="text-xl font-semibold mb-4 text-center text-indigo-700">{style.name}</h2>

<div className="h-32 bg-gray-100 flex items-center justify-center rounded overflow-hidden shadow">
  <img
    src="data:image/png;base64,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" // 🔁 Replace with full base64 or image URL
    alt={`${style.name} preview`}
    className="object-cover w-full h-full"
  />
</div>

              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              onClick={handleContinue}
              disabled={!selectedStyle}
              className="text-lg px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white transition duration-300 shadow-md hover:shadow-lg"
            >
              Continue
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}


