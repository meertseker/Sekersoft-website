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
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sekersoft <span className="gradient-text">Hakkında</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sekersoft, işletmelerin dijital dönüşümüne özel yazılım çözümleri sunan bir teknoloji şirketidir.
            Masaüstü, web ve mobil uygulamalardan veritabanı sistemlerine kadar geniş bir yelpazede hizmet veriyoruz.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Misyonumuz</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Sekersoft olarak, işletmelerin dijital dönüşüm yolculuğunda yanlarında olmayı hedefliyoruz.
                Standart yazılımların yetersiz kaldığı noktalarda, işletmenizin ihtiyaçlarına özel çözümler geliştiriyoruz.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Modern teknolojiler kullanarak, kullanıcı dostu, güvenli ve ölçeklenebilir yazılım çözümleri sunuyoruz.
                Masaüstü uygulamalardan web platformlarına, mobil uygulamalardan veritabanı sistemlerine kadar
                geniş bir yelpazede hizmet veriyoruz.
              </p>
              <p className="text-gray-400 leading-relaxed">
                İlk ürünümüz olan <Link to="/products/logistics" className="text-blue-400 hover:text-blue-300">Sekersoft Lojistik</Link> ile
                taşımacılık sektörüne offline, güvenli ve kullanıcı dostu bir çözüm getirdik. 
                Gelecekte daha fazla sektör için özel çözümler geliştirmeye devam edeceğiz.
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <div className="rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center aspect-square">
                <Code className="w-24 h-24 text-blue-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Temel <span className="gradient-text">Değerlerimiz</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 glass-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Modern <span className="gradient-text">Teknoloji</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center glass-hover"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <tech.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8">
            Sekersoft, modern teknolojiler ve best practice&apos;ler kullanarak özel yazılım çözümleri geliştirir.
            Her projede en güncel framework&apos;ler, güvenlik standartları ve kullanıcı deneyimi odaklı yaklaşım benimseriz.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Hizmetlerimiz <span className="gradient-text">Neler?</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Hikayemiz
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-400 leading-relaxed">
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
          <div className="glass rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Projenizi Başlatın
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına özel yazılım çözümleri için bizimle iletişime geçin.
              Size en uygun çözümü birlikte belirleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105"
              >
                İletişime Geçin
              </Link>
              <Link
                to="/products/logistics"
                className="px-8 py-4 rounded-xl glass glass-hover font-semibold transition-all hover:scale-105"
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
