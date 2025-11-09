"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      image: "/b2.jpg",
      title: "Premium Plastic Solutions",
      subtitle: "Crafted with precision, designed for excellence",
    },
    {
      image: "/carrybag.jpg",
      title: "40 Years of Excellence",
      subtitle: "Trusted by businesses across India",
    },
    {
      image: "/hero.jpg",
      title: "Sustainable & Reliable",
      subtitle: "Quality that lasts, values that matter",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-screen md:h-[780px] overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image || "/placeholder.svg"}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-white space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold max-w-3xl mx-auto text-balance">
            {slides[current].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto">{slides[current].subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-gradient-accent text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
              Explore Products
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-filter text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? "bg-white w-8" : "bg-white/50 w-2"}`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  )
}
