export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Anderson",
      company: "TechStart Inc",
      role: "CEO",
      quote: "TechFlow transformed our business with their innovative solutions. Highly recommended!",
      avatar: "👩‍💼",
    },
    {
      name: "Michael Chen",
      company: "Digital Ventures",
      role: "Product Manager",
      quote: "The team delivered exactly what we needed on time and within budget. Excellent work!",
      avatar: "👨‍💼",
    },
    {
      name: "Emma Rodriguez",
      company: "StartupHub",
      role: "Founder",
      quote: "Professional, reliable, and innovative. TechFlow is our trusted development partner.",
      avatar: "👩‍🚀",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the businesses we've helped succeed with our solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
