'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Services() {
  const services = [
    {
      icon: 'fas fa-briefcase',
      title: 'Corporate & Business Events',
      description: 'Conferences, seminars, annual meets, product launches, dealer meets, and corporate gatherings executed with structure and professionalism.',
      points: [
        'Conference Management',
        'Product Launches',
        'Corporate Meetings',
        'Annual Functions',
        'Dealer & Vendor Meets',
      ],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      reverse: false,
    },
    {
      icon: 'fas fa-landmark',
      title: 'Government & Public Events',
      description: 'Official ceremonies, inaugurations, exhibitions, awareness programs, and institutional events with proper protocol and coordination.',
      points: [
        'Official Ceremonies',
        'Inaugurations',
        'Public Exhibitions',
        'Awareness Campaigns',
        'Protocol Management',
      ],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      reverse: true,
    },
    {
      icon: 'fas fa-heart',
      title: 'Weddings & Social Events',
      description: 'Complete planning and coordination for weddings, engagements, receptions, and private family celebrations.',
      points: [
        'Wedding Planning',
        'Engagement Ceremonies',
        'Reception Management',
        'Social Gatherings',
        'Family Celebrations',
      ],
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop',
      reverse: false,
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Educational & Institutional Events',
      description: 'School and college functions, convocations, workshops, academic seminars, and formal gatherings.',
      points: [
        'Convocations',
        'Annual Functions',
        'Academic Seminars',
        'Workshops',
        'Cultural Events',
      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      reverse: true,
    },
    {
      icon: 'fas fa-concierge-bell',
      title: 'Hospitality & Logistics',
      description: 'Guest accommodation, travel arrangements, VIP handling, catering coordination, transport, manpower management, and on-site logistics support.',
      points: [
        'Guest Management',
        'Transportation',
        'Accommodation',
        'Catering Services',
        'Manpower Support',
      ],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
      reverse: false,
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=600&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-charcoal-dark/70 to-charcoal-dark/80"></div>
        <div className="relative z-10 text-center text-ivory px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold">Our Services</h1>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {services.map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center ${
                  service.reverse ? 'lg:grid-flow-dense' : ''
                }`}>
                  <div className={`relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden group ${
                    service.reverse ? 'lg:col-start-2' : ''
                  }`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className={`${service.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="text-4xl sm:text-5xl text-gold mb-4 sm:mb-6">
                      <i className={service.icon}></i>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-4 sm:mb-6">{service.title}</h2>
                    <p className="text-base sm:text-lg leading-relaxed text-charcoal mb-4 sm:mb-6">{service.description}</p>
                    {service.points && (
                      <ul className="space-y-2 sm:space-y-3">
                        {service.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <i className="fas fa-star text-gold text-sm mt-1.5 flex-shrink-0"></i>
                            <span className="text-base sm:text-lg text-charcoal">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.5}>
            <div className="text-center mt-8 sm:mt-12">
              <Link href="/contact" className="btn btn-primary text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4">
                Get In Touch
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
