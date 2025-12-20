'use client'

import Link from 'next/link'
import Image from 'next/image'
import Hero3D from '@/components/Hero3D'
import ScrollAnimation from '@/components/ScrollAnimation'
import { motion } from 'framer-motion'

export default function Home() {
  const services = [
    {
      icon: 'fas fa-briefcase',
      title: 'Corporate Events',
      description: 'Conferences, seminars, annual meets, and corporate gatherings',
    },
    {
      icon: 'fas fa-landmark',
      title: 'Government Events',
      description: 'Official ceremonies, inaugurations, and public events',
    },
    {
      icon: 'fas fa-heart',
      title: 'Weddings & Social',
      description: 'Complete planning for weddings and family celebrations',
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Institutional Events',
      description: 'School and college functions, convocations, and workshops',
    },
    {
      icon: 'fas fa-concierge-bell',
      title: 'Hospitality & Logistics',
      description: 'Guest accommodation, travel, and on-site logistics support',
    },
  ]

  const features = [
    'Professional Planning & Coordination',
    'Transparent Budgeting & Clear Communication',
    'Trusted Vendor Network',
    'Single-Point Responsibility',
    'Timely Execution & On-Ground Supervision',
  ]

  const portfolioImages = [
    { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop', alt: 'Corporate event', category: 'Corporate Event' },
    { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop', alt: 'Wedding decoration', category: 'Wedding Celebration' },
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop', alt: 'Formal event', category: 'Formal Gathering' },
    { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop', alt: 'Event setup', category: 'Elegant Setup' },
    { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop', alt: 'Conference', category: 'Conference' },
    { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop', alt: 'Event venue', category: 'Venue Decoration' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&h=1080&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-charcoal-dark/70 to-charcoal-dark/80"></div>
        <Hero3D />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-ivory py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6 text-balance px-4"
          >
            Crafting Thoughtful & Timeless Events
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-ivory-light max-w-3xl mx-auto leading-relaxed px-4"
          >
            At JASHN Events & Hospitality Pvt. Ltd., we specialize in planning and executing corporate, government, institutional, wedding, and social events with precision, professionalism, and attention to detail.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-ivory-light max-w-3xl mx-auto px-4"
          >
            Based in Ara – Bhojpur – Patna, we deliver end-to-end event and hospitality solutions designed to create seamless experiences—planned thoughtfully and executed flawlessly.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-ivory-light max-w-3xl mx-auto px-4"
          >
            From concept to completion, JASHN manages every detail—so you can focus on the moment.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <Link href="/contact" className="btn btn-primary text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4">
              Plan Your Event
            </Link>
            <Link href="/portfolio" className="btn btn-secondary text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-6 sm:mb-8 relative inline-block">
                  Welcome to JASHN
                  <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gold"></span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-4">
                  JASHN is a professionally managed event management and hospitality company delivering structured, reliable, and elegant event solutions for clients across Bihar.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  We work closely with corporates, institutions, government bodies, and families to create events that are well-planned, well-managed, and memorable for all the right reasons.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                  alt="Elegant event setup"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-12 sm:py-16 md:py-20 bg-ivory-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-8 sm:mb-12 text-center relative inline-block w-full">
              Our Services
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold"></span>
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 0.1}>
                <div className="bg-white p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                  <div className="text-4xl sm:text-5xl text-gold mb-4 sm:mb-6">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation delay={0.5}>
            <div className="text-center mt-8 sm:mt-12">
              <Link href="/services" className="btn btn-outline text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4">
                View All Services
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-8 sm:mb-12 text-center relative inline-block w-full">
              Our Work
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold"></span>
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolioImages.map((image, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Link href="/portfolio" className="group relative block aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <span className="text-ivory text-base sm:text-lg md:text-xl font-medium uppercase tracking-wider">
                      {image.category}
                    </span>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation delay={0.5}>
            <div className="text-center mt-8 sm:mt-12">
              <Link href="/portfolio" className="btn btn-primary text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4">
                View Full Gallery
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Choose JASHN */}
      <section className="py-12 sm:py-16 md:py-20 bg-ivory-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-8 sm:mb-12 text-center relative inline-block w-full">
              Why Choose JASHN
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold"></span>
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature} delay={index * 0.1}>
                <div className="bg-white p-4 sm:p-6 flex items-start gap-3 sm:gap-4 border-l-4 border-gold">
                  <div className="text-2xl sm:text-3xl text-gold flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-heading">{feature}</h3>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation delay={0.5}>
            <p className="text-center mt-8 sm:mt-12 text-base sm:text-lg md:text-xl italic text-charcoal px-4">
              At JASHN, every event is managed with care, structure, and accountability.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-charcoal-dark to-charcoal text-ivory">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-4 sm:mb-6 px-4">
              Ready to Plan Your Event?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-ivory-light px-4">
              Let's create something extraordinary together
            </p>
            <Link href="/contact" className="btn btn-primary text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4">
              Plan Your Event
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
