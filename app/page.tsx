"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Projects from "@/components/sections/projects"
import Testimonials from "@/components/sections/testimonials"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if dark mode is preferred
    if (typeof window !== "undefined") {
      const isDarkMode =
        document.documentElement.classList.contains("dark") || window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDark(isDarkMode)
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (typeof window !== "undefined") {
      if (isDark) {
        document.documentElement.classList.remove("dark")
      } else {
        document.documentElement.classList.add("dark")
      }
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
