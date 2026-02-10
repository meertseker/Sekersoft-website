import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Code, 
  Monitor, 
  Globe, 
  Smartphone, 
  Database, 
  Cloud,
  Settings,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

const Solutions = () => {
  const solutions = [
    {
      icon: Code,
      title: 'Özel Yazılım Çözümleri',
      description: 'İşletmenizin ihtiyaçlarına özel, tamamen size özel yazılım çözümleri geliştiriyoruz.',
      features: [
        'İşletmenize özel çözümler',
        'Modern teknoloji stack',
        'Agile geliştirme metodolojisi',
        'Kapsamlı test ve kalite kontrolü',
        'Sürekli destek ve bakım'
      ],
      link: '/contact'
    },
    {
      icon: Monitor,
      title: 'Masaüstü Uygulamaları',
      description: 'Windows ve macOS için profesyonel, offline çalışan masaüstü uygulamaları.',
      features: [
        'Windows ve macOS desteği',
        'Offline çalışma',
        'Yerel veri saklama',
        'Yüksek performans',
        'Kullanıcı dostu arayüz'
      ],
      link: '/products/logistics',
      highlight: true
    },
    {
      icon: Globe,
      title: 'Web Uygulamaları',
      description: 'Modern, responsive ve yüksek performanslı web uygulamaları ve platformlar.',
      features: [
        'Responsive tasarım',
        'Yüksek performans',
        'SEO optimizasyonu',
        'Güvenli altyapı',
        'Ölçeklenebilir mimari'
      ],
      link: '/contact'
    },
    {
      icon: Smartphone,
      title: 'Mobil Uygulamalar',
      description: 'iOS ve Android için native ve cross-platform mobil uygulama geliştirme.',
      features: [
        'iOS ve Android desteği',
        'Native ve cross-platform',
        'Modern UI/UX tasarım',
        'Push notification',
        'App Store optimizasyonu'
      ],
      link: '/contact'
    },
    {
      icon: Database,
      title: 'Veritabanı Çözümleri',
      description: 'Güvenli, ölçeklenebilir ve optimize edilmiş veritabanı sistemleri.',
      features: [
        'Veri modelleme ve tasarım',
        'Performans optimizasyonu',
        'Yedekleme stratejileri',
        'Güvenlik yapılandırması',
        'Veri migrasyonu'
      ],
      link: '/contact'
    },
    {
      icon: Cloud,
      title: 'Bulut Entegrasyonları',
      description: 'AWS, Azure ve diğer bulut servisleri ile entegre çözümler.',
      features: [
        'AWS ve Azure desteği',
        'API entegrasyonları',
        'Mikroservis mimarisi',
        'Otomatik ölçeklendirme',
        'Yüksek erişilebilirlik'
      ],
      link: '/contact'
    },
  ]

  const customSoftware = {
    title: 'Özel Yazılım Çözümleri',
    description: 'Standart yazılımlar ihtiyaçlarınızı karşılamıyor mu? Size özel çözümler geliştiriyoruz.',
    process: [
      {
        step: 1,
        title: 'İhtiyaç Analizi',
        description: 'İşletmenizin ihtiyaçlarını detaylı analiz ediyoruz.'
      },
      {
        step: 2,
        title: 'Tasarım & Planlama',
        description: 'Kullanıcı dostu arayüz ve teknik mimari tasarlıyoruz.'
      },
      {
        step: 3,
        title: 'Geliştirme',
        description: 'Modern teknolojilerle yazılımı geliştiriyoruz.'
      },
      {
        step: 4,
        title: 'Test & Kalite',
        description: 'Kapsamlı testler ve kalite kontrolü yapıyoruz.'
      },
      {
        step: 5,
        title: 'Teslimat & Destek',
        description: 'Yazılımı teslim edip sürekli destek sağlıyoruz.'
      }
    ]
  }

  const benefits = [
    {
      icon: Shield,
      title: 'Güvenlik',
      description: 'Modern güvenlik standartları ve gizlilik odaklı yaklaşım.'
    },
    {
      icon: Zap,
      title: 'Performans',
      description: 'Yüksek performanslı, optimize edilmiş çözümler.'
    },
    {
      icon: Settings,
      title: 'Özelleştirme',
      description: 'İhtiyaçlarınıza göre tamamen özelleştirilebilir.'
    },
    {
      icon: CheckCircle2,
      title: 'Kalite',
      description: 'Best practice\'ler ve kalite standartlarına uygun.'
    }
  ]

  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Yazılım <span className="gradient-text">Çözümlerimiz</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            İşletmenizin dijital dönüşümü için masaüstü, web ve mobil uygulamalardan 
            veritabanı sistemlerine kadar geniş bir yelpazede hizmet sunuyoruz.
          </p>
        </motion.div>

        {/* Solutions Bento Grid */}
        <div className="bento-grid mb-8 sm:mb-12 lg:mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bento-medium bento-card glass-liquid glass-reflective group ${
                solution.highlight ? 'ring-2 ring-blue-500/50 shadow-2xl shadow-blue-500/20' : ''
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              >
                <solution.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-400 mb-6">{solution.description}</p>
              
              <div className="space-y-2 mb-6">
                {solution.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={solution.link}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group/link"
              >
                Daha Fazla Bilgi
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Software Process */}
        <motion.div
          id="custom-software"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="bento-card glass-liquid-strong p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                {customSoftware.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {customSoftware.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {customSoftware.process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(10,132,255,0.25), rgba(44,217,197,0.25))',
                      boxShadow: '0 8px 25px rgba(10,132,255,0.15)'
                    }}
                  >
                    <span className="text-xl md:text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400">{item.description}</p>
                  {index < customSoftware.process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/20 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Neden <span className="gradient-text">Sekersoft?</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bento-card glass-liquid text-center p-4 md:p-6"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-xl flex items-center justify-center mb-3 md:mb-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10,132,255,0.25), rgba(44,217,197,0.25))',
                    boxShadow: '0 8px 25px rgba(10,132,255,0.15)'
                  }}
                >
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-sm md:text-base font-semibold mb-1 md:mb-2">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bento-card glass-liquid-strong p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Projenizi <span className="gradient-text">Konuşalım</span>
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              İhtiyaçlarınıza özel yazılım çözümü için bizimle iletişime geçin. 
              Ücretsiz danışmanlık ve teklif sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105 text-sm md:text-base"
              >
                İletişime Geçin
              </Link>
              <Link
                to="/products/logistics"
                className="px-6 md:px-8 py-3 md:py-4 rounded-xl glass-liquid glass-hover font-semibold transition-all hover:scale-105 text-sm md:text-base"
              >
                Ürünlerimizi İnceleyin
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Solutions
