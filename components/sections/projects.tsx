export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A scalable e-commerce platform that enables users to browse products and place orders.",
      tech: ["Next/TypeScript", "Laravel", "Mysqul"],
      image: "placeholder",
    },
    {
      title: "Healthcare platform",
      description: "The platform is used for patient management and appointment scheduling.",
      tech: [ "Laravel", "PostgreSQL", "React/TypeScript"],
      image: "placeholder",
    },
    {
      title: "social media management platform",
      description: "A smart social media management platform that allows users to create, schedule, and publish content across multiple social networks from one dashboard.",
      tech: ["Next.js", "PostgreSQL", "Laravel", "Tailwind"],
      image: "placeholder",
    },
    {
      title: "Child care Web App",
      description: "A modern child care web app that helps parents and caregivers manage child profiles, schedules, and daily activities in one secure platform.",
      tech: ["Larave", "", "FastAPI", "PostgreSQL","Next js"],
      image: "placeholder",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent work that showcases our expertise and capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video bg-secondary/50 overflow-hidden relative">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground group-hover:bg-secondary/70 transition-colors">
                  {project.image}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-background">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
