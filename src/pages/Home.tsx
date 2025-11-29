import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
  Users
} from 'lucide-react'
import { screenshotPaths } from '../data/screenshots'

const Home = () => {
  // Sekersoft Yazılım Hizmetleri
  const softwareServices = [
    {
      icon: Code,
      title: 'Özel Yazılım Geliştirme',
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
    'İşletmenize özel çözümler - Standart yazılımlar değil',
    'Modern teknolojiler - En güncel framework ve kütüphaneler',
    'Güvenli ve ölçeklenebilir mimari',
    'Sürekli destek ve bakım hizmetleri',
    'Kullanıcı dostu arayüzler - UX/UI odaklı tasarım',
    'Hızlı teslimat - Agile metodoloji ile çalışıyoruz',
  ]

  const greetingGradient = 'linear-gradient(135deg, #0A84FF 0%, #30D158 100%)'
  const greetingGradientSoft = 'linear-gradient(135deg, rgba(10,132,255,0.25), rgba(48,209,88,0.25))'

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
                Özel Yazılım Geliştirme Şirketi
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </motion.div>
        </div>
      </section>

      {/* Sekersoft İstatistikleri */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/10">
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
                Özel yazılım geliştirme konusunda deneyimli ekibimizle işletmenizin dijital dönüşümüne değer katıyoruz.
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
                <div
                  className="aspect-square rounded-2xl flex items-center justify-center"
                  style={{ backgroundImage: greetingGradientSoft }}
                >
                  <div className="text-center">
                    <Code className="w-24 h-24 mx-auto mb-4 text-blue-400" />
                    <p className="text-xl font-semibold">Özel Çözümler</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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

