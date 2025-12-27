"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LearnMoreModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="bg-background rounded-xl max-w-3xl w-full p-6 sm:p-8 relative">

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              >
                ✕
              </button>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-6 items-center">

                {/* Text */}
                <div className="space-y-4 text-left">
                  <h2 className="text-3xl font-bold">
                    Building Secure & Scalable Solutions
                  </h2>
                  <p className="text-muted-foreground">
                    We specialize in modern web and software development using
                    cutting-edge technologies. Our solutions focus on security,
                    performance, and scalability to support your business growth.
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    <li>Custom Web & Mobile Applications</li>
                    <li>Cloud & API Development</li>
                    <li>Secure Systems & Authentication</li>
                    <li>UI/UX Focused Design</li>
                  </ul>
                </div>

                {/* Image */}
                <div className="relative aspect-square rounded-lg overflow-hidden border">
                  <Image
                    src="/images/development.jpeg"
                    alt="Development Process"
                    fill
                    className="object-cover"
                  />
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
