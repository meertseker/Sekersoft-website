import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center bento-card glass-liquid-strong p-6 md:p-12 space-y-4 md:space-y-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-blue-400">Hata 404</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Sayfa bulunamadı</h1>
        <p className="text-gray-400 text-base md:text-lg">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. Ana sayfaya dönerek tekrar deneyebilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Link
            to="/"
            className="px-5 md:px-6 py-2.5 md:py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-all inline-flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Ana Sayfaya Dön
          </Link>
          <Link to="/contact" className="px-5 md:px-6 py-2.5 md:py-3 rounded-xl glass-liquid hover:scale-105 transition-all inline-flex items-center justify-center gap-2 font-semibold text-sm md:text-base">
            Destek ekibine ulaş
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound

