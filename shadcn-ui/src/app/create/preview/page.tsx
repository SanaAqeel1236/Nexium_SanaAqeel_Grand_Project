'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import StyleOneResume from '@/components/resume-styles/StyleOneResume'
import StyleTwoResume from '@/components/resume-styles/StyleTwoResume'
import StyleThreeResume from '@/components/resume-styles/StyleThreeResume'
import StyleFourResume from '@/components/resume-styles/StyleFourResume'
import StyleFiveResume from '@/components/resume-styles/StyleFiveResume'

export default function PreviewPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<any>(null)
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const resumeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const storedForm = localStorage.getItem('formData')
    const storedStyle = localStorage.getItem('selectedStyle')

    if (!storedForm || !storedStyle) {
      alert('Missing form data or selected style. Redirecting...')
      router.push('/create/manual')
      return
    }

    setFormData(JSON.parse(storedForm))
    setSelectedStyle(storedStyle)
  }, [router])

  const handleDownload = async () => {
    console.log('🟡 Download button clicked')

    if (!resumeRef.current) {
      console.error('❌ resumeRef is null')
      return
    }

    try {
      const html2pdfModule = await import('html2pdf.js')
      const html2pdf = html2pdfModule.default || html2pdfModule
      console.log('✅ html2pdf loaded')

      // Mark the PDF version with safe styles
      resumeRef.current.setAttribute('data-html2pdf', 'true')

      const opt = {
        margin: 0,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true, // enable CORS to support web fonts and images
          backgroundColor: '#ffffff',
        },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      }

      await html2pdf().set(opt).from(resumeRef.current).save()

      // Cleanup
      resumeRef.current.removeAttribute('data-html2pdf')
    } catch (err) {
      console.error('❌ Failed to download PDF:', err)
    }
  }

  if (!formData || !selectedStyle)
    return <p className="text-center mt-10">Loading preview...</p>

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 relative z-10">
      {/* Buttons */}
      <div className="flex justify-between mb-6 z-10 relative">
        <button
          onClick={() => router.push('/create/select-style')}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          ← Back
        </button>
        <button
          onClick={handleDownload}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
        >
          Download PDF
        </button>
      </div>

      {/* Resume Preview */}
      <div
        ref={resumeRef}
        className="bg-white p-6 shadow-lg rounded text-black"
      >
        {selectedStyle === 'style1' && <StyleOneResume data={formData} />}
        {selectedStyle === 'style2' && <StyleTwoResume data={formData} />}
        {selectedStyle === 'style3' && <StyleThreeResume data={formData} />}
        {selectedStyle === 'style4' && <StyleFourResume data={formData} />}
        {selectedStyle === 'style5' && <StyleFiveResume data={formData} />}
      </div>
    </div>
  )
}







