const fallbackUrl = 'https://www.sekersoft.com'

const normalizeUrl = (url?: string) => {
  if (!url) return fallbackUrl
  return url.endsWith('/') ? url.slice(0, -1) : url
}

const siteUrl = normalizeUrl(import.meta.env.VITE_SITE_URL)

export const siteConfig = {
  name: 'Şekersoft',
  shortName: 'Şekersoft',
  tagline: 'Özel Yazılım Çözümleri',
  description: 'Sekersoft, işletmenizin ihtiyaçlarına özel yazılım çözümleri geliştiren bir teknoloji şirketidir. Masaüstü, web ve mobil uygulamalardan veritabanı sistemlerine kadar geniş bir yelpazede hizmet sunuyoruz. İlk ürünümüz Sekersoft Lojistik ile taşımacılık sektörüne offline, güvenli ve kullanıcı dostu çözümler getiriyoruz.',
  url: siteUrl,
  contact: {
    email: 'info@sekersoft.com',
    phone: '0538 307 86 35',
    phoneHref: '+905383078635',
    whatsapp: '0538 307 86 35',
    whatsappLink: 'https://wa.me/905383078635',
    address: {
      line1: 'Yavuz Sultan Selim Bulvarı, Perlavista Residance A Blok Kat: 6',
      district: 'Adnan Kahveci Mahallesi, Beykent',
      city: 'İstanbul',
      country: 'Türkiye',
      postalCode: '34528',
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
    defaultTitle: 'Sekersoft · Özel Yazılım Çözümleri',
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
    contact: import.meta.env.VITE_CONTACT_FORM_ENDPOINT ?? 'https://formspree.io/f/xanrjoqw',
    demo: import.meta.env.VITE_DEMO_FORM_ENDPOINT ?? 'https://formspree.io/f/xanrjoqw',
    newsletter: import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT ?? 'https://formspree.io/f/xanrjoqw',
  },
  analytics: {
    gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
  },
}

export type SiteConfig = typeof siteConfig

