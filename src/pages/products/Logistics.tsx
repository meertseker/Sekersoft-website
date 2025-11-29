import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { 
  Truck, 
  Package, 
  MapPin, 
  BarChart3, 
  Receipt,
  FileText,
  DollarSign,
  Settings,
  Shield,
  Database,
  Download,
  Mail,
  HardDrive,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Building2,
  Clock,
  Calculator,
  User,
  Phone,
  Send,
  BookOpen,
  Video,
  ExternalLink
} from 'lucide-react'
import { screenshotPaths } from '../../data/screenshots'
import { siteConfig } from '../../config/site'
import { submitLeadForm } from '../../lib/forms'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  vehicleCount: '',
  message: '',
}

const Logistics = () => {
  const mainFeatures = [
    {
      icon: Package,
      title: 'Akıllı Sipariş Yönetimi',
      description: 'Tüm siparişlerinizi dijital ortamda kolayca oluşturun, takip edin ve yönetin.',
      image: screenshotPaths.orders,
      details: [
        'Kolay sipariş oluşturma - Plaka, müşteri, güzergah, fiyat bilgileri',
        'Canlı durum takibi - Bekliyor, Yolda, Teslim Edildi, Faturalandı',
        'Gelişmiş arama ve filtreleme',
        'Detaylı sipariş geçmişi',
        'Müşteri ve araç bazında sipariş görüntüleme'
      ]
    },
    {
      icon: DollarSign,
      title: 'Profesyonel Maliyet Hesaplama',
      description: 'Her siparişin gerçek maliyetini otomatik hesaplayın. Hangi iş karlı hangisi zararlı, anında görün.',
      image: '/expense-calculator.png',
      details: [
        'Yakıt maliyeti - KM bazlı otomatik hesaplama',
        'Sürücü giderleri - Günlük ücret, yemek, süre hesaplama',
        'Bakım masrafları - Yağ, lastik, büyük bakım amortismanı',
        'Yol giderleri - HGS, otoyol, köprü ücretleri',
        'Sabit giderler - Sigorta, MTV, muayene amortismanı',
        'Otomatik kar-zarar analizi'
      ]
    },
    {
      icon: Truck,
      title: 'Araç Yönetimi',
      description: 'Her aracınızın maliyet profilini kaydedin. Farklı araçların farklı maliyetlerini dikkate alın.',
      image: screenshotPaths.vehicles,
      details: [
        'Yakıt ayarları - Tüketim (lt/100km), yakıt fiyatı',
        'Sürücü parametreleri - Günlük ücret, ortalama KM, yemek masrafı',
        'Bakım parametreleri - Yağ, lastik, büyük bakım maliyetleri',
        'Sabit giderler - Sigorta, MTV, muayene (yıllık)',
        'Fiyatlandırma ayarları - Kar oranı, KDV',
        'Amortisman hesaplaması'
      ]
    },
    {
      icon: MapPin,
      title: 'Güzergah Yönetimi',
      description: 'Sık kullandığınız güzergahları kaydedin. Mesafe ve maliyet bilgilerini otomatik hesaplayın.',
      image: screenshotPaths.routes,
      details: [
        'Başlangıç ve varış noktaları',
        'Mesafe bilgisi (km)',
        'HGS ve köprü maliyetleri',
        'Tahmini süre hesaplama',
        'Notlar ve alternatif güzergahlar',
        'Sipariş oluştururken listeden seçim'
      ]
    },
    {
      icon: Receipt,
      title: 'Detaylı Gider Takibi',
      description: 'Her sipariş için detaylı gider kaydı tutun. Gerçek maliyetleri tam olarak bilin.',
      image: '/gidertakibi.png',
      details: [
        'Kategorize gider türleri - Yakıt, HGS, Köprü, Yemek, Bakım, Diğer',
        'Sipariş bazlı gider ekleme',
        'Otomatik toplam hesaplama',
        'Gider geçmişi ve zaman damgası',
        'Net kazanç hesaplama (Gelir - Gider)',
        'Kolay silme ve düzenleme'
      ]
    },
    {
      icon: FileText,
      title: 'Fatura ve Belge Yönetimi',
      description: 'Tüm evraklarınızı güvenli şekilde dijital ortamda saklayın.',
      image: screenshotPaths.settings,
      details: [
        'PDF ve fotoğraf yükleme desteği',
        'Sipariş bazlı fatura ilişkilendirme',
        'Güvenli yerel dosya saklama',
        'Kolay görüntüleme ve silme',
        'Toplu fatura yükleme',
        'Kağıt karmaşasına son'
      ]
    },
    {
      icon: BarChart3,
      title: 'Gelişmiş Raporlama & Analiz',
      description: 'İşletmenizin durumunu görsel raporlar ve analizlerle anlayın.',
      image: screenshotPaths.charts,
      details: [
        'Aylık finansal raporlar - Gelir, gider, net kar',
        'Araç performans analizleri - En çok çalışan araçlar',
        'Müşteri analizleri - En çok sipariş verenler',
        'Sipariş durum dağılımı',
        'Kar marjı trendi',
        'CSV export - Excel uyumlu'
      ]
    },
    {
      icon: Monitor,
      title: 'Modern Dashboard',
      description: 'İşletmenizin anlık durumunu tek bakışta görün.',
      image: screenshotPaths.dashboard,
      details: [
        'Toplam ve aktif sipariş sayıları',
        'Tamamlanan teslimatlar',
        'Aktif araç sayısı',
        'Aylık finansal özet (gelir, gider, kar)',
        'Son siparişler listesi',
        'Görsel grafikler ve istatistikler'
      ]
    },
  ]

  const technicalFeatures = [
    {
      icon: Shield,
      title: '%100 Offline Çalışma',
      description: 'İnternet bağlantısı gerektirmez, tüm veriler bilgisayarınızda'
    },
    {
      icon: Database,
      title: 'Güvenli Veri Saklama',
      description: 'SQLite veritabanı ile hızlı ve güvenilir veri yönetimi'
    },
    {
      icon: Download,
      title: 'Çoklu Export Seçenekleri',
      description: 'JSON, CSV, veritabanı yedeği, istatistik raporu'
    },
    {
      icon: Mail,
      title: 'Email Entegrasyonu',
      description: 'Gmail/Outlook ile otomatik sipariş bildirimi gönderme'
    },
    {
      icon: HardDrive,
      title: 'Otomatik Yedekleme',
      description: 'Manuel veya otomatik veri yedekleme sistemi'
    },
    {
      icon: Settings,
      title: 'Lisans Yönetimi',
      description: 'Güvenli lisans sistemi ile yazılım koruma'
    },
    {
      icon: Monitor,
      title: 'Windows & macOS',
      description: 'Hem Windows hem de macOS işletim sistemlerinde çalışır'
    },
    {
      icon: CheckCircle2,
      title: 'Türkçe Arayüz',
      description: 'Tam Türkçe dil desteği, Türk Lirası ve tarih formatları'
    },
  ]

  const plans = [
    {
      name: 'Standart Paket',
      description: 'Tek seferlik kurulum · Tüm özellikler dahil',
      price: '32.000',
      priceSuffix: 'TL + KDV',
      priceNote: 'Tek seferlik kurulum bedeli',
      features: [
        { text: 'Sınırsız sipariş yönetimi', included: true },
        { text: 'Otomatik maliyet hesaplama sistemi', included: true },
        { text: 'Araç & şoför yönetimi', included: true },
        { text: 'Güzergah yönetimi', included: true },
        { text: 'Detaylı gider takibi', included: true },
        { text: 'Fatura ve belge yönetimi', included: true },
        { text: 'Gelişmiş raporlama & analiz', included: true },
        { text: 'Modern dashboard', included: true },
        { text: 'PDF/Excel export', included: true },
        { text: 'Email entegrasyonu', included: true },
        { text: 'Kurulum ve ilk yıl destek', included: true },
      ],
      popular: true,
      cta: 'Teklif Oluştur',
      ctaLink: '/contact',
      maintenance: {
        price: '8.000',
        period: 'Yıllık',
        description: 'Bakım ve güncelleme paketi (2. yıldan itibaren)',
        includes: [
          'Yeni versiyon güncellemeleri',
          'Mevzuat uyum yamaları',
          'Uzaktan destek',
          'Lisans taşıma hakları',
          'Yedekleme kontrolleri'
        ]
      }
    },
  ]

  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Nakliye İşletmecisi',
      content: 'Artık hangi siparişin ne kadar karlı olduğunu görebiliyorum. Maliyet hesaplaması otomatik oluyor, çok zaman kazandırıyor.',
      rating: 5,
    },
    {
      name: 'Mehmet Demir',
      role: 'Taşımacılık Sahibi',
      content: 'Ay sonunda muhasebe için rapor hazırlamak artık kâbus değil. Tek tıkla tüm veriler hazır.',
      rating: 5,
    },
    {
      name: 'Zeynep Kaya',
      role: 'Filo Yöneticisi',
      content: 'Her aracın ne kadar kar getirdiğini görebiliyorum. Gizli maliyetleri fark etmek çok önemliymiş.',
      rating: 5,
    },
  ]

  const solutions = [
    {
      icon: Truck,
      title: 'Tek Araç Sahipleri',
      description: 'Kendi aracıyla çalışan taşımacılar için mükemmel çözüm.',
      benefits: [
        'Her siparişin ne kadar karlı olduğunu görün',
        'Gizli maliyetleri keşfedin',
        'Müşteri ve sipariş geçmişini takip edin',
        'Ay sonu raporlarını kolayca hazırlayın',
        'Faturalarınızı dijital ortamda saklayın'
      ],
      scenario: 'Sabah siparişinizi alıyorsunuz. Sisteme giriyorsunuz: güzergah, müşteri, fiyat. Sekersoft anında maliyeti hesaplıyor. Karlı mı zararlı mı, hemen biliyorsunuz.',
      image: screenshotPaths.orders
    },
    {
      icon: Building2,
      title: 'Nakliye Firmaları',
      description: 'Küçük ve orta ölçekli nakliye işletmeleri için.',
      benefits: [
        'Çoklu araç yönetimi',
        'Araç bazında performans analizi',
        'Hangi araç daha karlı, kolayca görün',
        'Müşteri bazında sipariş takibi',
        'Detaylı finansal raporlama'
      ],
      scenario: '5 aracınız var. Hangisi daha çok kazandırıyor? Hangi müşteri en çok sipariş veriyor? Hangi güzergah karlı? Tüm cevaplar dashboard\'ta.',
      image: screenshotPaths.dashboard
    },
    {
      icon: Package,
      title: 'Kargo Şirketleri',
      description: 'Sefer yönetimi ve maliyet optimizasyonu.',
      benefits: [
        'Sefer bazında sipariş yönetimi',
        'Otomatik maliyet hesaplama',
        'Sürücü performans takibi',
        'Güzergah maliyet analizi',
        'İstatistiksel raporlar'
      ],
      scenario: 'Her seferin maliyetini biliyorsunuz. Yakıt, sürücü, bakım, yol giderleri otomatik hesaplanıyor. Karlılık marjınız her zaman görünür.',
      image: screenshotPaths.charts
    },
    {
      icon: Users,
      title: 'Özel Taşımacılık',
      description: 'Özel müşteriler için düzenli taşımacılık hizmeti.',
      benefits: [
        'Müşteri bazlı fiyatlandırma',
        'Tekrar eden güzergahları kaydedin',
        'Sipariş geçmişi ve analizler',
        'Email ile otomatik bildirimler',
        'Profesyonel raporlar'
      ],
      scenario: 'Aynı güzergahı sürekli yapıyorsunuz. Bir kez kaydediyorsunuz, her seferinde otomatik maliyet hesaplanıyor. Zaman kazanıyorsunuz.',
      image: screenshotPaths.createOrder
    },
  ]

  const useCases = [
    {
      icon: Calculator,
      title: 'Doğru Fiyatlandırma',
      description: 'Gerçek maliyetleri bilerek doğru fiyat verin',
      result: '%15-25 kar artışı'
    },
    {
      icon: Clock,
      title: 'Zaman Tasarrufu',
      description: 'Manuel hesaplama ve kağıt işi yerine otomatik sistem',
      result: 'Günde 2 saat kazanç'
    },
    {
      icon: BarChart3,
      title: 'Görünürlük',
      description: 'Hangi iş karlı, hangi müşteri daha çok kazandırıyor',
      result: 'Bilinçli kararlar'
    },
    {
      icon: DollarSign,
      title: 'Maliyet Kontrolü',
      description: 'Gizli maliyetleri görün, harcamaları kontrol edin',
      result: '%10-15 tasarruf'
    },
  ]

  const realScenarios = [
    {
      title: 'Sabah Rutini',
      steps: [
        'Dashboard\'ı açıyorsunuz',
        'Yeni sipariş alıyorsunuz',
        'Sisteme plaka, müşteri, güzergah giriyorsunuz',
        'Araç ve güzergahı seçiyorsunuz',
        'Sekersoft otomatik maliyet hesaplıyor',
        'Fiyatlandırıp işe başlıyorsunuz'
      ],
      time: '30 saniye'
    },
    {
      title: 'Ay Sonu Muhasebe',
      steps: [
        'Raporlar sayfasına gidiyorsunuz',
        'Ayı seçip "Rapor Oluştur" tıklıyorsunuz',
        'Tüm gelir, gider, kar özeti görünüyor',
        'CSV export yapıyorsunuz',
        'Excel\'de açıp muhasebeciye gönderiyorsunuz'
      ],
      time: '2 dakika'
    },
    {
      title: 'Araç Performans Analizi',
      steps: [
        'Raporlarda "En Çok Çalışan Araçlar" bölümüne bakıyorsunuz',
        'Hangi araç kaç sipariş yaptı görüyorsunuz',
        'Araç başına ortalama kazanç görünüyor',
        'Hangi aracın daha karlı olduğunu anlıyorsunuz',
        'Optimum atamalar yapıyorsunuz'
      ],
      time: '5 dakika'
    },
  ]

  const comparisons = [
    { feature: 'Offline Çalışma', sekersoft: true, others: false },
    { feature: 'Profesyonel Maliyet Sistemi', sekersoft: true, others: false },
    { feature: 'Araç Profilleme', sekersoft: true, others: false },
    { feature: 'Güzergah Yönetimi', sekersoft: true, others: false },
    { feature: 'Tek Seferlik Ödeme', sekersoft: true, others: false },
    { feature: 'Veri Gizliliği', sekersoft: true, others: false },
    { feature: 'Türkçe Destek', sekersoft: true, others: true },
    { feature: 'Raporlama', sekersoft: true, others: true },
  ]

  const greetingGradient = 'linear-gradient(135deg, #0A84FF 0%, #30D158 100%)'

  // Resources Data
  const resourceCategories = [
    {
      title: 'Başlangıç Kılavuzları',
      icon: BookOpen,
      resources: [
        {
          title: 'Hızlı Başlangıç Rehberi',
          description: 'Sekersoft\'u 5 dakikada kurun ve kullanmaya başlayın',
          type: 'PDF',
          link: '#'
        },
        {
          title: 'Kurulum Kılavuzu',
          description: 'Detaylı kurulum talimatları (Windows & macOS)',
          type: 'PDF',
          link: '#'
        },
        {
          title: 'İlk Adımlar',
          description: 'İlk siparişinizi oluşturun, sistemi keşfedin',
          type: 'PDF',
          link: '#'
        }
      ]
    },
    {
      title: 'Kullanım Kılavuzları',
      icon: FileText,
      resources: [
        {
          title: 'Sipariş Yönetimi',
          description: 'Sipariş oluşturma, düzenleme ve takip',
          type: 'PDF',
          link: '#'
        },
        {
          title: 'Maliyet Sistemi',
          description: 'Otomatik maliyet hesaplama nasıl çalışır',
          type: 'PDF',
          link: '#'
        },
        {
          title: 'Araç ve Güzergah Yönetimi',
          description: 'Araç profilleri ve güzergah kayıtları',
          type: 'PDF',
          link: '#'
        },
        {
          title: 'Raporlama ve Analiz',
          description: 'Detaylı raporlar oluşturun, verileri analiz edin',
          type: 'PDF',
          link: '#'
        },
        {
          title: 'Veri Yönetimi',
          description: 'Yedekleme, export ve veri güvenliği',
          type: 'PDF',
          link: '#'
        }
      ]
    },
    {
      title: 'Video Eğitimler',
      icon: Video,
      resources: [
        {
          title: 'Sekersoft\'a Giriş',
          description: '10 dakikalık genel tanıtım videosu',
          type: 'Video',
          duration: '10:30',
          link: '#'
        },
        {
          title: 'İlk Sipariş Oluşturma',
          description: 'Adım adım sipariş oluşturma',
          type: 'Video',
          duration: '5:45',
          link: '#'
        },
        {
          title: 'Maliyet Hesaplama',
          description: 'Maliyet sistemini anlama',
          type: 'Video',
          duration: '8:15',
          link: '#'
        },
        {
          title: 'Raporlar ve Export',
          description: 'Raporları oluşturma ve dışa aktarma',
          type: 'Video',
          duration: '6:20',
          link: '#'
        }
      ]
    },
    {
      title: 'İndirilenler',
      icon: Download,
      resources: [
        {
          title: 'Sekersoft Windows',
          description: 'Windows 10 ve üzeri için son sürüm',
          type: 'EXE',
          size: '~120 MB',
          link: '#'
        },
        {
          title: 'Sekersoft macOS',
          description: 'macOS 10.15 Catalina ve üzeri için',
          type: 'DMG',
          size: '~125 MB',
          link: '#'
        },
        {
          title: 'Örnek Veriler',
          description: 'Test için örnek sipariş verileri',
          type: 'ZIP',
          size: '2 MB',
          link: '#'
        }
      ]
    }
  ]

  // Features Show More State
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  const initialFeaturesCount = 3
  const displayedFeatures = showAllFeatures ? mainFeatures : mainFeatures.slice(0, initialFeaturesCount)

  // Demo Form State
  const [formData, setFormData] = useState(initialFormState)
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [botField, setBotField] = useState('')

  const demoFeatures = [
    'Sipariş yönetimi sistemini test edin',
    'Otomatik maliyet hesaplama özelliğini görün',
    'Araç ve güzergah yönetimini deneyin',
    'Raporlama ve analiz araçlarını keşfedin',
    'Offline çalışma avantajını yaşayın',
    'Türkçe arayüzü inceleyin',
  ]

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (botField) {
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      if (siteConfig.forms.demo) {
        await submitLeadForm({
          endpoint: siteConfig.forms.demo,
          payload: {
            ...formData,
            formName: 'demo',
          },
        })
      } else {
        console.info('Demo form submission (development only):', formData)
      }

      setSubmitted(true)
      setStatus('success')
      setFormData(initialFormState)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Talebiniz gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.')
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

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-6 border border-white/10"
          >
            <Truck className="w-4 h-4 text-blue-400" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-300">
              Sekersoft Lojistik · İlk Ürünümüz
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sekersoft <span className="gradient-text">Lojistik</span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Taşımacılık operasyonlarınızı kontrol panelinden yönetin. Tek seferlik lisanslı Sekersoft masaüstü uygulamasıyla 
            sipariş, güzergâh ve maliyetleri aynı yerde gör. İnternet şartı yok, veriler şirket içinde kalır.
          </p>

          <div className="inline-flex flex-col items-center gap-1 glass rounded-2xl px-6 py-4 mb-10">
            <p className="text-sm text-gray-400 uppercase tracking-wide">Tek seferlik kurulum</p>
            <p className="text-3xl font-semibold text-white">32.000 TL + KDV</p>
            <p className="text-xs text-gray-500">2. yıldan itibaren yıllık 8.000 TL bakım ve güncelleme</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="group px-8 py-4 rounded-2xl text-white font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105 hover:opacity-95 flex items-center justify-center gap-2"
              style={{ backgroundImage: greetingGradient }}
            >
              14 Günlük Demo Aç
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-2xl glass glass-hover font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 border border-white/10"
            >
              İletişime Geç
            </Link>
          </div>
        </motion.div>

        {/* Uygulama Görseli */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 relative"
        >
          <div className="glass rounded-3xl p-4 shadow-2xl shadow-blue-500/10">
            <div
              className="aspect-video rounded-2xl overflow-hidden border border-white/5 bg-black/40"
            >
              <img
                src={screenshotPaths.dashboard}
                alt="Sekersoft Lojistik yönetim paneli"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-6 -left-6 glass rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-sm font-semibold">Otomatik Hesaplama</p>
                <p className="text-xs text-gray-400">Maliyet Sistemi</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold">%100 Offline</p>
                <p className="text-xs text-gray-400">İnternet Gerektirmez</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Use Cases - Size Ne Kazandırır (ROI odaklı) */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Size Ne <span className="gradient-text">Kazandırır?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Gerçek rakamlarla somut faydalar. İşletmenize değer katacak ölçülebilir sonuçlar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center glass-hover"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                <useCase.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{useCase.description}</p>
              <p className="text-blue-400 font-semibold">{useCase.result}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section - Kimler İçin */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kimler İçin <span className="gradient-text">Sekersoft?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            1 araçtan 50+ araç filosuna kadar, her büyüklükteki taşımacılık işletmesi için ideal çözüm.
            İster tek başınıza çalışın, ister ekibiniz olsun - Sekersoft size göre.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 glass-hover flex flex-col"
            >
              <div className="rounded-xl overflow-hidden border border-white/10 mb-4">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-3">
                <solution.icon className="w-5 h-5 text-blue-400" />
              </div>
              
              <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{solution.description}</p>
              
              <div className="space-y-1.5 mb-4 flex-grow">
                {solution.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 mt-auto">
                <p className="text-xs text-gray-400 italic leading-relaxed">
                  <strong className="text-blue-400">Senaryo:</strong> {solution.scenario}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison - Before vs After */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Önce vs <span className="gradient-text">Sonra</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400">❌ Sekersoft Olmadan</h3>
              <ul className="space-y-3">
                {[
                  'Siparişler kağıtta, kaybolabiliyor',
                  'Manuel maliyet hesaplama - Zaman kaybı',
                  'Hangi iş karlı bilmiyorsunuz',
                  'Gizli maliyetleri göremiyorsunuz',
                  'Ay sonu rapor hazırlamak kâbus',
                  'Müşteri geçmişi karışık',
                  'Her şey hafızada, unutabiliyor'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300">
                    <span className="text-red-400 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="glass rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold mb-6 text-green-400">✅ Sekersoft İle</h3>
              <ul className="space-y-3">
                {[
                  'Tüm siparişler dijital, düzenli',
                  'Otomatik maliyet hesaplama - Saniyeler içinde',
                  'Her işin karlılığını anında görüyorsunuz',
                  'Tüm maliyetler şeffaf',
                  'Tek tıkla rapor - 2 dakika',
                  'Müşteri geçmişi bir tık uzağınızda',
                  'Her şey kayıtlı, güvende'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section - Ne Yapabilir (Detaylar) */}
      <section id="features" className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Güçlü <span className="gradient-text">Özellikler</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Taşımacılık işletmenizi profesyonelce yönetmek için ihtiyacınız olan her şey.
            Offline masaüstü uygulama ile hızlı, güvenli ve güvenilir.
          </p>
        </motion.div>

        <div className="space-y-20 mb-12">
          {displayedFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-lg mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="glass rounded-3xl overflow-hidden border border-white/5">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {mainFeatures.length > initialFeaturesCount && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-2 mx-auto"
            >
              {showAllFeatures ? (
                <>
                  Daha Az Göster
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </>
              ) : (
                <>
                  Tüm Özellikleri Görüntüle
                  <ArrowRight className="w-5 h-5 -rotate-90" />
                </>
              )}
            </button>
          </motion.div>
        )}

      </section>

      {/* Real Scenarios - Pratik Kullanım */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Gerçek Kullanım <span className="gradient-text">Senaryoları</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {realScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{scenario.title}</h3>
                  <span className="px-3 py-1 rounded-lg glass text-sm font-semibold text-green-400">
                    {scenario.time}
                  </span>
                </div>
                <ol className="space-y-2">
                  {scenario.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-xs text-blue-400 font-semibold">
                        {stepIndex + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Neden <span className="gradient-text">Sekersoft?</span>
          </h2>
          <div className="glass rounded-3xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Özellik</th>
                  <th className="text-center py-4 px-4 text-blue-400 font-semibold">Sekersoft</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Diğer Çözümler</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={row.feature} className={index !== comparisons.length - 1 ? 'border-b border-white/5' : ''}>
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.sekersoft ? (
                        <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" />
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.others ? (
                        <CheckCircle2 className="w-6 h-6 text-gray-600 mx-auto" />
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section - Fiyatlandırma */}
      <section id="pricing" className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Şeffaf <span className="gradient-text">Fiyatlandırma</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tek seferlik kurulum bedeli <span className="text-white font-semibold">32.000 TL + KDV</span>.
            2. yıldan itibaren yıllık <span className="text-white font-semibold">8.000 TL + KDV</span> bakım ve güncelleme paketi.
            Abonelik yok, tüm verileriniz bilgisayarınızda güvende.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass rounded-3xl p-8 ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-2xl shadow-blue-500/20 lg:col-span-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Tek Paket
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <p className="text-5xl font-bold gradient-text">{plan.price}</p>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">{plan.priceSuffix}</p>
                    <p className="text-xs text-gray-500">{plan.priceNote}</p>
                  </div>
                </div>
              </div>

              <Link
                to={plan.ctaLink}
                className={`block w-full py-3 rounded-xl text-center font-semibold transition-all hover:scale-105 mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'glass glass-hover'
                }`}
              >
                {plan.cta}
              </Link>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature.text} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Bakım Paketi Bilgisi */}
              {plan.maintenance && (
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-baseline gap-3 mb-4">
                    <p className="text-3xl font-bold gradient-text">{plan.maintenance.price}</p>
                    <div className="text-left">
                      <p className="text-sm text-gray-400">{plan.priceSuffix}</p>
                      <p className="text-xs text-gray-500">{plan.maintenance.period} · {plan.maintenance.description}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{plan.maintenance.description}</p>
                  <div className="space-y-2">
                    {plan.maintenance.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Story */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Gerçek <span className="gradient-text">Başarı Hikayesi</span>
              </h2>
              <p className="text-gray-400 mb-6 italic">
                &quot;3 aracım var. Önceden hangi araçla hangi işi yapsam diye düşünürdüm ama tam bilmiyordum. 
                Sekersoft ile her aracın maliyetini girdim. Şimdi hangi araç ne kadar karlı hemen görüyorum. 
                Artık en karlı atamayı yapabiliyorum. Aylık kazancım %20 arttı.&quot;
              </p>
              <div className="mb-6">
                <p className="font-semibold text-lg">Mehmet Bey</p>
                <p className="text-gray-400">Nakliye İşletmesi Sahibi - Bursa</p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="glass rounded-xl px-4 py-2">
                  <p className="text-2xl font-bold text-green-400">%20</p>
                  <p className="text-xs text-gray-400">Kar Artışı</p>
                </div>
                <div className="glass rounded-xl px-4 py-2">
                  <p className="text-2xl font-bold text-blue-400">2 saat</p>
                  <p className="text-xs text-gray-400">Günlük Zaman Tasarrufu</p>
                </div>
                <div className="glass rounded-xl px-4 py-2">
                  <p className="text-2xl font-bold text-cyan-400">3 Araç</p>
                  <p className="text-xs text-gray-400">Yönetilen Filo</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={screenshotPaths.activeVehicles}
                  alt="Sekersoft başarı ekranı"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Müşterilerimiz <span className="gradient-text">Ne Diyor?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sekersoft Lojistik kullanan işletmelerin deneyimlerini keşfedin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 glass-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Features */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Teknik <span className="gradient-text">Özellikler</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-2xl p-6 glass-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="max-w-7xl mx-auto mb-20">
        {submitted && status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-3xl p-12 text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Talebiniz Alındı!</h2>
            <p className="text-gray-400 mb-8">
              Demo talebiniz başarıyla alındı. {siteConfig.name} ekibi genellikle 24 saat içerisinde sizinle iletişime geçer ve uzaktan kurulum randevunuzu planlar.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-xl glass glass-hover font-semibold transition-all hover:scale-105"
            >
              Yeni Talep Gönder
            </button>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Demo <span className="gradient-text">Talep Edin</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                14 gün boyunca tüm özellikleri sınırsız test edin. Uzaktan kurulum desteği ve canlı onboarding görüşmesi dahil. Formu doldurun, 24 saat içinde randevunuzu oluşturalım.
              </p>
              <div className="mt-8 grid md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
                {['14 Gün Full Sürüm', 'Uzaktan Kurulum & Eğitim', 'WhatsApp Destek + Video Kılavuz'].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-4 flex items-center gap-3 justify-center md:justify-start"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">İletişim Bilgileriniz</h3>
                <form onSubmit={handleDemoSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-400" />
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="Ahmet Yılmaz"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-400" />
                      E-posta *
                    </label>
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

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-400" />
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="0555 123 45 67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      Şirket Adı
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="Şirket Adınız"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Download className="w-4 h-4 text-blue-400" />
                      Araç Sayısı
                    </label>
                    <select
                      name="vehicleCount"
                      value={formData.vehicleCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
                    >
                      <option value="">Seçiniz</option>
                      <option value="1">1 Araç</option>
                      <option value="2-5">2-5 Araç</option>
                      <option value="6-10">6-10 Araç</option>
                      <option value="10+">10+ Araç</option>
                    </select>
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="demoWebsite">Web siteniz</label>
                    <input
                      id="demoWebsite"
                      type="text"
                      name="demoWebsite"
                      autoComplete="off"
                      tabIndex={-1}
                      value={botField}
                      onChange={(event) => setBotField(event.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Mesajınız (İsteğe bağlı)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500 focus:outline-none transition-all resize-none"
                      placeholder="Özel talepleriniz veya sorularınız varsa buraya yazabilirsiniz..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <Send className="w-5 h-5" />
                    {status === 'loading' ? 'Gönderiliyor...' : 'Sekersoft Lojistik'}
                  </button>

                  <p className="text-sm text-gray-400 text-center">* Zorunlu alanlar. Bilgileriniz gizli tutulacaktır.</p>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                      {errorMessage || 'Talebiniz gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.'}
                    </p>
                  )}
                </form>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="glass rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Demo&apos;da Neler Var?</h3>
                  <ul className="space-y-4">
                    {demoFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-4">Demo Süreci</h3>
                  <div className="space-y-4">
                    {[
                      { step: 1, title: 'Formu Doldurun', text: 'İletişim bilgilerinizi ve ihtiyaçlarınızı iletin' },
                      { step: 2, title: 'Geri Dönüş', text: '24 saat içinde size ulaşıp randevunuzu planlıyoruz' },
                      { step: 3, title: 'Kurulum', text: 'Uzaktan bağlantı ile yazılımı bilgisayarınıza kuruyoruz' },
                      { step: 4, title: 'Test Süreci', text: 'Gerçek verilerinizle tüm özellikleri deneyin' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-400 font-semibold">{item.step}</span>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">{item.title}</p>
                          <p className="text-sm text-gray-400">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-3xl p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <h3 className="text-xl font-bold mb-4">Sıkça Sorulan Sorular</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-1 text-blue-400">Demo ne kadar sürer?</p>
                      <p className="text-sm text-gray-400">Demo süresini birlikte belirleriz. Genellikle 7-14 gün arası test süresi sunuyoruz.</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-blue-400">Demo ücretli mi?</p>
                      <p className="text-sm text-gray-400">Hayır. Demo tamamen ücretsizdir ve hiçbir ödeme talep edilmez.</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-blue-400">Kendi verilerimle test edebilir miyim?</p>
                      <p className="text-sm text-gray-400">Evet. Kendi sipariş verilerinizi içeri aktarabilir ve gerçek senaryoları test edebilirsiniz.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </section>

      {/* Resources Section */}
      <section id="resources" className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kaynaklar ve <span className="gradient-text">Dokümantasyon</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sekersoft&apos;u etkili kullanmanız için gereken tüm kaynaklar. Kılavuzlar, 
            video eğitimler ve indirilebilir dosyalar.
          </p>
        </motion.div>

        {/* Resources Categories */}
        <div className="space-y-12 mb-20">
          {resourceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, index) => (
                  <motion.a
                    key={resource.title}
                    href={resource.link}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    className="glass rounded-2xl p-6 glass-hover group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="px-3 py-1 rounded-lg glass text-xs font-semibold text-blue-400">
                        {resource.type}
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{resource.title}</h4>
                    <p className="text-sm text-gray-400 mb-3">{resource.description}</p>
                    {(resource as any).duration && (
                      <p className="text-xs text-gray-500">Süre: {(resource as any).duration}</p>
                    )}
                    {(resource as any).size && (
                      <p className="text-xs text-gray-500">Boyut: {(resource as any).size}</p>
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resources CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Daha Fazla Yardıma İhtiyacınız Var mı?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Dokümantasyonda bulamadığınız bir şey mi var? Destek ekibimiz size yardımcı olmaya hazır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/support"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-2xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105"
              >
                Destek Al
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl glass glass-hover font-semibold transition-all hover:scale-105"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto">
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
              Lojistik İşletmenizi Dijitalleştirin
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Offline masaüstü uygulama. Tüm verileriniz güvende. Tek seferlik lisans - aylık ödeme yok.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Sekersoft Lojistik
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-all hover:scale-105"
              >
                Bilgi Alın
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Logistics

