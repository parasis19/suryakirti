"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
          >
            <img
              src="/b1.jpg"
              alt="About Surya Kirti"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-transparent"></div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} className="order-1 md:order-2">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              About Us
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed"
            >
              Established in 1985, Surya Kirti Poly Print is a trusted name in plastic packaging solutions. With 40
              years of industry experience, we've built a reputation for excellence and reliability.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
            >
              We specialize in high-quality LDPE, HDPE, and printed carry bags for retail, industrial, and customized
              applications. Our commitment to eco-friendly and durable packaging ensures your products are protected
              while maintaining sustainability.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">40+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">100%</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Quality Assured</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">1000+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
