import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { 
  Truck, 
  Shield, 
  ArrowRight,
  CheckCircle2,
  Code,
  Database,
  Monitor,
  Zap,
  Cloud,
  Smartphone,
  Globe,
  Users,
  ChevronDown,
  Send
} from 'lucide-react'
import { screenshotPaths } from '../data/screenshots'
import { siteConfig } from '../config/site'
import { submitLeadForm } from '../lib/forms'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  kvkk: false,
}

const Home = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [botField, setBotField] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (botField) {
      return
    }

    setStatus('loading')
    setErrorMessage('')

    const payload = {
      ...formData,
      kvkk: formData.kvkk ? 'on' : 'off',
    }

    try {
      if (siteConfig.forms.contact) {
        await submitLeadForm({
          endpoint: siteConfig.forms.contact,
          payload: {
            ...payload,
            formName: 'contact',
          },
        })
      } else {
        console.info('Contact form submission (development only):', payload)
      }

      setFormData(initialFormState)
      setSubmitted(true)
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value

    setFormData((prev) => ({
      ...prev,
      [target.name]: value,
    }))
  }

  const subjectOptions = ['Demo Talebi', 'Fiyat Teklifi', 'Teknik Destek', 'Satış', 'Diğer']
  // Sekersoft Yazılım Hizmetleri
  const softwareServices = [
    {
      icon: Code,
      title: 'Özel Yazılım Çözümleri',
      description: 'İşletmenizin ihtiyaçlarına özel, tamamen size özel yazılım çözümleri geliştiriyoruz.',
      accent: {
        bg: 'linear-gradient(135deg, rgba(10,132,255,0.22), rgba(123,97,255,0.18))',
        shadow: '0 15px 40px rgba(10,132,255,0.18)'
      }
    },
    {
      icon: Monitor,
      title: 'Masaüstü Uygulamaları',
      description: 'Windows ve macOS için profesyonel, offline çalışan masaüstü uygulamaları.',
      accent: {
        bg: 'linear-gradient(135deg, rgba(100,210,255,0.22), rgba(44,217,197,0.25))',
        shadow: '0 15px 40px rgba(44,217,197,0.2)'
      }
    },
    {
      icon: Globe,
      title: 'Web Uygulamaları',
      description: 'Modern, responsive ve yüksek performanslı web uygulamaları ve platformlar.',
      accent: {
        bg: 'linear-gradient(135deg, rgba(255,176,32,0.25), rgba(255,90,120,0.2))',
        shadow: '0 15px 40px rgba(255,176,32,0.2)'
      }
    },
    {
      icon: Smartphone,
      title: 'Mobil Uygulamalar',
      description: 'iOS ve Android için native ve cross-platform mobil uygulama geliştirme.',
      accent: {
        bg: 'linear-gradient(135deg, rgba(123,97,255,0.25), rgba(10,132,255,0.18))',
        shadow: '0 15px 40px rgba(123,97,255,0.18)'
      }
    },
    {
      icon: Database,
      title: 'Veritabanı Çözümleri',
      description: 'Güvenli, ölçeklenebilir ve optimize edilmiş veritabanı sistemleri.',
      accent: {
        bg: 'linear-gradient(135deg, rgba(44,217,197,0.25), rgba(10,132,255,0.18))',
        shadow: '0 15px 40px rgba(44,217,197,0.2)'
      }
    },
    {
      icon: Cloud,
      title: 'Bulut Entegrasyonları',
      description: 'AWS, Azure ve diğer bulut servisleri ile entegre çözümler.',
      accent: {
        bg: 'linear-gradient(135deg, rgba(255,90,120,0.25), rgba(123,97,255,0.18))',
        shadow: '0 15px 40px rgba(255,90,120,0.18)'
      }
    },
  ]

  // Sekersoft Şirket İstatistikleri
  const companyStats = [
    { icon: Code, value: '100+', label: 'Tamamlanan Proje', accent: 'rgba(10,132,255,0.12)', border: 'rgba(10,132,255,0.35)' },
    { icon: Users, value: '50+', label: 'Mutlu Müşteri', accent: 'rgba(44,217,197,0.12)', border: 'rgba(44,217,197,0.35)' },
    { icon: Zap, value: '7/24', label: 'Destek', accent: 'rgba(255,176,32,0.12)', border: 'rgba(255,176,32,0.35)' },
    { icon: Shield, value: '%100', label: 'Güvenli', accent: 'rgba(123,97,255,0.12)', border: 'rgba(123,97,255,0.35)' },
  ]

  const softwareBenefits = [
    'İşletmenizin özel ihtiyaçlarını anlıyoruz - Her işletme farklıdır, çözümleriniz de özel olmalı',
    'Zamanınızı değerli görüyoruz - Hızlı teslimat ve verimli süreçlerle işinizi aksatmıyoruz',
    'Bütçenize uygun çözümler - Şeffaf fiyatlandırma, gizli maliyet yok',
    'Güvenliğiniz önceliğimiz - Verileriniz güvende, gizliliğiniz korunur',
    'Sürekli yanınızdayız - Kurulum sonrası destek ve bakım hizmetlerimiz devam eder',
    'Kullanım kolaylığı - Teknik bilgi gerektirmeden, herkesin kullanabileceği arayüzler',
    'Ölçeklenebilir çözümler - İşletmeniz büyüdükçe yazılımınız da büyür',
    'Yerli ve güvenilir - Türkiye\'de geliştirilmiş, yerel desteğe erişim kolaylığı',
  ]

  const greetingGradient = 'linear-gradient(135deg, #0A84FF 0%, #30D158 100%)'
  // Gelecekte kullanılabilir
  // const greetingGradientSoft = 'linear-gradient(135deg, rgba(10,132,255,0.25), rgba(48,209,88,0.25))'

  return (
    <div className="min-h-screen">
      {/* Sekersoft Hero Section - Yazılım Hizmetleri */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(10,132,255,0.4), rgba(3,5,12,0))'
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[26rem] h-[26rem] rounded-full blur-3xl animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(44,217,197,0.35), rgba(3,5,12,0))',
              animationDelay: '2s'
            }}
          />
          <div
            className="absolute top-10 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(123,97,255,0.28), rgba(3,5,12,0))',
              animationDelay: '3.5s'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-6 border border-white/10"
            >
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-300">
                Özel Yazılım Çözümleri
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              İşletmeniz İçin
              <br />
              <span className="gradient-text">Özel Yazılım Çözümleri</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Sekersoft, işletmenizin ihtiyaçlarına özel yazılım çözümleri geliştiren bir teknoloji şirketidir.
              Masaüstü, web ve mobil uygulamalardan veritabanı sistemlerine kadar geniş bir yelpazede hizmet sunuyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="group px-8 py-4 rounded-2xl text-white font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105 hover:opacity-95 flex items-center justify-center gap-2"
                style={{ backgroundImage: greetingGradient }}
              >
                Proje Başlat
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 rounded-2xl glass glass-hover font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 border border-white/10"
              >
                Hakkımızda
              </Link>
            </div>

            {/* Sekersoft Lojistik'e Kaydır Butonu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center"
            >
              <a
                href="#sekersoft-lojistik"
                className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('sekersoft-lojistik')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                <span className="text-sm font-medium">Sekersoft Lojistik'i Keşfet</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sekersoft İstatistikleri */}
      <section className="pt-4 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center glass-hover"
                style={{
                  background: `linear-gradient(160deg, ${stat.accent}, rgba(0,0,0,0))`,
                  borderColor: stat.border
                }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yazılım Hizmetleri Bölümü */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Yazılım <span className="gradient-text">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              İşletmenizin dijital dönüşümü için ihtiyacınız olan tüm yazılım çözümlerini sunuyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 glass-hover group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10"
                  style={{
                    background: service.accent.bg,
                    boxShadow: service.accent.shadow
                  }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekersoft Lojistik Uygulaması Bölümü */}
      <section id="sekersoft-lojistik" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-6 border border-white/10"
              >
                <Truck className="w-4 h-4 text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-300">
                  İlk Ürünümüz
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Sekersoft <span className="gradient-text">Lojistik</span>
              </h2>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Taşımacılık operasyonlarınızı kontrol panelinden yönetin. Tek seferlik lisanslı offline masaüstü uygulamasıyla 
                sipariş, güzergâh ve maliyetleri aynı yerde gör. İnternet şartı yok, veriler şirket içinde kalır.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/products/logistics"
                  className="group px-8 py-4 rounded-2xl text-white font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105 hover:opacity-95 flex items-center justify-center gap-2"
                  style={{ backgroundImage: greetingGradient }}
                >
                  Ürünü İncele
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products/logistics#demo"
                  className="px-8 py-4 rounded-2xl glass glass-hover font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 border border-white/10"
                >
                  14 Günlük Demo
                </Link>
              </div>

              <div className="inline-flex flex-col items-center gap-1 glass rounded-2xl px-6 py-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Tek seferlik kurulum</p>
                <p className="text-2xl font-semibold text-white">32.000 TL + KDV</p>
                <p className="text-xs text-gray-500">2. yıldan itibaren yıllık 8.000 TL bakım</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-3xl p-4 shadow-2xl shadow-blue-500/10">
                <div
                  className="aspect-video rounded-2xl overflow-hidden border border-white/5 bg-black/40"
                >
                  <img
                    src={screenshotPaths.dashboard}
                    alt="Sekersoft lojistik yönetim paneli"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Yazılım Hizmetleri Avantajları */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Neden <span className="gradient-text">Sekersoft?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Müşteri ihtiyaçlarınızı anlıyor, işletmenizin büyümesine katkı sağlayacak özel çözümler geliştiriyoruz. 
                Standart yazılımlar sizin için yeterli değilse, size özel çözümlerle yanınızdayız.
              </p>
              <div className="space-y-4">
                {softwareBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl glass glass-hover font-medium transition-all hover:scale-105"
              >
                Proje Başlat
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8">
                <div className="aspect-square rounded-2xl overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop"
                    alt="Özel Yazılım Çözümleri"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex items-center gap-3 mb-2">
                        <Code className="w-6 h-6 text-blue-400" />
                        <p className="text-xl font-semibold text-white">Özel Çözümler</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {submitted && status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-12 text-center max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Mesajınız Gönderildi!</h2>
              <p className="text-gray-400 mb-8">
                Mesajınız başarıyla alındı. Ekibimiz çalışma saatleri içinde genellikle birkaç saat içerisinde geri dönüş yapar.
              </p>
              <button onClick={() => setSubmitted(false)} className="px-6 py-3 rounded-xl glass glass-hover font-semibold transition-all hover:scale-105">
                Yeni Mesaj Gönder
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Bizimle <span className="gradient-text">İletişime Geçin</span>
                </h2>
                <p className="text-gray-400">
                  Sorularınız mı var? Size yardımcı olmak için buradayız. Formu doldurun, size en kısa sürede dönüş yapalım.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ad Soyad *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-posta *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="0538 307 86 35"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Konu *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500 focus:outline-none transition-all">
                      <option value="">Konu Seçin</option>
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="companyWebsite">Şirket Web Sitesi</label>
                  <input
                    id="companyWebsite"
                    type="text"
                    name="companyWebsite"
                    tabIndex={-1}
                    autoComplete="off"
                    value={botField}
                    onChange={(event) => setBotField(event.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mesajınız *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500 focus:outline-none transition-all resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="kvkk-home"
                    name="kvkk"
                    checked={formData.kvkk}
                    onChange={handleChange}
                    required
                    className="mt-1 rounded border-white/20 text-blue-500 focus:ring-blue-500"
                  />
                  <label htmlFor="kvkk-home" className="text-sm text-gray-400">
                    Kişisel verilerimin Sekersoft tarafından KVKK kapsamında işlenmesine yönelik aydınlatma metnini okudum ve onaylıyorum.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  <Send className="w-5 h-5" />
                  {status === 'loading' ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl p-3">{errorMessage || 'Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.'}</p>
                )}
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section - Yazılım Hizmetleri */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div
              className="absolute inset-0"
              style={{ backgroundImage: greetingGradient }}
            />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10" />
            
            <div className="relative px-8 py-16 md:py-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Özel Yazılım Projenizi Başlatın
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                İşletmenizin ihtiyaçlarına özel yazılım çözümleri için bugün bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                >
                  Proje Başlat
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-all hover:scale-105"
                >
                  Hakkımızda
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Home

