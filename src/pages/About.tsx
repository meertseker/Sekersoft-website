import { motion } from 'framer-motion'
import { Target, Shield, Heart, Code, Database, Monitor, Zap, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Özel Çözümler',
      description: 'Her işletmenin ihtiyacı farklıdır. Standart yazılımlar yerine size özel çözümler geliştiriyoruz.'
    },
    {
      icon: Heart,
      title: 'Kullanıcı Odaklı',
      description: 'Karmaşık sistemler değil, kullanıcı dostu arayüzler. Teknik bilgi gerektirmez.'
    },
    {
      icon: Shield,
      title: 'Güvenlik & Gizlilik',
      description: 'Verileriniz güvende. Modern güvenlik standartları ve gizlilik odaklı yaklaşım.'
    },
    {
      icon: Zap,
      title: 'Modern Teknoloji',
      description: 'En güncel teknolojiler ve best practice\'ler ile hızlı, güvenilir çözümler.'
    },
  ]

  const techStack = [
    {
      name: 'Modern Stack',
      description: 'React, TypeScript, Node.js ve daha fazlası',
      icon: Code
    },
    {
      name: 'Cross-Platform',
      description: 'Windows, macOS, Web ve Mobil uygulamalar',
      icon: Monitor
    },
    {
      name: 'Cloud & Local',
      description: 'Bulut ve yerel veritabanı çözümleri',
      icon: Database
    },
    {
      name: 'Best Practices',
      description: 'Agile metodoloji ve modern yazılım geliştirme',
      icon: CheckCircle2
    },
  ]

  const services = [
    'Özel yazılım geliştirme',
    'Masaüstü uygulamaları',
    'Web uygulamaları',
    'Mobil uygulamalar',
    'Veritabanı çözümleri',
    'Bulut entegrasyonları',
    'API geliştirme',
    'Teknik danışmanlık'
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Sekersoft <span className="gradient-text">Hakkında</span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sekersoft, işletmelerin dijital dönüşümüne özel yazılım çözümleri sunan bir teknoloji şirketidir.
            Masaüstü, web ve mobil uygulamalardan veritabanı sistemlerine kadar geniş bir yelpazede hizmet veriyoruz.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="bento-card glass-liquid-strong p-6 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10,132,255,0.25), rgba(44,217,197,0.25))',
                    boxShadow: '0 10px 30px rgba(10,132,255,0.2)'
                  }}
                >
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Misyonumuz</h2>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
                  Sekersoft olarak, işletmelerin dijital dönüşüm yolculuğunda yanlarında olmayı hedefliyoruz.
                  Standart yazılımların yetersiz kaldığı noktalarda, işletmenizin ihtiyaçlarına özel çözümler geliştiriyoruz.
                </p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
                  Modern teknolojiler kullanarak, kullanıcı dostu, güvenli ve ölçeklenebilir yazılım çözümleri sunuyoruz.
                  Masaüstü uygulamalardan web platformlarına, mobil uygulamalardan veritabanı sistemlerine kadar
                  geniş bir yelpazede hizmet veriyoruz.
                </p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  İlk ürünümüz olan <Link to="/products/logistics" className="text-blue-400 hover:text-blue-300">Sekersoft Lojistik</Link> ile
                  taşımacılık sektörüne offline, güvenli ve kullanıcı dostu bir çözüm getirdik. 
                  Gelecekte daha fazla sektör için özel çözümler geliştirmeye devam edeceğiz.
                </p>
              </div>
              <div className="bento-card glass-liquid p-6 md:p-8">
                <div className="rounded-xl flex items-center justify-center aspect-square"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10,132,255,0.2), rgba(44,217,197,0.2))'
                  }}
                >
                  <Code className="w-16 h-16 md:w-24 md:h-24 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Temel <span className="gradient-text">Değerlerimiz</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bento-card glass-liquid p-4 md:p-6"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-3 md:mb-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10,132,255,0.25), rgba(44,217,197,0.25))',
                    boxShadow: '0 8px 25px rgba(10,132,255,0.15)'
                  }}
                >
                  <value.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">{value.title}</h3>
                <p className="text-xs md:text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Modern <span className="gradient-text">Teknoloji</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bento-card glass-liquid p-4 md:p-6 text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10,132,255,0.25), rgba(44,217,197,0.25))',
                    boxShadow: '0 10px 30px rgba(10,132,255,0.2)'
                  }}
                >
                  <tech.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">{tech.name}</h3>
                <p className="text-xs md:text-sm text-gray-400">{tech.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-6 md:mt-8 text-sm md:text-base">
            Sekersoft, modern teknolojiler ve best practice&apos;ler kullanarak özel yazılım çözümleri geliştirir.
            Her projede en güncel framework&apos;ler, güvenlik standartları ve kullanıcı deneyimi odaklı yaklaşım benimseriz.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card glass-liquid-strong p-6 md:p-12 mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Hizmetlerimiz <span className="gradient-text">Neler?</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card glass-liquid-strong p-6 md:p-12 mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
            Hikayemiz
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 text-sm md:text-base text-gray-400 leading-relaxed">
            <p>
              Sekersoft, işletmelerin dijital dönüşüm ihtiyaçlarından doğdu. Piyasadaki standart yazılımların
              yetersiz kaldığı noktalarda, işletmelere özel çözümler geliştirmek için kuruldu.
            </p>
            <p>
              İlk ürünümüz olan <Link to="/products/logistics" className="text-blue-400 hover:text-blue-300">Sekersoft Lojistik</Link> ile
              taşımacılık sektörüne offline, güvenli ve kullanıcı dostu bir çözüm getirdik. Bu ürün,
              küçük ve orta ölçekli taşımacılık işletmelerinin gerçek ihtiyaçlarından doğdu.
            </p>
            <p>
              Sekersoft olarak çalışırken en önemli prensiplerimiz:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Özelleştirme:</strong> Her işletmenin ihtiyacı farklıdır, standart çözümler yeterli değildir</li>
              <li><strong>Kullanıcı Deneyimi:</strong> Karmaşık sistemler değil, kullanıcı dostu arayüzler</li>
              <li><strong>Güvenlik:</strong> Verileriniz güvende, modern güvenlik standartları</li>
              <li><strong>Modern Teknoloji:</strong> En güncel teknolojiler ve best practice&apos;ler</li>
              <li><strong>Yerel Destek:</strong> Türkçe dil desteği ve yerel formatlar</li>
            </ul>
            <p>
              Bugün, birçok işletme Sekersoft çözümleri ile dijital dönüşümlerini gerçekleştiriyor.
              Her gün yeni projeler üzerinde çalışıyor, daha fazla sektör için özel çözümler geliştirmeye
              devam ediyoruz.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bento-card glass-liquid-strong p-6 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Projenizi Başlatın
            </h2>
            <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına özel yazılım çözümleri için bizimle iletişime geçin.
              Size en uygun çözümü birlikte belirleyelim.
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

export default About
