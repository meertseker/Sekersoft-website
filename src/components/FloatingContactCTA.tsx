import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '../config/site'
import { trackEvent } from '../lib/analytics'

type Props = {
  source?: string
}

const FloatingContactCTA = ({ source = 'floating' }: Props) => {
  return (
    <div className="fixed bottom-6 right-6 z-[55] flex flex-col gap-3">
      <a
        href={siteConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-2xl shadow-blue-500/30 flex items-center justify-center hover:scale-105 transition-all"
        aria-label="WhatsApp ile iletişim"
        onClick={() => trackEvent('whatsapp_click', { source })}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${siteConfig.contact.phoneHref}`}
        className="w-12 h-12 rounded-2xl glass glass-hover shadow-xl flex items-center justify-center"
        aria-label="Telefon ile ara"
        onClick={() => trackEvent('phone_click', { source })}
      >
        <Phone className="w-6 h-6 text-blue-400" />
      </a>
    </div>
  )
}

export default FloatingContactCTA

