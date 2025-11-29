import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Truck, ArrowRight, CheckCircle2, Shield, Database, Monitor } from 'lucide-react'
import { screenshotPaths } from '../../data/screenshots'

const Products = () => {
  const products = [
    {
      id: 'logistics',
      name: 'Sekersoft Lojistik',
      tagline: 'Offline Lojistik Yönetim Sistemi',
      description: 'Taşımacılık operasyonlarınızı kontrol panelinden yönetin. Tek seferlik lisanslı offline masaüstü uygulamasıyla sipariş, güzergâh ve maliyetleri aynı yerde gör.',
      icon: Truck,
      image: screenshotPaths.dashboard,
      features: [
        'Sipariş yönetimi',
        'Otomatik maliyet hesaplama',
        'Araç & güzergah yönetimi',
        'Detaylı raporlama',
        '%100 offline çalışma',
        'Windows & macOS desteği'
      ],
      pricing: {
        setup: '32.000 TL + KDV',
        maintenance: '8.000 TL/yıl (2. yıldan itibaren)'
      },
      link: '/products/logistics',
      status: 'available',
      category: 'Masaüstü Uygulaması'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Güvenli',
      description: 'Tüm verileriniz bilgisayarınızda güvende'
    },
    {
      icon: Database,
      title: 'Offline',
      description: 'İnternet bağlantısı gerektirmez'
    },
    {
      icon: Monitor,
      title: 'Cross-Platform',
      description: 'Windows ve macOS desteği'
    }
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
            Ürünlerimiz
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            İşletmenizin dijital dönüşümü için geliştirdiğimiz yazılım çözümleri. 
            Her ürün, belirli bir sektör veya ihtiyaca özel olarak tasarlandı.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="space-y-12 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative bg-black/40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover aspect-video lg:aspect-auto"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full glass text-xs font-semibold text-blue-400">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-1">{product.name}</h2>
                      <p className="text-gray-400 text-sm">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Özellikler
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Kurulum</p>
                        <p className="text-xl font-bold text-white">{product.pricing.setup}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400 mb-1">Bakım</p>
                        <p className="text-lg font-semibold text-gray-300">{product.pricing.maintenance}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={product.link}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105 group"
                  >
                    Detayları Görüntüle
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Tüm Ürünlerimizde <span className="gradient-text">Ortak</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
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
          <div className="glass rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Özel İhtiyacınız mı Var?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Mevcut ürünlerimiz ihtiyacınızı karşılamıyor mu? Size özel yazılım çözümü geliştirebiliriz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105"
              >
                İletişime Geçin
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-4 rounded-xl glass glass-hover font-semibold transition-all hover:scale-105"
              >
                Çözümlerimizi İnceleyin
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products

