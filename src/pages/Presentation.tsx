import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X, ChevronDown, DollarSign, Package, Truck, Activity, BarChart3, TrendingUp, Zap, Users, Clock, Mail, MessageSquare, PieChart, MapPin, Plus, FileText } from 'lucide-react'
import { screenshotPaths } from '../data/screenshots'

// Küçük dekoratif component'lar (kullanılmıyor, gelecekte kullanılabilir)
export const _FloatingStatCard = ({ title, value, icon, color, position, size = 'small' }: any) => {
  const colorStyles = {
    blue: { bg: 'rgba(10, 132, 255, 0.12)', text: '#0A84FF', border: 'rgba(10, 132, 255, 0.2)' },
    green: { bg: 'rgba(48, 209, 88, 0.12)', text: '#30D158', border: 'rgba(48, 209, 88, 0.2)' },
    purple: { bg: 'rgba(191, 90, 242, 0.12)', text: '#BF5AF2', border: 'rgba(191, 90, 242, 0.2)' },
    orange: { bg: 'rgba(255, 159, 10, 0.12)', text: '#FF9F0A', border: 'rgba(255, 159, 10, 0.2)' },
    cyan: { bg: 'rgba(44, 217, 197, 0.12)', text: '#2CD9C5', border: 'rgba(44, 217, 197, 0.2)' },
    pink: { bg: 'rgba(255, 90, 120, 0.12)', text: '#FF5A78', border: 'rgba(255, 90, 120, 0.2)' },
  }
  const style = colorStyles[color as keyof typeof colorStyles] || colorStyles.blue
  const cardWidth = size === 'small' ? '110px' : size === 'medium' ? '130px' : '140px'
  const padding = size === 'small' ? 'p-2' : 'p-2.5'
  const textSize = size === 'small' ? 'text-sm' : 'text-base'
  const titleSize = size === 'small' ? 'text-[9px]' : 'text-[10px]'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ 
        opacity: [0.6, 0.8, 0.6],
        scale: [0.95, 1, 0.95],
      }}
      transition={{ 
        duration: 5 + Math.random() * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2
      }}
      className="absolute pointer-events-none"
      style={{
        ...position,
        width: cardWidth,
        zIndex: 4,
      }}
    >
      <div
        className={`${padding} rounded-lg relative overflow-hidden backdrop-blur-2xl`}
        style={{
          backgroundColor: 'rgba(28, 28, 30, 0.4)',
          border: `1px solid ${style.border}`,
          boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3)`,
        }}
      >
        <div className="absolute top-0 right-0 w-12 h-12 rounded-full blur-xl opacity-15" style={{ backgroundColor: style.text }} />
        <div className="relative">
          <div className="flex items-center justify-between mb-0.5">
            <p className={`${titleSize} font-medium uppercase tracking-wider text-white/50`}>{title}</p>
            <div className="p-1 rounded-md" style={{ backgroundColor: style.bg, color: style.text }}>
              {icon}
            </div>
          </div>
          <p className={`${textSize} font-bold text-white/90`}>{value}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Küçük blur efektli icon (kullanılmıyor, gelecekte kullanılabilir)
export const _FloatingBlurIcon = ({ icon, color, position, size = 'small' }: any) => {
  const colorMap = {
    blue: { bg: 'rgba(10, 132, 255, 0.08)', text: '#0A84FF', glow: 'rgba(10, 132, 255, 0.2)' },
    green: { bg: 'rgba(48, 209, 88, 0.08)', text: '#30D158', glow: 'rgba(48, 209, 88, 0.2)' },
    purple: { bg: 'rgba(191, 90, 242, 0.08)', text: '#BF5AF2', glow: 'rgba(191, 90, 242, 0.2)' },
    orange: { bg: 'rgba(255, 159, 10, 0.08)', text: '#FF9F0A', glow: 'rgba(255, 159, 10, 0.2)' },
    cyan: { bg: 'rgba(44, 217, 197, 0.08)', text: '#2CD9C5', glow: 'rgba(44, 217, 197, 0.2)' },
    pink: { bg: 'rgba(255, 90, 120, 0.08)', text: '#FF5A78', glow: 'rgba(255, 90, 120, 0.2)' },
  }
  const style = colorMap[color as keyof typeof colorMap] || colorMap.blue
  const iconSize = size === 'small' ? 'w-4 h-4' : size === 'medium' ? 'w-5 h-5' : 'w-6 h-6'
  const padding = size === 'small' ? 'p-2' : size === 'medium' ? 'p-2.5' : 'p-3'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ 
        opacity: [0.3, 0.5, 0.3],
        scale: [0.9, 1, 0.9],
      }}
      transition={{ 
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2
      }}
      className="absolute pointer-events-none"
      style={{
        ...position,
        zIndex: 3,
      }}
    >
      <div
        className={`${padding} rounded-lg backdrop-blur-2xl`}
        style={{
          backgroundColor: style.bg,
          color: style.text,
          boxShadow: `0 0 20px ${style.glow}`,
        }}
      >
        <div className={iconSize}>
          {icon}
        </div>
      </div>
    </motion.div>
  )
}

// Çok küçük blur efektli nokta (kullanılmıyor, gelecekte kullanılabilir)
export const _FloatingBlurDot = ({ color, position }: any) => {
  const colorMap = {
    blue: 'rgba(10, 132, 255, 0.3)',
    green: 'rgba(48, 209, 88, 0.3)',
    purple: 'rgba(191, 90, 242, 0.3)',
    orange: 'rgba(255, 159, 10, 0.3)',
    cyan: 'rgba(44, 217, 197, 0.3)',
    pink: 'rgba(255, 90, 120, 0.3)',
  }
  const dotColor = colorMap[color as keyof typeof colorMap] || colorMap.blue

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.2, 0.4, 0.2],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{ 
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2
      }}
      className="absolute pointer-events-none"
      style={{
        ...position,
        zIndex: 2,
      }}
    >
      <div
        className="rounded-full backdrop-blur-xl"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: dotColor,
          boxShadow: `0 0 12px ${dotColor}`,
        }}
      />
    </motion.div>
  )
}

export const _FloatingIconBadge = ({ icon, color, position, size = 'small' }: any) => {
  const colorMap = {
    blue: { bg: 'rgba(10, 132, 255, 0.1)', text: '#0A84FF', glow: 'rgba(10, 132, 255, 0.15)' },
    green: { bg: 'rgba(48, 209, 88, 0.1)', text: '#30D158', glow: 'rgba(48, 209, 88, 0.15)' },
    purple: { bg: 'rgba(191, 90, 242, 0.1)', text: '#BF5AF2', glow: 'rgba(191, 90, 242, 0.15)' },
    orange: { bg: 'rgba(255, 159, 10, 0.1)', text: '#FF9F0A', glow: 'rgba(255, 159, 10, 0.15)' },
    cyan: { bg: 'rgba(44, 217, 197, 0.1)', text: '#2CD9C5', glow: 'rgba(44, 217, 197, 0.15)' },
    pink: { bg: 'rgba(255, 90, 120, 0.1)', text: '#FF5A78', glow: 'rgba(255, 90, 120, 0.15)' },
  }
  const style = colorMap[color as keyof typeof colorMap] || colorMap.blue
  const iconSize = size === 'small' ? 'w-4 h-4' : size === 'medium' ? 'w-5 h-5' : 'w-6 h-6'
  const padding = size === 'small' ? 'p-2' : size === 'medium' ? 'p-2.5' : 'p-3'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
      animate={{ 
        opacity: [0.5, 0.7, 0.5],
        scale: [0.9, 1, 0.9],
        rotate: [0, 5, 0],
      }}
      transition={{ 
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2
      }}
      className="absolute pointer-events-none"
      style={{
        ...position,
        zIndex: 4,
      }}
    >
      <div
        className={`${padding} rounded-lg backdrop-blur-2xl`}
        style={{
          backgroundColor: style.bg,
          color: style.text,
          boxShadow: `0 4px 20px ${style.glow}`,
        }}
      >
        <div className={iconSize}>
          {icon}
        </div>
      </div>
    </motion.div>
  )
}

// Gerçek component screenshot'larını gösteren premium card (kullanılmıyor, gelecekte kullanılabilir)
export const _ComponentScreenshot = ({ src, position, scale = 0.5, title }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ 
        opacity: [0.6, 0.85, 0.6],
        scale: [scale * 0.92, scale, scale * 0.92],
        y: 0,
      }}
      transition={{ 
        duration: 8 + Math.random() * 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 3
      }}
      className="absolute pointer-events-none origin-center"
      style={{
        ...position,
        zIndex: 4,
      }}
    >
      <div 
        className="backdrop-blur-3xl rounded-3xl overflow-hidden"
        style={{
          backgroundColor: 'rgba(28, 28, 30, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      >
        {title && (
          <div className="px-4 py-2 border-b border-white/10">
            <p className="text-xs font-semibold text-white/70">{title}</p>
          </div>
        )}
        <img 
          src={src} 
          alt={title || 'Component'}
          className="w-full h-auto"
          style={{ display: 'block' }}
        />
      </div>
    </motion.div>
  )
}

// Premium StatCard - iOS 26 style (kullanılmıyor, gelecekte kullanılabilir)
export const _PremiumStatCard = ({ title, value, icon, color, position, scale = 0.4 }: any) => {
  const colorStyles = {
    blue: { bg: 'rgba(10, 132, 255, 0.2)', text: '#0A84FF', border: 'rgba(10, 132, 255, 0.4)', glow: 'rgba(10, 132, 255, 0.3)' },
    green: { bg: 'rgba(48, 209, 88, 0.2)', text: '#30D158', border: 'rgba(48, 209, 88, 0.4)', glow: 'rgba(48, 209, 88, 0.3)' },
    purple: { bg: 'rgba(191, 90, 242, 0.2)', text: '#BF5AF2', border: 'rgba(191, 90, 242, 0.4)', glow: 'rgba(191, 90, 242, 0.3)' },
    orange: { bg: 'rgba(255, 159, 10, 0.2)', text: '#FF9F0A', border: 'rgba(255, 159, 10, 0.4)', glow: 'rgba(255, 159, 10, 0.3)' },
    cyan: { bg: 'rgba(44, 217, 197, 0.2)', text: '#2CD9C5', border: 'rgba(44, 217, 197, 0.4)', glow: 'rgba(44, 217, 197, 0.3)' },
    pink: { bg: 'rgba(255, 90, 120, 0.2)', text: '#FF5A78', border: 'rgba(255, 90, 120, 0.4)', glow: 'rgba(255, 90, 120, 0.3)' },
    yellow: { bg: 'rgba(255, 214, 10, 0.2)', text: '#FFD60A', border: 'rgba(255, 214, 10, 0.4)', glow: 'rgba(255, 214, 10, 0.3)' },
  }
  const style = colorStyles[color as keyof typeof colorStyles] || colorStyles.blue

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ 
        opacity: [0.7, 0.9, 0.7],
        scale: [scale * 0.95, scale, scale * 0.95],
        y: 0,
      }}
      transition={{ 
        duration: 7 + Math.random() * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2
      }}
      className="absolute pointer-events-none origin-center"
      style={{
        ...position,
        zIndex: 4,
        width: '320px',
      }}
    >
      <div 
        className="backdrop-blur-3xl rounded-3xl p-6 relative overflow-hidden"
        style={{
          backgroundColor: 'rgba(28, 28, 30, 0.6)',
          border: `1.5px solid ${style.border}`,
          boxShadow: `0 25px 80px rgba(0, 0, 0, 0.6), 0 0 40px ${style.glow}`,
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      >
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-30" style={{ backgroundColor: style.text }} />
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-white/60">{title}</p>
              <p className="text-4xl font-bold text-white">{value}</p>
            </div>
            <div className="p-4 rounded-2xl" style={{ backgroundColor: style.bg, color: style.text }}>
              {icon}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Gerçek component'ları render eden wrapper - ekranın etrafına yayılmış
const FloatingComponent = ({ children, position, scale = 0.35 }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      animate={{ 
        opacity: [0.7, 0.9, 0.7],
        scale: [scale * 0.95, scale, scale * 0.95],
        y: 0,
      }}
      transition={{ 
        duration: 8 + Math.random() * 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2
      }}
      className="absolute pointer-events-none origin-center"
      style={{
        ...position,
        zIndex: 4,
        transform: `scale(${scale})`,
        transformOrigin: 'center',
      }}
    >
      <div 
        className="backdrop-blur-3xl rounded-3xl overflow-hidden"
        style={{
          backgroundColor: 'rgba(28, 28, 30, 0.7)',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}

// Slide'lara eklenecek gerçek component'lar - iOS 26 konsepti, ekranın etrafına yayılmış
const DecorativeComponents = ({ slideId }: { slideId: string }) => {
  const components: React.ReactElement[] = []

  // Mock data for components
  const mockStatusData = [
    { status: 'Bekliyor', count: 15, totalValue: 150000 },
    { status: 'Yolda', count: 8, totalValue: 80000 },
    { status: 'Teslim Edildi', count: 25, totalValue: 250000 },
    { status: 'Faturalandı', count: 12, totalValue: 120000 },
  ]

  const mockVehicles = [
    { plaka: '06 AZ 201', orderCount: 25, totalEarnings: 250000, totalCosts: 200000, totalProfit: 50000 },
    { plaka: '16 RP 364', orderCount: 20, totalEarnings: 200000, totalCosts: 160000, totalProfit: 40000 },
    { plaka: '14 DL 201', orderCount: 18, totalEarnings: 180000, totalCosts: 144000, totalProfit: 36000 },
  ]

  const mockCustomers = [
    { musteri: 'ABC Lojistik', orderCount: 15, totalEarnings: 150000, totalCosts: 120000, totalProfit: 30000 },
    { musteri: 'XYZ Taşımacılık', orderCount: 12, totalEarnings: 120000, totalCosts: 96000, totalProfit: 24000 },
    { musteri: 'DEF Kargo', orderCount: 10, totalEarnings: 100000, totalCosts: 80000, totalProfit: 20000 },
  ]

  const mockOrders = [
    { id: 1, plaka: '38 DT 431', musteri: 'ABC Lojistik', nereden: 'İstanbul', nereye: 'Ankara', status: 'Yolda', created_at: new Date().toISOString() },
    { id: 2, plaka: '06 AZ 201', musteri: 'XYZ Taşımacılık', nereden: 'Ankara', nereye: 'İzmir', status: 'Bekliyor', created_at: new Date().toISOString() },
  ]

  // Basit component render fonksiyonları
  const renderStatCard = (title: string, value: string, icon: any, color: string) => (
    <div className="glass-card rounded-xl p-6 relative overflow-hidden" style={{ borderColor: `rgba(${color === 'blue' ? '10, 132, 255' : color === 'green' ? '48, 209, 88' : '191, 90, 242'}, 0.3)`, width: '280px' }}>
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ backgroundColor: color === 'blue' ? '#0A84FF' : color === 'green' ? '#30D158' : '#BF5AF2' }} />
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <p className="text-xs font-medium uppercase tracking-wider mb-1 text-white/60">{title}</p>
            <p className="text-3xl font-bold text-white">{value}</p>
          </div>
          <div className="p-3 rounded-xl" style={{ backgroundColor: `rgba(${color === 'blue' ? '10, 132, 255' : color === 'green' ? '48, 209, 88' : '191, 90, 242'}, 0.15)`, color: color === 'blue' ? '#0A84FF' : color === 'green' ? '#30D158' : '#BF5AF2' }}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  )

  const renderStatusOverview = () => (
    <div className="glass-card rounded-xl p-6" style={{ width: '400px' }}>
      <h3 className="text-lg font-semibold mb-4 text-white">Sipariş Durumu Dağılımı</h3>
      <div className="flex items-center gap-8">
        <div className="flex-1">
          <div className="w-32 h-32 rounded-full mx-auto flex items-center justify-center" style={{ background: 'conic-gradient(from 0deg, #FFD60A 0deg 108deg, #0A84FF 108deg 180deg, #30D158 180deg 270deg, #BF5AF2 270deg 360deg)' }}>
            <div className="w-24 h-24 rounded-full bg-[#1C1C1E]" />
          </div>
        </div>
        <div className="flex-1 space-y-2">
          {mockStatusData.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg" style={{ backgroundColor: 'rgba(235, 235, 245, 0.05)' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.status === 'Bekliyor' ? '#FFD60A' : item.status === 'Yolda' ? '#0A84FF' : '#30D158' }} />
                <span className="text-sm font-medium text-white">{item.status}</span>
              </div>
              <span className="text-sm font-bold text-white">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderVehiclePerformance = () => (
    <div className="glass-card rounded-xl p-6" style={{ width: '380px' }}>
      <h3 className="text-lg font-semibold mb-4 text-white">En Çok Çalışan Araçlar</h3>
      <div className="space-y-3">
        {mockVehicles.slice(0, 2).map((vehicle, i) => (
          <div key={i} className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(10, 132, 255, 0.15)' }}>
                  <Truck className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">{vehicle.plaka}</p>
                  <p className="text-xs text-white/60">{vehicle.orderCount} sipariş</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm text-green-400">{(vehicle.totalEarnings - vehicle.totalCosts).toLocaleString('tr-TR')} ₺</p>
              </div>
            </div>
            <div className="relative h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(235, 235, 245, 0.1)' }}>
              <div className="h-full rounded-full bg-blue-500" style={{ width: `${(vehicle.orderCount / 25) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderCostCalculator = () => (
    <div className="glass-card rounded-xl p-6" style={{ width: '420px' }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-lg" style={{ backgroundColor: 'rgba(10, 132, 255, 0.15)' }}>
          <BarChart3 className="w-5 h-5 text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">Masraf Hesaplama</h3>
      </div>
      <div className="space-y-3">
        <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 69, 58, 0.15)', border: '0.5px solid rgba(255, 69, 58, 0.3)' }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-white/60">Toplam Masraf</p>
          <p className="text-2xl font-bold text-white">45.250 ₺</p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-white/70">
            <span>Yakıt:</span>
            <span className="font-semibold text-white">18.500 ₺</span>
          </div>
          <div className="flex justify-between text-white/70">
            <span>Sürücü:</span>
            <span className="font-semibold text-white">12.000 ₺</span>
          </div>
          <div className="flex justify-between text-white/70">
            <span>Bakım:</span>
            <span className="font-semibold text-white">8.750 ₺</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderQuickActions = () => (
    <div className="glass-card rounded-xl p-6" style={{ width: '380px' }}>
      <h3 className="text-lg font-semibold mb-4 text-white">Hızlı Erişim</h3>
      <div className="grid grid-cols-3 gap-3">
        {[
          { title: 'Yeni Sipariş', icon: Plus, color: '#0A84FF', bg: 'rgba(10, 132, 255, 0.15)' },
          { title: 'Raporlar', icon: FileText, color: '#30D158', bg: 'rgba(48, 209, 88, 0.15)' },
          { title: 'Grafikler', icon: BarChart3, color: '#BF5AF2', bg: 'rgba(191, 90, 242, 0.15)' },
          { title: 'Mail', icon: Mail, color: '#FF9F0A', bg: 'rgba(255, 159, 10, 0.15)' },
          { title: 'Araçlar', icon: Truck, color: '#5AC8FA', bg: 'rgba(90, 200, 250, 0.15)' },
          { title: 'Siparişler', icon: Package, color: '#FFD60A', bg: 'rgba(255, 214, 10, 0.15)' },
        ].map((action, i) => (
          <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl" style={{ backgroundColor: action.bg, border: `0.5px solid ${action.color}40` }}>
            <div className="p-2 rounded-lg mb-1" style={{ backgroundColor: action.bg, color: action.color }}>
              <action.icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium text-center text-white">{action.title}</span>
          </div>
        ))}
      </div>
    </div>
  )

  const renderEarningsChart = () => (
    <div className="glass-card rounded-xl p-6" style={{ width: '400px' }}>
      <h3 className="text-lg font-semibold mb-4 text-white">Gelir Grafiği</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="text-xs text-white/60">Gelir</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <span className="text-xs text-white/60">Gider</span>
          </div>
        </div>
        <div className="h-32 flex items-end gap-2">
          {[65, 45, 80, 55, 70, 60, 75].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t" style={{ height: `${height}%`, background: 'linear-gradient(180deg, #30D158 0%, rgba(48, 209, 88, 0.3) 100%)' }} />
              <div className="text-[10px] text-white/40">{['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'][i]}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <span className="text-xs text-white/60">Toplam Gelir</span>
          <span className="text-sm font-bold text-green-400">125.000 ₺</span>
        </div>
      </div>
    </div>
  )

  // Slide'a göre component'ları seç
  const slideComponents: any[] = []

  // Her slide için çok sayıda, çeşitli component'lar - HER COMPONENT SADECE BİR KEZ
  if (slideId === 'hero') {
    slideComponents.push(
      { type: 'statcard', data: { title: 'Toplam Gelir', value: '125.000 ₺', icon: DollarSign, color: 'blue' }, position: { top: '5%', left: '3%' }, scale: 0.4 },
      { type: 'statcard', data: { title: 'Aktif Siparişler', value: '24', icon: Package, color: 'green' }, position: { top: '5%', right: '3%' }, scale: 0.4 },
      { type: 'statcard', data: { title: 'Araçlar', value: '12', icon: Truck, color: 'purple' }, position: { bottom: '10%', left: '3%' }, scale: 0.4 },
      { type: 'statcard', data: { title: 'Performans', value: '98%', icon: Activity, color: 'orange' }, position: { bottom: '10%', right: '3%' }, scale: 0.4 },
      { type: 'costcalc', data: {}, position: { top: '18%', left: '1%' }, scale: 0.38 },
      { type: 'status', data: mockStatusData, position: { top: '35%', right: '1%' }, scale: 0.38 },
      { type: 'quickactions', data: {}, position: { bottom: '30%', left: '1%' }, scale: 0.4 },
      { type: 'earnings', data: {}, position: { bottom: '20%', right: '1%' }, scale: 0.38 },
    )
  } else if (slideId === 'expense-calculator') {
    slideComponents.push(
      { type: 'costcalc', data: {}, position: { top: '6%', right: '1%' }, scale: 0.5 },
      { type: 'statcard', data: { title: 'Toplam Maliyet', value: '45.000 ₺', icon: DollarSign, color: 'cyan' }, position: { top: '6%', left: '1%' }, scale: 0.4 },
      { type: 'statcard', data: { title: 'Kar Marjı', value: '32%', icon: TrendingUp, color: 'green' }, position: { bottom: '8%', right: '1%' }, scale: 0.4 },
      { type: 'statcard', data: { title: 'Yakıt', value: '18.500 ₺', icon: Zap, color: 'orange' }, position: { top: '45%', left: '0.5%' }, scale: 0.35 },
      { type: 'status', data: mockStatusData, position: { bottom: '8%', left: '1%' }, scale: 0.42 },
      { type: 'vehicles', data: mockVehicles, position: { top: '60%', right: '0.5%' }, scale: 0.38 },
      { type: 'quickactions', data: {}, position: { bottom: '35%', left: '0.5%' }, scale: 0.35 },
    )
  } else if (slideId === 'order-management') {
    slideComponents.push(
      { type: 'upcoming', data: mockOrders, position: { top: '5%', right: '1%' }, scale: 0.52 },
      { type: 'statcard', data: { title: 'Aktif Sipariş', value: '8', icon: Package, color: 'blue' }, position: { top: '5%', left: '1%' }, scale: 0.4 },
      { type: 'statcard', data: { title: 'Bekleyen', value: '15', icon: Clock, color: 'yellow' }, position: { bottom: '6%', right: '1%' }, scale: 0.4 },
      { type: 'status', data: mockStatusData, position: { top: '45%', right: '0.5%' }, scale: 0.4 },
      { type: 'vehicles', data: mockVehicles, position: { bottom: '6%', left: '1%' }, scale: 0.45 },
      { type: 'quickactions', data: {}, position: { top: '60%', left: '0.5%' }, scale: 0.38 },
      { type: 'earnings', data: {}, position: { bottom: '30%', left: '0.5%' }, scale: 0.35 },
    )
  } else if (slideId === 'dashboard') {
    slideComponents.push(
      { type: 'status', data: mockStatusData, position: { top: '5%', left: '1%' }, scale: 0.5 },
      { type: 'vehicles', data: mockVehicles, position: { top: '5%', right: '1%' }, scale: 0.5 },
      { type: 'customers', data: mockCustomers, position: { bottom: '6%', left: '1%' }, scale: 0.48 },
      { type: 'statcard', data: { title: 'Toplam Sipariş', value: '60', icon: Package, color: 'purple' }, position: { bottom: '6%', right: '1%' }, scale: 0.4 },
      { type: 'statcard', data: { title: 'Gelir', value: '125K', icon: DollarSign, color: 'green' }, position: { top: '45%', left: '0.5%' }, scale: 0.35 },
      { type: 'costcalc', data: {}, position: { top: '60%', right: '0.5%' }, scale: 0.38 },
      { type: 'quickactions', data: {}, position: { bottom: '30%', left: '0.5%' }, scale: 0.35 },
      { type: 'earnings', data: {}, position: { bottom: '20%', right: '0.5%' }, scale: 0.35 },
    )
  } else if (slideId === 'reporting') {
    slideComponents.push(
      { type: 'customers', data: mockCustomers, position: { top: '5%', left: '1%' }, scale: 0.5 },
      { type: 'status', data: mockStatusData, position: { top: '5%', right: '1%' }, scale: 0.5 },
      { type: 'vehicles', data: mockVehicles, position: { bottom: '6%', left: '1%' }, scale: 0.48 },
      { type: 'statcard', data: { title: 'Raporlar', value: '12', icon: BarChart3, color: 'cyan' }, position: { bottom: '6%', right: '1%' }, scale: 0.4 },
      { type: 'statcard', data: { title: 'Analiz', value: '45', icon: PieChart, color: 'pink' }, position: { top: '45%', left: '0.5%' }, scale: 0.35 },
      { type: 'earnings', data: {}, position: { top: '60%', right: '0.5%' }, scale: 0.38 },
      { type: 'costcalc', data: {}, position: { bottom: '30%', left: '0.5%' }, scale: 0.35 },
      { type: 'quickactions', data: {}, position: { bottom: '20%', right: '0.5%' }, scale: 0.35 },
    )
  } else if (slideId === 'vehicles') {
    slideComponents.push(
      { type: 'vehicles', data: mockVehicles, position: { top: '5%', left: '1%' }, scale: 0.52 },
      { type: 'statcard', data: { title: 'Aktif Araç', value: '12', icon: Truck, color: 'blue' }, position: { top: '5%', right: '1%' }, scale: 0.4 },
      { type: 'statcard', data: { title: 'Performans', value: '98%', icon: Activity, color: 'green' }, position: { bottom: '6%', left: '1%' }, scale: 0.4 },
      { type: 'status', data: mockStatusData, position: { bottom: '6%', right: '1%' }, scale: 0.45 },
      { type: 'customers', data: mockCustomers, position: { top: '45%', left: '0.5%' }, scale: 0.38 },
      { type: 'earnings', data: {}, position: { top: '60%', right: '0.5%' }, scale: 0.38 },
      { type: 'quickactions', data: {}, position: { bottom: '30%', left: '0.5%' }, scale: 0.35 },
    )
  } else if (slideId === 'whatsapp' || slideId === 'mail') {
    slideComponents.push(
      { type: 'upcoming', data: mockOrders, position: { top: '5%', left: '1%' }, scale: 0.5 },
      { type: 'statcard', data: { title: 'Mesajlar', value: '24', icon: MessageSquare, color: 'green' }, position: { top: '5%', right: '1%' }, scale: 0.4 },
      { type: 'statcard', data: { title: 'E-posta', value: '18', icon: Mail, color: 'blue' }, position: { bottom: '6%', left: '1%' }, scale: 0.4 },
      { type: 'quickactions', data: {}, position: { bottom: '6%', right: '1%' }, scale: 0.42 },
      { type: 'status', data: mockStatusData, position: { top: '45%', left: '0.5%' }, scale: 0.38 },
      { type: 'earnings', data: {}, position: { top: '60%', right: '0.5%' }, scale: 0.38 },
    )
  } else {
    // Diğer slide'lar için çok çeşitli component'lar - HER COMPONENT SADECE BİR KEZ
    const allTypes = ['statcard', 'status', 'vehicles', 'customers', 'upcoming', 'costcalc', 'quickactions', 'earnings']
    const positions = [
      { top: '5%', left: '1%' },
      { top: '5%', right: '1%' },
      { bottom: '6%', left: '1%' },
      { bottom: '6%', right: '1%' },
      { top: '25%', left: '0.5%' },
      { top: '45%', right: '0.5%' },
      { bottom: '30%', left: '0.5%' },
      { bottom: '20%', right: '0.5%' },
    ]
    
    // Her component tipini sadece bir kez kullan
    const usedTypes = new Set<string>()
    
    positions.forEach((pos, i) => {
      // Kullanılmayan bir tip bul
      let type = allTypes[i % allTypes.length]
      let attempts = 0
      while (usedTypes.has(type) && attempts < allTypes.length) {
        type = allTypes[(i + attempts) % allTypes.length]
        attempts++
      }
      usedTypes.add(type)
      
      const scale = type === 'statcard' ? 0.35 : type === 'costcalc' || type === 'quickactions' || type === 'earnings' ? 0.38 : 0.45
      
      if (type === 'statcard') {
        const titles = ['Gelir', 'Sipariş', 'Araç', 'Performans', 'Maliyet', 'Kar', 'Trend', 'Rapor']
        const values = ['125K', '24', '12', '98%', '45K', '32%', '+12%', '15']
        const icons = [DollarSign, Package, Truck, Activity, DollarSign, TrendingUp, TrendingUp, BarChart3]
        const colors = ['blue', 'green', 'purple', 'orange', 'cyan', 'green', 'green', 'cyan']
        slideComponents.push({
          type: 'statcard',
          data: { 
            title: titles[i % titles.length], 
            value: values[i % values.length], 
            icon: icons[i % icons.length], 
            color: colors[i % colors.length] 
          },
          position: pos,
          scale
        })
      } else if (type === 'status') {
        slideComponents.push({ type: 'status', data: mockStatusData, position: pos, scale })
      } else if (type === 'vehicles') {
        slideComponents.push({ type: 'vehicles', data: mockVehicles, position: pos, scale })
      } else if (type === 'customers') {
        slideComponents.push({ type: 'customers', data: mockCustomers, position: pos, scale })
      } else if (type === 'upcoming') {
        slideComponents.push({ type: 'upcoming', data: mockOrders, position: pos, scale })
      } else if (type === 'costcalc') {
        slideComponents.push({ type: 'costcalc', data: {}, position: pos, scale })
      } else if (type === 'quickactions') {
        slideComponents.push({ type: 'quickactions', data: {}, position: pos, scale })
      } else if (type === 'earnings') {
        slideComponents.push({ type: 'earnings', data: {}, position: pos, scale })
      }
    })
  }

  // Component'ları render et - gerçek component render fonksiyonlarıyla
  slideComponents.forEach((comp, i) => {
    if (comp.type === 'statcard') {
      components.push(
        <FloatingComponent
          key={`stat-${i}`}
          position={comp.position}
          scale={comp.scale}
        >
          {renderStatCard(comp.data.title, comp.data.value, <comp.data.icon className="w-6 h-6" />, comp.data.color)}
        </FloatingComponent>
      )
    } else if (comp.type === 'costcalc') {
      components.push(
        <FloatingComponent
          key={`costcalc-${i}`}
          position={comp.position}
          scale={comp.scale}
        >
          {renderCostCalculator()}
        </FloatingComponent>
      )
    } else if (comp.type === 'status') {
      components.push(
        <FloatingComponent
          key={`status-${i}`}
          position={comp.position}
          scale={comp.scale}
        >
          {renderStatusOverview()}
        </FloatingComponent>
      )
    } else if (comp.type === 'vehicles') {
      components.push(
        <FloatingComponent
          key={`vehicles-${i}`}
          position={comp.position}
          scale={comp.scale}
        >
          {renderVehiclePerformance()}
        </FloatingComponent>
      )
    } else if (comp.type === 'customers') {
      // TopCustomers component'i
      components.push(
        <FloatingComponent
          key={`customers-${i}`}
          position={comp.position}
          scale={comp.scale}
        >
          <div className="glass-card rounded-xl p-6" style={{ width: '380px' }}>
            <h3 className="text-lg font-semibold mb-4 text-white">En Çok Kazandıran Müşteriler</h3>
            <div className="space-y-3">
              {mockCustomers.slice(0, 2).map((customer, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255, 215, 0, 0.15)' }}>
                        <Users className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold truncate text-white">{customer.musteri}</p>
                        <p className="text-xs text-white/60">{customer.orderCount} sipariş</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-3">
                      <p className="font-semibold text-sm text-green-400">{customer.totalEarnings.toLocaleString('tr-TR')} ₺</p>
                    </div>
                  </div>
                  <div className="relative h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(235, 235, 245, 0.1)' }}>
                    <div className="h-full rounded-full bg-yellow-400" style={{ width: `${(customer.totalEarnings / 150000) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FloatingComponent>
      )
    } else if (comp.type === 'upcoming') {
      // UpcomingDeliveries component'i
      components.push(
        <FloatingComponent
          key={`upcoming-${i}`}
          position={comp.position}
          scale={comp.scale}
        >
          <div className="glass-card rounded-xl p-6" style={{ width: '360px' }}>
            <h3 className="text-lg font-semibold mb-4 text-white">Aktif Teslimatlar</h3>
            <div className="space-y-3">
              {mockOrders.map((order, idx) => (
                <div key={idx} className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(235, 235, 245, 0.05)', border: '0.5px solid rgba(235, 235, 245, 0.1)' }}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: order.status === 'Yolda' ? 'rgba(10, 132, 255, 0.2)' : 'rgba(255, 214, 10, 0.2)' }}>
                        <Truck className="w-5 h-5" style={{ color: order.status === 'Yolda' ? '#0A84FF' : '#FFD60A' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-white">{order.plaka}</p>
                        <p className="text-xs text-white/60">{order.musteri}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: order.status === 'Yolda' ? 'rgba(10, 132, 255, 0.2)' : 'rgba(255, 214, 10, 0.2)', color: order.status === 'Yolda' ? '#0A84FF' : '#FFD60A' }}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{order.nereden} → {order.nereye}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FloatingComponent>
      )
    } else if (comp.type === 'quickactions') {
      components.push(
        <FloatingComponent
          key={`quickactions-${i}`}
          position={comp.position}
          scale={comp.scale}
        >
          {renderQuickActions()}
        </FloatingComponent>
      )
    } else if (comp.type === 'earnings') {
      components.push(
        <FloatingComponent
          key={`earnings-${i}`}
          position={comp.position}
          scale={comp.scale}
        >
          {renderEarningsChart()}
        </FloatingComponent>
      )
    }
  })

  return <>{components}</>
}

const Presentation = () => {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const slides = [
    {
      id: 'hero',
      content: (
        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <img 
              src="/logo.png" 
              alt="Sekersoft Logo" 
              className="w-20 sm:w-24 md:w-32 h-auto mx-auto mb-6 sm:mb-8 md:mb-12 opacity-90 drop-shadow-2xl"
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold mb-4 sm:mb-6 md:mb-8 leading-none tracking-tight px-2"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 50%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 80px rgba(255,255,255,0.3)'
            }}
          >
            SEKERSOFT
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Taşımacılık Yönetim<br className="hidden sm:block" /> Sistemi
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-light tracking-wide px-2"
          >
            İşinizi Dijitale Taşıyın
          </motion.p>
        </div>
      )
    },
    {
      id: 'problem',
      content: (
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 sm:mb-8 md:mb-12 text-white px-2"
          >
            Problem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed font-light px-2"
          >
            Siparişler defterde, maliyetler belirsiz.<br />
            <span className="text-white/70">Hangi iş karlı, hangisi zararlı belli değil.</span>
          </motion.p>
        </div>
      )
    },
    {
      id: 'solution',
      content: (
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 sm:mb-8 md:mb-12 text-white px-2"
          >
            Çözüm
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 leading-relaxed font-light px-2"
          >
            Tek platformda sipariş, maliyet ve gelir yönetimi.<br />
            <span className="text-white/80">Otomatik hesaplama, anında görünürlük.</span>
          </motion.p>
        </div>
      )
    },
    {
      id: 'expense-calculator',
      content: (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white px-2">Maliyet Hesaplayıcı</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light px-2">Her siparişin gerçek maliyetini otomatik hesaplar</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_25px_100px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl bg-white/5"
            >
              <img 
                src="/screenshots/components/03-create-order-card-53.png" 
                alt="Maliyet Hesaplayıcı"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-left px-2"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Otomatik Hesaplama</h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
                Yakıt, sürücü, bakım, yol giderleri ve sabit maliyetler otomatik hesaplanır. 
                Her sipariş için anında kar-zarar görünür.
              </p>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 'order-management',
      content: (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white px-2">Sipariş Yönetimi</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light px-2">Tüm siparişleriniz tek ekranda</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_25px_100px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl bg-white/5"
          >
            <img 
              src={screenshotPaths.orders} 
              alt="Sipariş Yönetimi"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      )
    },
    {
      id: 'whatsapp',
      content: (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white px-2">WhatsApp Entegrasyonu</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light px-2">Müşterilere otomatik bildirim</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-left px-2 order-2 md:order-1"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Otomatik Bildirimler</h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
                Sipariş durumu değiştiğinde müşteriye otomatik WhatsApp mesajı gönderilir. 
                Manuel gönderim ve toplu mesaj desteği.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_25px_100px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl bg-white/5 order-1 md:order-2"
            >
              <img 
                src={screenshotPaths.orderDetail} 
                alt="WhatsApp Entegrasyonu"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 'mail',
      content: (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white px-2">E-posta Sistemi</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light px-2">Profesyonel müşteri iletişimi</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_25px_100px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl bg-white/5"
            >
              <img 
                src="/screenshots/components/03-create-order-card-54.png" 
                alt="E-posta Sistemi"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-left px-2"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white">Otomatik E-posta</h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
                Sipariş onayları, durum güncellemeleri ve faturalar otomatik olarak 
                müşterilere e-posta ile gönderilir.
              </p>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 'dashboard',
      content: (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white px-2">Kontrol Paneli</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light px-2">Tüm işletmeniz tek bakışta</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_25px_100px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl bg-white/5"
          >
            <img 
              src={screenshotPaths.dashboard} 
              alt="Dashboard"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      )
    },
    {
      id: 'vehicles',
      content: (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white px-2">Araç Yönetimi</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light px-2">Her aracın maliyet profili</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_25px_100px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl bg-white/5"
          >
            <img 
              src={screenshotPaths.vehicles} 
              alt="Araç Yönetimi"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      )
    },
    {
      id: 'reporting',
      content: (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white px-2">Raporlama</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light px-2">Detaylı finansal analiz</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_25px_100px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl bg-white/5"
          >
            <img 
              src={screenshotPaths.charts} 
              alt="Raporlama"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      )
    },
    {
      id: 'benefits',
      content: (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 sm:mb-12 md:mb-16 text-white px-2"
          >
            Faydalar
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: '💰', title: '%25 Kar Artışı', desc: 'Doğru fiyatlandırma ile karlılık' },
              { icon: '⏱️', title: '2 Saat/Gün', desc: 'Zaman tasarrufu' },
              { icon: '🔒', title: 'Tamamen Offline', desc: 'Verileriniz güvende' }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="backdrop-blur-2xl bg-white/5 border border-white/20 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 hover:bg-white/10 transition-all duration-500"
                style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-5 md:mb-6">{benefit.icon}</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">{benefit.title}</h3>
                <p className="text-base sm:text-lg md:text-xl text-white/70 font-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'pricing',
      content: (
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 sm:mb-8 md:mb-12 text-white px-2"
          >
            Fiyat
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[12rem] font-extrabold mb-4 sm:mb-6 md:mb-8 leading-none px-2"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            32.000 TL
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white/60 font-light px-2"
          >
            + KDV • Tek seferlik ödeme • Abonelik yok
          </motion.p>
        </div>
      )
    },
    {
      id: 'cta',
      content: (
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 sm:mb-8 md:mb-12 text-white px-2"
          >
            Hemen Başlayın
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed font-light mb-8 sm:mb-10 md:mb-12 px-2"
          >
            14 günlük ücretsiz demo<br />
            <span className="text-white/70">Sorularınız için bizimle iletişime geçin</span>
          </motion.p>
        </div>
      )
    }
  ]

  // Modern gradient background with animated blobs
  useEffect(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.zIndex = '0'
    canvas.style.pointerEvents = 'none'
    document.body.appendChild(canvas)

    const blobs: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = []
    for (let i = 0; i < 5; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 200 + Math.random() * 300
      })
    }

    const animate = () => {
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      blobs.forEach((blob, i) => {
        blob.x += blob.vx
        blob.y += blob.vy

        if (blob.x < 0 || blob.x > canvas.width) blob.vx *= -1
        if (blob.y < 0 || blob.y > canvas.height) blob.vy *= -1

        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)
        const colors = [
          ['rgba(10,132,255,0.15)', 'rgba(48,209,88,0.1)'],
          ['rgba(123,97,255,0.15)', 'rgba(10,132,255,0.1)'],
          ['rgba(44,217,197,0.15)', 'rgba(123,97,255,0.1)']
        ]
        const [c1, c2] = colors[i % colors.length]
        gradient.addColorStop(0, c1)
        gradient.addColorStop(1, c2)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.removeChild(canvas)
    }
  }, [])

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return
      setIsScrolling(true)

      const scrollPosition = window.scrollY
      const slideHeight = window.innerHeight
      const newSlide = Math.round(scrollPosition / slideHeight)

      if (newSlide !== currentSlide && newSlide >= 0 && newSlide < slides.length) {
        setCurrentSlide(newSlide)
      }

      setTimeout(() => setIsScrolling(false), 100)
    }

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return

      if (e.deltaY > 50 && currentSlide < slides.length - 1) {
        e.preventDefault()
        scrollToSlide(currentSlide + 1)
      } else if (e.deltaY < -50 && currentSlide > 0) {
        e.preventDefault()
        scrollToSlide(currentSlide - 1)
      }
    }

    const scrollToSlide = (n: number) => {
      setIsScrolling(true)
      const slideHeight = window.innerHeight
      window.scrollTo({
        top: n * slideHeight,
        behavior: 'smooth'
      })
      setTimeout(() => setIsScrolling(false), 800)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [currentSlide, isScrolling, slides.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate(-1)
      } else if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        if (currentSlide < slides.length - 1) {
          const slideHeight = window.innerHeight
          window.scrollTo({
            top: (currentSlide + 1) * slideHeight,
            behavior: 'smooth'
          })
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (currentSlide > 0) {
          const slideHeight = window.innerHeight
          window.scrollTo({
            top: (currentSlide - 1) * slideHeight,
            behavior: 'smooth'
          })
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, navigate, slides.length])

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 opacity-40" style={{
        background: 'radial-gradient(ellipse at top, rgba(10,132,255,0.3) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(48,209,88,0.2) 0%, transparent 50%)'
      }} />

      {/* Close Button - Premium Style */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => navigate(-1)}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-full p-2 sm:p-3 md:p-4 hover:bg-white/20 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        aria-label="Kapat"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
      </motion.button>

      {/* Slide Indicator - Premium Style */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      >
        <span className="text-white font-medium text-sm sm:text-base md:text-lg">
          {currentSlide + 1} / {slides.length}
        </span>
      </motion.div>

      {/* Navigation Hints */}
      {currentSlide < slides.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-full px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/70 animate-bounce" />
        </motion.div>
      )}

      {/* Slides Container */}
      <div ref={containerRef} className="h-full overflow-y-scroll snap-y snap-mandatory">
        {slides.map((slide) => (
          <motion.section
            key={slide.id}
            className="h-screen snap-start snap-always flex items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Dekoratif component'lar */}
            <DecorativeComponents slideId={slide.id} />
            
            <div className="relative z-10 w-full">
              {slide.content}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  )
}

export default Presentation
