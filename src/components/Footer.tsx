import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Send
} from 'lucide-react'
import { siteConfig } from '../config/site'
import { submitLeadForm } from '../lib/forms'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [newsletterMessage, setNewsletterMessage] = useState('')

  const footerLinks = {
    product: [
      { name: 'Sekersoft Lojistik', path: '/products/logistics' },
      { name: 'Özellikler', path: '/products/logistics#features' },
      { name: 'Fiyatlandırma', path: '/products/logistics#pricing' },
      { name: 'Demo', path: '/products/logistics#demo' },
    ],
    company: [
      { name: 'Hakkımızda', path: '/about' },
      { name: 'Referanslar', path: '/testimonials' },
      { name: 'Blog', path: '/blog' },
      { name: 'İletişim', path: '/contact' },
    ],
    resources: [
      { name: 'Kaynaklar', path: '/products/logistics#resources' },
      { name: 'Destek', path: '/support' },
      { name: 'Dokümantasyon', path: '/support' },
      { name: 'API', path: '/products/logistics#resources' },
    ],
    legal: [
      { name: 'Gizlilik Politikası', path: '/privacy' },
      { name: 'Kullanım Koşulları', path: '/terms' },
      { name: 'KVKK', path: '/kvkk' },
      { name: 'Çerez Politikası', path: '/cookie-policy' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  ]

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!newsletterEmail) {
      setNewsletterMessage('Lütfen e-posta adresinizi girin.')
      setNewsletterStatus('error')
      return
    }

    setNewsletterStatus('loading')
    setNewsletterMessage('')

    try {
      if (siteConfig.forms.newsletter) {
        await submitLeadForm({
          endpoint: siteConfig.forms.newsletter,
          payload: {
            email: newsletterEmail,
            formName: 'newsletter',
          },
        })
      }

      setNewsletterStatus('success')
      setNewsletterMessage('Teşekkürler! Haber bültenine kaydoldunuz.')
      setNewsletterEmail('')
    } catch (error) {
      setNewsletterStatus('error')
      setNewsletterMessage(error instanceof Error ? error.message : 'Kayıt sırasında bir sorun oluştu.')
    }
  }

  return (
    <footer className="relative mt-20 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-blue-900/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group" aria-label={`${siteConfig.name} ana sayfa`}>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt={`${siteConfig.name} logosu`}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold gradient-text">{siteConfig.shortName}</span>
                <span className="text-xs text-gray-400 uppercase tracking-[0.2em]">{siteConfig.tagline}</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              İşletmelerin operasyonunu sade, güvenli ve ölçülebilir yazılımlarla dijitalleştiriyoruz.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {siteConfig.contact.email}
              </a>
              <a href={`tel:${siteConfig.contact.phoneHref}`} className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {siteConfig.contact.phone}
              </a>
              <div className="flex items-start text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.district} <br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
                </span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ürün</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Şirket</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kaynaklar</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Yasal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter — gradient frame + inline action (21st-style) */}
        <div className="relative mb-12 rounded-2xl overflow-hidden gradient-border">
          <div className="relative rounded-2xl bg-[rgba(2,8,19,0.92)] backdrop-blur-xl border border-white/5 px-6 py-10 sm:px-10 sm:py-12 overflow-hidden">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[rgba(0,122,255,0.15)] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[rgba(90,200,250,0.1)] blur-3xl"
              aria-hidden
            />
            <div className="max-w-2xl mx-auto text-center relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 gradient-text tracking-tight">
                Yazılım ve ürün güncellemelerini alın
              </h3>
              <p className="text-gray-400 mb-8 text-sm sm:text-base leading-relaxed">
                Yeni özellikler, ürün gelişmeleri ve işletmeniz için pratik dijitalleşme içeriklerini e-posta ile alın.
              </p>
              <form className="relative max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  value={newsletterEmail}
                  onChange={(event) => setNewsletterEmail(event.target.value)}
                  className="w-full pl-4 pr-[8.25rem] sm:pr-[9rem] py-3.5 rounded-xl glass border border-white/15 focus:border-blue-500/80 focus:outline-none focus:ring-2 focus:ring-blue-500/25 transition-all text-sm placeholder:text-gray-500"
                  required
                  aria-label="Haber bülteni e-posta adresi"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-blue-500/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {newsletterStatus === 'loading' ? (
                    '…'
                  ) : (
                    <>
                      <Send className="w-4 h-4 shrink-0" aria-hidden />
                      <span>Abone Ol</span>
                    </>
                  )}
                </button>
              </form>
              {newsletterMessage && (
                <p
                  className={`mt-4 text-sm ${
                    newsletterStatus === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {newsletterMessage}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {siteConfig.name}. Tüm hakları saklıdır.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

