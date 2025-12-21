import Link from 'next/link'

export default function Footer() {
  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/people/Jashn-Events/61585186093901/', label: 'Facebook' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/jashn_events_/', label: 'Instagram' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/company/jashn-events', label: 'LinkedIn' },
    { icon: 'fab fa-x-twitter', href: 'https://x.com/Jashn_Events_', label: 'Twitter/X' },
  ]

  return (
    <footer className="bg-charcoal-dark text-ivory py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2">JASHN</h3>
            <p className="text-gold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Events & Hospitality</p>
            <p className="text-ivory-light text-xs sm:text-sm leading-relaxed">
              Crafting thoughtful and timeless events across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-heading mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory-light hover:text-gold transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg sm:text-xl font-heading mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-ivory-light text-xs sm:text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-gold mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0"></i>
                <span>Ramgarhia, Arrah, Bihar 802301</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-gold mr-2 sm:mr-3 flex-shrink-0"></i>
                <span>+91 7544827491</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-gold mr-2 sm:mr-3 flex-shrink-0"></i>
                <span className="break-all">jashneventsinfo@gmail.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-globe text-gold mr-2 sm:mr-3 flex-shrink-0"></i>
                <span>jashnevents.net</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg sm:text-xl font-heading mb-4 sm:mb-6">Follow Us</h4>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gold/10 hover:bg-gold rounded-full flex items-center justify-center text-gold hover:text-charcoal-dark transition-all duration-300 hover:-translate-y-1"
                >
                  <i className={`${social.icon} text-sm sm:text-base`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="text-ivory-light text-xs sm:text-sm">
            &copy; 2024 JASHN Events & Hospitality Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
