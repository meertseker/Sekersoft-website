import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X, Download, FileText } from 'lucide-react'
import FloatingContactCTA from '../components/FloatingContactCTA'

const Presentation = () => {
  const navigate = useNavigate()

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/TANITIM.pptx'
    link.download = 'SEKERSOFT-TANITIM.pptx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <FloatingContactCTA source="presentation" />
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="fixed top-8 right-8 z-50 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 shadow-2xl"
        aria-label="Kapat"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <X className="w-6 h-6 text-white" />
      </motion.button>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <img 
              src="/logo.png" 
              alt="Sekersoft Logo" 
              className="w-32 h-auto mx-auto mb-8 opacity-90 drop-shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
              SEKERSOFT
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white/90">
              Taşımacılık Yönetim Sistemi
            </h2>
            <p className="text-xl text-white/70">
              Ürün Tanıtım Sunumu
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-500/20 border-2 border-blue-400 mb-6">
                <FileText className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                PowerPoint Sunumu
              </h3>
              <p className="text-white/70 mb-8">
                SEKERSOFT Lojistik Yönetim Sistemi hakkında detaylı bilgi için sunumumuzu indirin.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <motion.button
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Sunumu İndir (TANITIM.pptx)
              </motion.button>

              <div className="text-center text-sm text-white/50 mt-4">
                <p>Dosya boyutu: PowerPoint formatında</p>
                <p className="mt-1">İçerik: Ürün özellikleri, faydalar ve fiyatlandırma</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-white/60 text-sm">
              Sunumu görüntülemek için PowerPoint veya uyumlu bir uygulama gereklidir
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Presentation
