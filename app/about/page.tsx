'use client'

import Image from 'next/image'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function About() {
  const values = [
    {
      icon: 'fas fa-star',
      title: 'Excellence',
      description: 'Uncompromising standards in every detail',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Trust',
      description: 'Transparent operations and clear communication',
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'Creative solutions for every unique event',
    },
    {
      icon: 'fas fa-clock',
      title: 'Reliability',
      description: 'Timely execution and dependable service',
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=600&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-charcoal-dark/70 to-charcoal-dark/80"></div>
        <div className="relative z-10 text-center text-ivory px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold">About JASHN</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <ScrollAnimation>
              <div>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 sm:mb-6 text-charcoal font-light">
                  Founded with a commitment to quality and clarity, JASHN Events & Hospitality Pvt. Ltd. is built on the principles of planning excellence, transparent operations, and dependable execution.
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-charcoal">
                  Our strength lies in understanding client requirements, coordinating trusted vendors, managing logistics, and ensuring smooth on-ground execution. Every event we manage reflects our belief that great events are not accidental—they are carefully planned.
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 text-charcoal">
                  With operations centered in Ara, Bhojpur, and Patna, JASHN is steadily expanding its footprint while maintaining uncompromising standards of professionalism.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {values.map((value, index) => (
                    <ScrollAnimation key={value.title} delay={index * 0.1}>
                      <div className="text-center p-4 sm:p-6">
                        <div className="text-3xl sm:text-4xl text-gold mb-3 sm:mb-4">
                          <i className={value.icon}></i>
                        </div>
                        <h3 className="text-lg sm:text-xl font-heading mb-2">{value.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=1000&fit=crop"
                  alt="Professional event planning"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}
