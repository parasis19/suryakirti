"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Products", id: "products" },
    { label: "Why Us", id: "why-us" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent backdrop-blur-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-sm sm:text-lg text-foreground">Surya Kirti</span>
                <span className="text-xs text-muted-foreground">Poly Print</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-8">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-amber-600 transition-colors font-medium text-sm lg:text-base"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Desktop CTA Button */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all hover:scale-105"
              >
                WhatsApp
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-foreground transition-colors"
                />
                <motion.div
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-foreground transition-colors"
                />
                <motion.div
                  animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-foreground transition-colors"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-background/98 backdrop-blur border-b border-border shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((item) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 rounded-lg text-foreground hover:bg-amber-50 transition-colors font-medium"
                >
                  {item.label}
                </motion.button>
              ))}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all mt-2"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
