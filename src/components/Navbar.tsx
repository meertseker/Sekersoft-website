import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'
import { siteConfig } from '../config/site'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { 
      name: 'Ürünler', 
      path: '/products',
      submenu: [
        { name: 'Sekersoft Lojistik', path: '/products/logistics' },
      ]
    },
    { name: 'Çözümler', path: '/solutions' },
    { name: 'Hakkımızda', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'İletişim', path: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'glass-liquid-strong shadow-2xl shadow-black/20 border-white/[0.07]'
          : 'bg-transparent border-transparent shadow-none backdrop-blur-0'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label={`${siteConfig.name} ana sayfa`}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt={`${siteConfig.name} logosu`}
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold gradient-text transition-all">{siteConfig.shortName}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={cn(
                    'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300',
                    location.pathname === link.path 
                      ? 'text-white glass-liquid' 
                      : 'text-gray-300 hover:text-white hover:glass-liquid'
                  )}
                >
                  <span className="flex items-center gap-1">
                    {link.name}
                    {link.submenu && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
                  </span>
                </Link>

                {/* Dropdown Menu */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                    <div className="glass-liquid-strong rounded-xl shadow-2xl shadow-black/40 p-2 border border-white/10">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:glass-liquid rounded-lg transition-all"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/products/logistics#demo"
              className="px-5 py-2 rounded-xl glass-liquid text-sm font-medium transition-all hover:scale-105 hover:glass-liquid-strong"
            >
              Sekersoft Lojistik
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-105"
            >
              İletişime Geç
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl glass-liquid transition-all hover:scale-105 hover:glass-liquid-strong"
            aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden glass-liquid-strong border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block px-4 py-2.5 rounded-xl text-sm font-medium transition-all',
                      location.pathname === link.path
                        ? 'text-white glass-liquid'
                        : 'text-gray-300 hover:text-white hover:glass-liquid'
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:glass-liquid rounded-xl transition-all"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  to="/products/logistics#demo"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-3 rounded-xl glass-liquid text-sm font-medium text-center transition-all hover:glass-liquid-strong"
                >
                  Sekersoft Lojistik
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold text-center transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

