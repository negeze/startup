"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to start your next project? Contact us and let's create something amazing together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-xl border border-border">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="NextEthTech@gmail.com"
              className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <p className="text-2xl mb-2">📍</p>
            <p className="font-medium">Address</p>
            <p className="text-sm text-muted-foreground">Adama ,Ethiopia</p>
          </div>
          <div className="text-center">
            <p className="text-2xl mb-2">📞</p>
            <p className="font-medium">Phone</p>
            <p className="text-sm text-muted-foreground">(+251)920262706</p>
          </div>
          <div className="text-center">
            <p className="text-2xl mb-2">📧</p>
            <p className="font-medium">Email</p>
            <p className="text-sm text-muted-foreground">zelekenegese@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
