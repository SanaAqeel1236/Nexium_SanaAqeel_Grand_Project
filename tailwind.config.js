/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // ✅ Completely disable Tailwind's new color functions
  corePlugins: {
    preflight: false, // optional if using global CSS reset
  },
  plugins: [],
}

