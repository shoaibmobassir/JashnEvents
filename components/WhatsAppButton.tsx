'use client'

export default function WhatsAppButton() {
  const phoneNumber = '917320877403' // JASHN Events WhatsApp number
  const message = 'Hello JASHN, I would like to know more about your services'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl sm:text-2xl md:text-3xl shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 animate-pulse-slow touch-manipulation"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  )
}
