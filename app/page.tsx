"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
// import  Hero  from "@/components/hero"
import About from "@/components/about"
import Products from "@/components/products"
import WhyChooseUs from "@/components/why-choose-us"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <HeroCarousel />
      <About />
      <Products />
      <WhyChooseUs />
      <Contact />
      <Footer />
      {showBackToTop && <BackToTop />}
    </main>
  )
}
