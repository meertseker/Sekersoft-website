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
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  Calculator,
  BarChart3
} from 'lucide-react'
import { screenshotPaths } from '../data/screenshots'
import { heroCardImages } from '../data/heroImages'
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
        bg: 'linear-gradient(135deg, rgba(0,122,255,0.22), rgba(90,200,250,0.18))',
        shadow: '0 15px 40px rgba(0,122,255,0.18)'
      }
    },
    {
      icon: Monitor,
      title: 'Masaüstü Uygulamaları',
      description: 'Windows ve macOS için profesyonel, offline çalışan masaüstü uygulamaları.',
      accent: {
        bg: 'linear-gradient(135deg, rgba(90,200,250,0.22), rgba(50,173,230,0.25))',
        shadow: '0 15px 40px rgba(90,200,250,0.2)'
      }
    },
    {
      icon: Globe,
      title: 'Web Uygulamaları',
      description: 'Modern, responsive ve yüksek performanslı web uygulamaları ve platformlar.',
      accent: {
        bg: 'linear-gradient(135deg, rgba(0,122,255,0.25), rgba(50,173,230,0.2))',
        shadow: '0 15px 40px rgba(0,122,255,0.2)'
      }
    },
    {
      icon: Smartphone,
      title: 'Mobil Uygulamalar',
      description: 'iOS ve Android için native ve cross-platform mobil uygulama geliştirme.',
      accent: {
        bg: 'linear-gradient(135deg, rgba(90,200,250,0.25), rgba(0,122,255,0.18))',
        shadow: '0 15px 40px rgba(90,200,250,0.18)'
      }
    },
    {
      icon: Database,
      title: 'Veritabanı Çözümleri',
      description: 'Güvenli, ölçeklenebilir ve optimize edilmiş veritabanı sistemleri.',
      accent: {
        bg: 'linear-gradient(135deg, rgba(50,173,230,0.25), rgba(0,122,255,0.18))',
        shadow: '0 15px 40px rgba(50,173,230,0.2)'
      }
    },
    {
      icon: Cloud,
      title: 'Bulut Entegrasyonları',
      description: 'AWS, Azure ve diğer bulut servisleri ile entegre çözümler.',
      accent: {
        bg: 'linear-gradient(135deg, rgba(0,122,255,0.25), rgba(90,200,250,0.18))',
        shadow: '0 15px 40px rgba(0,122,255,0.18)'
      }
    },
  ]

  // Sekersoft Şirket İstatistikleri
  const companyStats = [
    { icon: Code, value: '100+', label: 'Tamamlanan Proje', accent: 'rgba(0,122,255,0.12)', border: 'rgba(0,122,255,0.35)' },
    { icon: Users, value: '50+', label: 'Mutlu Müşteri', accent: 'rgba(90,200,250,0.12)', border: 'rgba(90,200,250,0.35)' },
    { icon: Zap, value: '7/24', label: 'Destek', accent: 'rgba(255,176,32,0.12)', border: 'rgba(255,176,32,0.35)' },
    { icon: Shield, value: '%100', label: 'Güvenli', accent: 'rgba(50,173,230,0.12)', border: 'rgba(50,173,230,0.35)' },
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

  const greetingGradient = 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)'

  return (
    <div className="min-h-screen pb-8 sm:pb-12">
      {/* Sekersoft Hero Section - Bento Grid Style */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(0,122,255,0.15), rgba(3,5,12,0))'
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[26rem] h-[26rem] rounded-full blur-3xl animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(90,200,250,0.12), rgba(3,5,12,0))',
              animationDelay: '2s'
            }}
          />
          <div
            className="absolute top-10 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(50,173,230,0.1), rgba(3,5,12,0))',
              animationDelay: '3.5s'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Hero Bento Grid - mobilde 4 kart 2x2, masaüstünde mevcut düzen */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-6">
            {/* Main Hero Card - Large - mobilde tam genişlik */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-2 lg:col-span-8 md:row-span-2 glass-liquid bento-card relative overflow-hidden group min-h-[280px] sm:min-h-[320px] md:min-h-[380px] flex flex-col justify-center"
            >
              {/* Decorative gradient overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(0,122,255,0.08), transparent 50%)'
                }}
              />
              
              <div className="relative z-10 p-6 md:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
                    İşletmeniz için<br />
                    <span className="gradient-text">özel yazılım çözümleri</span>
                  </h1>

                  <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-2xl" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}>
                    Masaüstü, web ve mobil uygulamalar. İşletmenize özel, modern teknolojilerle geliştirilmiş profesyonel çözümler.
                  </p>

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105"
                    style={{ backgroundImage: greetingGradient }}
                  >
                    Proje Başlat
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Desktop Apps Card - mobilde 2x2 grid hücresi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:col-span-4 glass-liquid bento-card relative overflow-hidden group min-h-[100px] sm:min-h-[120px] md:min-h-[140px]"
            >
              {/* Background Image - ön planda */}
              <div className="absolute inset-0 opacity-50 group-hover:opacity-65 transition-opacity duration-500">
                <img
                  src={heroCardImages.desktop}
                  alt="Masaüstü uygulaması"
                  className="w-full h-full object-cover object-[90%_center]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(90,200,250,0.12), rgba(50,173,230,0.15))'
                }}
              />
              <div className="relative z-10 p-3 sm:p-5 md:p-6 h-full flex flex-col">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-1.5 sm:mb-3 group-hover:scale-110 transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,122,255,0.25), rgba(90,200,250,0.25))',
                    boxShadow: '0 10px 30px rgba(0,122,255,0.2)'
                  }}
                >
                  <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1.5">Masaüstü</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 leading-tight line-clamp-2">
                  Windows ve macOS için güçlü uygulamalar
                </p>
              </div>
            </motion.div>

            {/* Web Apps Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-4 glass-liquid bento-card relative overflow-hidden group min-h-[100px] sm:min-h-[120px] md:min-h-[140px]"
            >
              {/* Background Image - ön planda */}
              <div className="absolute inset-0 opacity-50 group-hover:opacity-65 transition-opacity duration-500">
                <img
                  src={heroCardImages.web}
                  alt="Web uygulaması"
                  className="w-full h-full object-cover object-[90%_center]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,176,32,0.12), rgba(255,90,120,0.12))'
                }}
              />
              <div className="relative z-10 p-3 sm:p-5 md:p-6 h-full flex flex-col">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-1.5 sm:mb-3 group-hover:scale-110 transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,176,32,0.3), rgba(255,90,120,0.25))',
                    boxShadow: '0 10px 30px rgba(255,176,32,0.2)'
                  }}
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1.5">Web</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 leading-tight line-clamp-2">
                  Modern ve responsive web platformları
                </p>
              </div>
            </motion.div>

            {/* Mobile Apps Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="lg:col-span-4 glass-liquid bento-card relative overflow-hidden group min-h-[100px] sm:min-h-[120px] md:min-h-[140px]"
            >
              {/* Background Image - ön planda */}
              <div className="absolute inset-0 opacity-50 group-hover:opacity-65 transition-opacity duration-500">
                <img
                  src={heroCardImages.mobile}
                  alt="Mobil uygulama"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(123,97,255,0.12), rgba(0,122,255,0.12))'
                }}
              />
              <div className="relative z-10 p-3 sm:p-5 md:p-6 h-full flex flex-col justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-1.5 sm:mb-3 group-hover:scale-110 transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,122,255,0.25), rgba(90,200,250,0.25))',
                    boxShadow: '0 10px 30px rgba(0,122,255,0.2)'
                  }}
                >
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1.5">Mobil</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 leading-tight line-clamp-2">
                  iOS ve Android uygulamaları
                </p>
              </div>
            </motion.div>

            {/* Database & Cloud Combined Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="lg:col-span-4 glass-liquid bento-card relative overflow-hidden group min-h-[100px] sm:min-h-[120px] md:min-h-[140px]"
            >
              {/* Background Image - ön planda */}
              <div className="absolute inset-0 opacity-50 group-hover:opacity-65 transition-opacity duration-500">
                <img
                  src={heroCardImages.infrastructure}
                  alt="Veritabanı ve bulut altyapısı"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(50,173,230,0.12), rgba(0,122,255,0.12))'
                }}
              />
              <div className="relative z-10 p-3 sm:p-5 md:p-6 h-full flex flex-col justify-center">
                <div className="flex gap-1.5 sm:gap-2 mb-1.5 sm:mb-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{
                      background: 'linear-gradient(135deg, rgba(90,200,250,0.3), rgba(0,122,255,0.2))',
                      boxShadow: '0 8px 25px rgba(90,200,250,0.2)'
                    }}
                  >
                    <Database className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,90,120,0.25), rgba(123,97,255,0.2))',
                      boxShadow: '0 8px 25px rgba(255,90,120,0.2)'
                    }}
                  >
                    <Cloud className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1.5">Altyapı</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 leading-tight line-clamp-2">
                  Veritabanı ve bulut çözümleri
                </p>
              </div>
            </motion.div>

            {/* Company Stats - 2x2 Grid Container - mobilde tam genişlik */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="col-span-2 lg:col-span-4 glass-liquid bento-card p-4 sm:p-5 md:p-6 min-h-[100px] sm:min-h-[120px] md:min-h-[140px] flex items-center"
            >
              <div className="grid grid-cols-2 gap-3 w-full">
                {companyStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + index * 0.05, duration: 0.4 }}
                    className="text-center"
                  >
                    <div className="w-7 h-7 mx-auto mb-1.5 rounded-lg flex items-center justify-center"
                      style={{ background: stat.accent }}
                    >
                      <stat.icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-0.5 gradient-text">{stat.value}</h3>
                    <p className="text-gray-300 text-[10px] md:text-xs font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section - Featured Products & Stats */}
      <section className="pt-0 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bento-grid">
            {/* Sekersoft Lojistik - Large Featured Card */}
            <motion.div
              id="sekersoft-lojistik"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bento-large bento-card glass-liquid-strong glass-reflective relative overflow-hidden group"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={screenshotPaths.dashboard}
                  alt="Sekersoft lojistik yönetim paneli"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-liquid mb-4">
                  <Truck className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold tracking-wide uppercase text-gray-300">
                    İlk Ürünümüz
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                  Sekersoft <span className="gradient-text">Lojistik</span>
                </h2>

                <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
                  Taşımacılık operasyonlarınızı kontrol panelinden yönetin. Offline masaüstü uygulamasıyla sipariş, güzergâh ve maliyetleri aynı yerde gör.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <Link
                    to="/products/logistics"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shadow-xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105"
                    style={{ backgroundImage: greetingGradient }}
                  >
                    Ürünü İncele
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/products/logistics#demo"
                    className="px-6 py-3 rounded-xl glass-liquid font-semibold transition-all hover:scale-105"
                  >
                    14 Günlük Demo
                  </Link>
                </div>

                <div className="inline-flex items-center gap-4 glass-liquid rounded-xl px-5 py-3">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Kurulum</p>
                    <p className="text-xl font-bold text-white">32.000 TL + KDV</p>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div>
                    <p className="text-xs text-gray-400">Yıllık Bakım</p>
                    <p className="text-sm font-semibold text-gray-300">8.000 TL</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lojistik Features - 2x2 Grid Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bento-small glass-liquid bento-card p-6 md:p-8 flex items-center"
            >
              <div className="grid grid-cols-2 gap-4 w-full">
                {/* Masraf Hesaplama */}
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(0,122,255,0.25), rgba(90,200,250,0.25))',
                      boxShadow: '0 8px 20px rgba(0,122,255,0.15)'
                    }}
                  >
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-1 text-white">Masraf Hesaplama</h3>
                  <p className="text-[10px] md:text-xs text-gray-400">Otomatik maliyet analizi</p>
                </div>

                {/* Müşteri Takibi */}
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(123,97,255,0.25), rgba(0,122,255,0.25))',
                      boxShadow: '0 8px 20px rgba(123,97,255,0.15)'
                    }}
                  >
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-1 text-white">Müşteri Takibi</h3>
                  <p className="text-[10px] md:text-xs text-gray-400">Detaylı müşteri profilleri</p>
                </div>

                {/* Raporlama */}
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(255,176,32,0.25), rgba(255,90,120,0.25))',
                      boxShadow: '0 8px 20px rgba(255,176,32,0.15)'
                    }}
                  >
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-1 text-white">Raporlama</h3>
                  <p className="text-[10px] md:text-xs text-gray-400">Detaylı analiz raporları</p>
                </div>

                {/* Otomatik Email */}
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(0,122,255,0.25), rgba(90,200,250,0.25))',
                      boxShadow: '0 8px 20px rgba(0,122,255,0.15)'
                    }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-1 text-white">Otomatik Email</h3>
                  <p className="text-[10px] md:text-xs text-gray-400">Bildirim ve hatırlatma</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Yazılım Hizmetleri - Bento Grid */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Yazılım <span className="gradient-text">Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              İşletmenizin dijital dönüşümü için ihtiyacınız olan tüm yazılım çözümlerini sunuyoruz.
            </p>
          </motion.div>

          <div className="bento-grid">
            {softwareServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bento-medium bento-card glass-liquid glass-reflective group relative"
              >
                {/* Color overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: service.accent.bg }}
                />
                
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{
                      background: service.accent.bg,
                      boxShadow: service.accent.shadow
                    }}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Bento Card */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bento-card glass-liquid-strong glass-reflective"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Neden <span className="gradient-text">Sekersoft?</span>
                </h2>
                <p className="text-lg text-gray-400 mb-6">
                  Müşteri ihtiyaçlarınızı anlıyor, işletmenizin büyümesine katkı sağlayacak özel çözümler geliştiriyoruz.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {softwareBenefits.slice(0, 6).map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 3D Cards - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:block relative h-[400px] flex items-center justify-center" style={{ perspective: '1000px' }}>
                {/* 3D Floating Cards Stack */}
                <div className="relative w-full max-w-md">
                  {/* Back Card */}
                  <motion.div
                    initial={{ opacity: 0, rotateY: -15, z: -100 }}
                    whileInView={{ opacity: 1, rotateY: -8, z: -100 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="absolute top-8 -left-4 w-64 h-48 glass-liquid rounded-2xl p-6"
                    style={{
                      transform: 'rotateY(-8deg) translateZ(-100px)',
                      boxShadow: '0 20px 60px rgba(0,122,255,0.3)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, rgba(0,122,255,0.3), rgba(90,200,250,0.3))' }}
                      >
                        <Monitor className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-20 h-3 bg-white/20 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-white/15 rounded-full" />
                      <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                    </div>
                  </motion.div>

                  {/* Middle Card */}
                  <motion.div
                    initial={{ opacity: 0, rotateY: 15, z: -50 }}
                    whileInView={{ opacity: 1, rotateY: 4, z: -50 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="absolute top-16 -right-8 w-64 h-48 glass-liquid rounded-2xl p-6"
                    style={{
                      transform: 'rotateY(4deg) translateZ(-50px)',
                      boxShadow: '0 20px 60px rgba(123,97,255,0.3)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, rgba(123,97,255,0.3), rgba(255,90,120,0.3))' }}
                      >
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-20 h-3 bg-white/20 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-white/15 rounded-full" />
                      <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                    </div>
                  </motion.div>

                  {/* Front Card - Main Focus */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, z: 0 }}
                    whileInView={{ opacity: 1, scale: 1, z: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    whileHover={{ scale: 1.05, rotateY: 2 }}
                    className="relative z-10 w-80 h-56 glass-liquid-strong rounded-2xl p-6 mx-auto"
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 30px 80px rgba(0,122,255,0.4)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0,122,255,0.4), rgba(90,200,250,0.4))',
                          boxShadow: '0 10px 30px rgba(0,122,255,0.3)'
                        }}
                      >
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Özel Çözümler</h3>
                        <p className="text-xs text-gray-400">Tamamen Size Özel</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <div className="flex-1 h-2 bg-white/20 rounded-full" />
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <div className="flex-1 h-2 bg-white/15 rounded-full" />
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <div className="flex-1 h-2 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </motion.div>
                </div>
              </div>

              {/* Simplified mobile version - Single card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:hidden glass-liquid-strong rounded-2xl p-6 mt-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(250,255,255,0.12))',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                  >
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Özel Çözümler</h3>
                    <p className="text-xs text-gray-400">Tamamen Size Özel</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <div className="flex-1 h-2 bg-white/20 rounded-full" />
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <div className="flex-1 h-2 bg-white/15 rounded-full" />
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <div className="flex-1 h-2 bg-white/10 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Bento Grid */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {submitted && status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bento-card glass-liquid-strong text-center max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Mesajınız Gönderildi!</h2>
              <p className="text-gray-400 mb-8">
                Mesajınız başarıyla alındı. Ekibimiz çalışma saatleri içinde genellikle birkaç saat içerisinde geri dönüş yapar.
              </p>
              <button onClick={() => setSubmitted(false)} className="px-6 py-3 rounded-xl glass-liquid font-semibold transition-all hover:scale-105">
                Yeni Mesaj Gönder
              </button>
            </motion.div>
          ) : (
            <div className="bento-grid">
              {/* Contact Form - 8 columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bento-large bento-card glass-liquid-strong"
              >
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Bizimle <span className="gradient-text">İletişime Geçin</span>
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base">
                    Sorularınız mı var? Formu doldurun, size en kısa sürede dönüş yapalım.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ad Soyad *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl glass-liquid border border-white/10 focus:border-blue-500 focus:outline-none transition-all text-sm"
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
                        className="w-full px-4 py-2.5 rounded-xl glass-liquid border border-white/10 focus:border-blue-500 focus:outline-none transition-all text-sm"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl glass-liquid border border-white/10 focus:border-blue-500 focus:outline-none transition-all text-sm"
                        placeholder="0538 307 86 35"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Konu *</label>
                      <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl glass-liquid border border-white/10 focus:border-blue-500 focus:outline-none transition-all text-sm">
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
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl glass-liquid border border-white/10 focus:border-blue-500 focus:outline-none transition-all resize-none text-sm"
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
                    <label htmlFor="kvkk-home" className="text-xs text-gray-400">
                      Kişisel verilerimin Sekersoft tarafından KVKK kapsamında işlenmesine yönelik aydınlatma metnini okudum ve onaylıyorum.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    {status === 'loading' ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/30 rounded-xl p-3">{errorMessage || 'Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.'}</p>
                  )}
                </form>
              </motion.div>

              {/* Quick Info - 4 columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bento-small bento-card glass-liquid glass-reflective"
              >
                <h3 className="text-xl font-bold mb-6">İletişim Bilgileri</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl glass-liquid flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">E-posta</p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-medium hover:text-blue-400 transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl glass-liquid flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Telefon</p>
                      <a href={`tel:${siteConfig.contact.phoneHref}`} className="text-sm font-medium hover:text-blue-400 transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl glass-liquid flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Adres</p>
                      <p className="text-sm font-medium leading-relaxed">
                        {siteConfig.contact.address.line1}<br />
                        {siteConfig.contact.address.district}<br />
                        {siteConfig.contact.address.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl glass-liquid flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Çalışma Saatleri</p>
                      <p className="text-sm font-medium">
                        {siteConfig.contact.officeHours}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}

export default Home

