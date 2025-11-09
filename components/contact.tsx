"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const contactMethods = [
  {
    title: "WhatsApp Chat",
    link: "https://wa.me/919876543210",
    icon: "💬",
    label: "Chat with us",
  },
  {
    title: "Call Us",
    link: "tel:+919876543210",
    icon: "☎️",
    label: "+91 9876543210",
  },
  {
    title: "Email Us",
    link: "mailto:suryakirtipolyprint@gmail.com",
    icon: "📧",
    label: "suryakirtipolyprint@gmail.com",
  },
]

export default function Contact() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out to us for inquiries, bulk orders, or custom packaging solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={method.link}
              target={method.link.startsWith("http") ? "_blank" : undefined}
              rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-xl bg-white border border-amber-200/50 hover:border-amber-300 shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
              <p className="text-amber-600 font-semibold group-hover:text-amber-700">{method.label}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200/50"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">📍 Our Location</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Gala No 08, Anjali Kumar Industrial Estate,
            <br />
            Near Subhas Nagar, Opposite MHADA Colony,
            <br />
            Nahur (E), Mumbai – 400080, Maharashtra, India
          </p>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1177.4196295736028!2d72.94209106925824!3d19.15835943034867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGala%20No%2008%20Anjali%20Kumar%20Industrial%20Estate%2C%20Near%20Subhas%20Nagar%20Nahur%2C%20Opposite%20Mhada%20Colony%2C%20Nahur-400080!5e1!3m2!1sen!2sin!4v1762702312305!5m2!1sen!2sin" 
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
