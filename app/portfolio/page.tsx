'use client'

import { motion } from 'framer-motion'

export default function Portfolio() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-dark">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 text-center text-ivory px-4 py-20 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-4 sm:mb-6">
            Loading Soon
          </h1>
          <p className="text-gold text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wider">
            Our portfolio is being updated
          </p>
        </motion.div>
      </div>
    </section>
  )
}
