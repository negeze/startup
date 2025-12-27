import { motion } from "framer-motion";

const items = [
  "</>",
  "{ }",
  "API",
  "DEV",
  "🔒",
  "⚙️",
  "JS",
  "UI",
  "DB",
];

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20 text-3xl sm:text-4xl font-mono select-none"
          initial={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 800 - 400,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
