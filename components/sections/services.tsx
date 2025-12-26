export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance.",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications designed for iOS and Android platforms.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that engage users and drive conversions.",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and solutions for modern application deployment.",
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Enterprise-grade security solutions to protect your data and applications.",
    },
    {
      icon: "🚀",
      title: "DevOps",
      description: "Continuous integration and deployment pipelines for rapid and reliable releases.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive software development and consulting services to help your business thrive in the
            digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
