'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollAnimation from '@/components/ScrollAnimation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const portfolioItems = [
    { 
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop', 
      alt: 'Corporate conference', 
      title: 'Corporate Conference', 
      category: 'corporate' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop', 
      alt: 'Business seminar', 
      title: 'Business Seminar', 
      category: 'corporate' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?w=800&h=600&fit=crop', 
      alt: 'Corporate gathering', 
      title: 'Corporate Gathering', 
      category: 'corporate' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop', 
      alt: 'Wedding decoration', 
      title: 'Elegant Wedding Setup', 
      category: 'weddings' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop', 
      alt: 'Wedding celebration', 
      title: 'Wedding Celebration', 
      category: 'weddings' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop', 
      alt: 'Wedding venue', 
      title: 'Wedding Venue Decoration', 
      category: 'weddings' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop', 
      alt: 'Official ceremony', 
      title: 'Official Ceremony', 
      category: 'government' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop', 
      alt: 'Public event', 
      title: 'Public Event Setup', 
      category: 'government' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop', 
      alt: 'Educational event', 
      title: 'Convocations & Ceremonies', 
      category: 'institutional' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop', 
      alt: 'Academic seminar', 
      title: 'Academic Seminar', 
      category: 'institutional' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop', 
      alt: 'Hospitality service', 
      title: 'Guest Hospitality', 
      category: 'hospitality' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop', 
      alt: 'Catering service', 
      title: 'Catering Setup', 
      category: 'hospitality' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop', 
      alt: 'Event setup', 
      title: 'Event Setup', 
      category: 'corporate' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop', 
      alt: 'Wedding arrangement', 
      title: 'Elegant Arrangement', 
      category: 'weddings' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop', 
      alt: 'Formal event', 
      title: 'Formal Event', 
      category: 'government' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?w=800&h=600&fit=crop', 
      alt: 'Institutional gathering', 
      title: 'Institutional Gathering', 
      category: 'institutional' 
    },
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'government', label: 'Government & Public' },
    { id: 'institutional', label: 'Institutional' },
    { id: 'hospitality', label: 'Hospitality' },
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <>
      {/* Page Header */}
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=600&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-charcoal-dark/70 to-charcoal-dark/80"></div>
        <div className="relative z-10 text-center text-ivory px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold">Our Portfolio</h1>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-6 sm:py-8 bg-ivory-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border-2 transition-all duration-300 uppercase text-xs sm:text-sm tracking-wider font-medium ${
                  activeFilter === filter.id
                    ? 'bg-charcoal-dark text-ivory border-charcoal-dark'
                    : 'bg-transparent text-charcoal border-charcoal hover:bg-charcoal hover:text-ivory'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-ivory text-lg sm:text-xl font-heading mb-1 sm:mb-2">{item.title}</h3>
                    <span className="text-gold-light text-xs sm:text-sm uppercase tracking-wider">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
