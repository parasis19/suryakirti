"use client"

import { motion } from "framer-motion"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative w-full min-h-screen pt-16 sm:pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bag2.jpg"
          alt="Manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center py-16 sm:py-24 min-h-[calc(100vh-64px)]"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight"
        >
          Surya Kirti Poly Print
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-amber-100 mb-6 sm:mb-8 max-w-2xl text-balance"
        >
          Crafting Quality Plastic Bags Since 1985
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-12 max-w-2xl text-balance"
        >
          Premium packaging solutions for retail, industrial, and custom applications
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-2"
        >
          <a
            href="tel:+919876543210"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 inline-block text-center text-sm sm:text-base"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/20 backdrop-blur text-white rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all inline-block text-center text-sm sm:text-base"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="text-white text-center">
          <div className="text-xs sm:text-sm mb-2">Scroll to explore</div>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
