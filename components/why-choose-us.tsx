"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const features = [
  {
    title: "40 Years of Expertise",
    description: "Four decades of proven excellence in plastic packaging",
  },
  {
    title: "Quality & Reliability",
    description: "Consistently delivering premium products you can trust",
  },
  {
    title: "Bulk & Custom Orders",
    description: "Flexible solutions for orders of any size or specification",
  },
  {
    title: "Eco-Conscious Practices",
    description: "Commitment to sustainable and environmentally responsible manufacturing",
  },
  {
    title: "Timely Delivery",
    description: "Fast and reliable delivery across Mumbai and surrounding areas",
  },
  {
    title: "Expert Support",
    description: "Dedicated team ready to assist with your packaging needs",
  },
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="why-us"
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Why Choose Us</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Discover what sets us apart in the plastic packaging industry
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-6 sm:p-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/50 hover:border-amber-300 transition-all duration-300 group hover:shadow-lg"
            >
              <div className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 pr-12">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
