    import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
      


    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="inline-block px-4 py-2 rounded-full
                 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-amber-500/10
                 border border-blue-500/20"
    >
      <motion.span
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-sm font-semibold
                   bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600
                   bg-[length:200%_200%]
                   bg-clip-text text-transparent"
      >
        Welcome to NexEthi Tech
      </motion.span>
    </motion.div>



          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Build Your <span className="text-primary">Digital Future</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            We're a team of expert developers and designers creating innovative software solutions that drive growth and
            transform ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Placeholder for hero image */}
        <div className="mt-20">
          <div className="relative mx-auto max-w-3xl aspect-video bg-secondary/50 rounded-xl border border-border overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground">Your Software Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
