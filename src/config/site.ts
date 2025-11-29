const fallbackUrl = 'https://www.sekersoft.com'

const normalizeUrl = (url?: string) => {
  if (!url) return fallbackUrl
  return url.endsWith('/') ? url.slice(0, -1) : url
}

const siteUrl = normalizeUrl(import.meta.env.VITE_SITE_URL)

export const siteConfig = {
  name: 'Sekersoft',
  shortName: 'Sekersoft',
  tagline: 'Özel Yazılım Geliştirme',
  description: 'Sekersoft, işletmenizin ihtiyaçlarına özel yazılım çözümleri geliştiren bir teknoloji şirketidir. Masaüstü, web ve mobil uygulamalardan veritabanı sistemlerine kadar geniş bir yelpazede hizmet sunuyoruz. İlk ürünümüz Sekersoft Lojistik ile taşımacılık sektörüne offline, güvenli ve kullanıcı dostu çözümler getiriyoruz.',
  url: siteUrl,
  contact: {
    email: 'info@sekersoft.com',
    phone: '+90 212 909 32 10',
    phoneHref: '+902129093210',
    whatsapp: '+90 544 218 00 00',
    whatsappLink: 'https://wa.me/905442180000',
    address: {
      line1: 'Büyükdere Caddesi No: 201',
      district: 'Şişli',
      city: 'İstanbul',
      country: 'Türkiye',
      postalCode: '34394',
    },
    officeHours: 'Pazartesi - Cuma · 09:00 - 18:00',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/sekersoft',
    instagram: 'https://www.instagram.com/sekersoft',
    facebook: 'https://www.facebook.com/sekersoft',
    twitter: 'https://x.com/sekersoft',
  },
  metadata: {
    defaultTitle: 'Sekersoft · Özel Yazılım Geliştirme Şirketi',
    defaultDescription: 'Sekersoft, işletmenizin ihtiyaçlarına özel yazılım çözümleri geliştiren bir teknoloji şirketidir. Masaüstü, web ve mobil uygulamalardan veritabanı sistemlerine kadar geniş bir yelpazede hizmet sunuyoruz. İlk ürünümüz Sekersoft Lojistik ile taşımacılık sektörüne offline, güvenli ve kullanıcı dostu çözümler getiriyoruz.',
    keywords: [
      'Sekersoft',
      'özel yazılım',
      'yazılım geliştirme',
      'masaüstü uygulama',
      'web uygulaması',
      'mobil uygulama',
      'lojistik yazılımı',
      'nakliye yönetimi',
      'maliyet hesaplama',
      'offline lojistik',
      'taşımacılık yazılımı',
    ],
    ogImage: '/screenshots/01-dashboard.png',
  },
  forms: {
    contact: import.meta.env.VITE_CONTACT_FORM_ENDPOINT ?? '',
    demo: import.meta.env.VITE_DEMO_FORM_ENDPOINT ?? '',
    newsletter: import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT ?? '',
  },
}

export type SiteConfig = typeof siteConfig

