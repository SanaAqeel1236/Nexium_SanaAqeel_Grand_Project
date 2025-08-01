export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-gray-600 text-sm text-center py-4 px-6 mt-auto">
      <p>
        © {new Date().getFullYear()} <span className="font-semibold">Resume Tailor</span>. All rights reserved.
      </p>
    </footer>
  )
}

