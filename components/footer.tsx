"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <p className="font-bold text-white">Surya Kirti Poly Print</p>
                <p className="text-sm text-gray-400">Since 1985</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quality plastic packaging solutions for businesses across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About", id: "about" },
                { label: "Products", id: "products" },
                { label: "Why Us", id: "why-us" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+919876543210" className="hover:text-amber-400 transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li>
                <a href="mailto:suryakirtipolyprint@gmail.com" className="hover:text-amber-400 transition-colors">
                  suryakirtipolyprint@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <p>Mumbai, Maharashtra 400080</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>© {currentYear} Surya Kirti Poly Print. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
