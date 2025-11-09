"use client"

import { motion } from "framer-motion"

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-shadow z-40"
      aria-label="Back to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  )
}
