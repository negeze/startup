export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-secondary/50 rounded-xl border border-border overflow-hidden flex items-center justify-center">
              <span className="text-muted-foreground">Our Team</span>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                About <span className="text-primary">NexEthi Tec</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Since 2022, we've been committed to delivering exceptional software development services. Our team of
                experienced developers, designers, and project managers work together to create solutions that exceed
                expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">3+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              We specialize in custom software development, mobile apps, web applications, and digital transformation
              consulting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
