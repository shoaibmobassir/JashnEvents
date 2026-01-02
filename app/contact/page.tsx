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
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    try {
      // Google Apps Script endpoint for saving to Google Sheets
      // This works with static sites (GitHub Pages) and server-side deployments
      const endpoint = 'https://script.google.com/macros/s/AKfycbzfQ1OS6grEAKPx3Q-Nbnf3bvYIOQEH43rmzzcYJKZWDae-IwjpUEQw43udQlnNcCIJ/exec'
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Check if response is HTML (404 or error page)
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        // If we got HTML, it means the API route doesn't exist (static export)
        if (text.trim().startsWith('<!') || text.trim().startsWith('<html')) {
          throw new Error('API endpoint not available. Please configure Google Apps Script for static site deployment.')
        }
        throw new Error('Invalid response from server')
      }

      const data = await response.json()

      // Check if response is successful
      if (!response.ok || (data.success === false)) {
        throw new Error(data.error || 'Failed to submit form')
      }

      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' })
      }, 5000)
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Sorry, there was an error. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
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
                      <p className="text-sm sm:text-base text-gray-600">Ramgarhia, Arrah, Bihar 802301</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ivory-light rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-gold text-lg sm:text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading mb-1 sm:mb-2">Phone</h3>
                      <p className="text-sm sm:text-base text-gray-600">+91 7544827491</p>
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

                {submitStatus.type && (
                  <div
                    className={`mb-4 p-4 rounded ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.438!2d84.6812538!3d25.5627655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5f57ac2a3b25%3A0xf07ab00f6d418d3a!2sRamgarhia%2C%20Arrah%2C%20Bihar%20802301!5e0!3m2!1sen!2sin!4v1736496000000!5m2!1sen!2sin&output=embed"
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
