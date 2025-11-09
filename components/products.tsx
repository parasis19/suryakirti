"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const products = [
  {
    title: "Printed Carry Bags",
    description: "Custom-branded bags with high-quality printing for retail and promotional use",
    icon: "📦",
  },
  {
    title: "Plain Plastic Bags",
    description: "Durable LDPE and HDPE bags for everyday packaging needs",
    icon: "🛍️",
  },
  {
    title: "Custom-Branded Bags",
    description: "Personalized packaging solutions tailored to your brand identity",
    icon: "🎨",
  },
  {
    title: "Industrial Packaging",
    description: "Heavy-duty bags for industrial and commercial applications",
    icon: "🏭",
  },
]

export default function Products() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="products"
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/50 via-white to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Products & Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Comprehensive packaging solutions to meet all your industrial and retail needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100/50 hover:border-amber-300/50"
            >
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {product.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{product.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{product.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
