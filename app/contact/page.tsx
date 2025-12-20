'use client'

import { useState, FormEvent } from 'react'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Page Header */}
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=600&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-charcoal-dark/70 to-charcoal-dark/80"></div>
        <div className="relative z-10 text-center text-ivory px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            {/* Contact Info */}
            <ScrollAnimation>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-3 sm:mb-4">Get In Touch</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
                  Let's plan your next event with confidence and clarity.
                </p>

                <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ivory-light rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-gold text-lg sm:text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading mb-1 sm:mb-2">Office</h3>
                      <p className="text-sm sm:text-base text-gray-600">Doodh Katora Colony, Arrah, Bihar 802301</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ivory-light rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-gold text-lg sm:text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading mb-1 sm:mb-2">Phone</h3>
                      <p className="text-sm sm:text-base text-gray-600">+91 7320877403</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ivory-light rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-gold text-lg sm:text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading mb-1 sm:mb-2">Email</h3>
                      <p className="text-sm sm:text-base text-gray-600 break-all">jashneventsinfo@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ivory-light rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-globe text-gold text-lg sm:text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading mb-1 sm:mb-2">Website</h3>
                      <p className="text-sm sm:text-base text-gray-600">jashnevents.net</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-heading mb-3 sm:mb-4">Follow Us</h3>
                  <div className="flex gap-3 sm:gap-4">
                    <a href="https://www.facebook.com/people/Jashn-Events/61585186093901/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 sm:w-12 sm:h-12 bg-ivory-light hover:bg-gold rounded-full flex items-center justify-center text-gold hover:text-charcoal-dark transition-all duration-300 hover:-translate-y-1">
                      <i className="fab fa-facebook-f text-sm sm:text-base"></i>
                    </a>
                    <a href="https://www.instagram.com/jashn_events_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 sm:w-12 sm:h-12 bg-ivory-light hover:bg-gold rounded-full flex items-center justify-center text-gold hover:text-charcoal-dark transition-all duration-300 hover:-translate-y-1">
                      <i className="fab fa-instagram text-sm sm:text-base"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/jashn-events" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 sm:w-12 sm:h-12 bg-ivory-light hover:bg-gold rounded-full flex items-center justify-center text-gold hover:text-charcoal-dark transition-all duration-300 hover:-translate-y-1">
                      <i className="fab fa-linkedin-in text-sm sm:text-base"></i>
                    </a>
                    <a href="https://x.com/Jashn_Events_" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="w-10 h-10 sm:w-12 sm:h-12 bg-ivory-light hover:bg-gold rounded-full flex items-center justify-center text-gold hover:text-charcoal-dark transition-all duration-300 hover:-translate-y-1">
                      <i className="fab fa-x-twitter text-sm sm:text-base"></i>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-ivory-light p-6 sm:p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  >
                    <option value="">Select Event Type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="government">Government Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="institutional">Institutional Event</option>
                    <option value="hospitality">Hospitality & Logistics</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </ScrollAnimation>
          </div>

          {/* Map Section */}
          <ScrollAnimation delay={0.3}>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-6 sm:mb-8 text-center relative inline-block w-full">
                Our Location
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold"></span>
              </h2>
              <div className="border border-gray-200 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.438!2d84.6812538!3d25.5627655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5f57ac2a3b25%3A0xf07ab00f6d418d3a!2sDoodh%20Katora%20Colony%2C%20Arrah%2C%20Bihar%20802301!5e0!3m2!1sen!2sin!4v1736496000000!5m2!1sen!2sin&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JASHN Events & Hospitality Location"
                  className="w-full h-[300px] sm:h-[400px]"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
