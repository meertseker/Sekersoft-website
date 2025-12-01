import React, { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import { Download, DownloadCloud, TrendingUp, Truck, Activity, BarChart3, DollarSign, Package, Zap } from 'lucide-react'

// Mock data for charts
const mockChartData = [
  { date: '01', value: 400 },
  { date: '02', value: 300 },
  { date: '03', value: 500 },
  { date: '04', value: 450 },
  { date: '05', value: 600 },
  { date: '06', value: 550 },
  { date: '07', value: 700 },
]

// Simple StatCard Component
const StatCard = ({ title, value, icon, color = 'blue', trend }: any) => {
  const colorStyles = {
    blue: { bg: 'rgba(10, 132, 255, 0.15)', text: '#0A84FF', border: 'rgba(10, 132, 255, 0.3)' },
    green: { bg: 'rgba(48, 209, 88, 0.15)', text: '#30D158', border: 'rgba(48, 209, 88, 0.3)' },
    purple: { bg: 'rgba(191, 90, 242, 0.15)', text: '#BF5AF2', border: 'rgba(191, 90, 242, 0.3)' },
    orange: { bg: 'rgba(255, 159, 10, 0.15)', text: '#FF9F0A', border: 'rgba(255, 159, 10, 0.3)' },
  }
  const style = colorStyles[color as keyof typeof colorStyles] || colorStyles.blue

  return (
    <div
      className="rounded-xl p-6 relative overflow-hidden"
      style={{
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${style.border}`,
      }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ backgroundColor: style.text }} />
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <p className="text-xs font-medium uppercase tracking-wider mb-1 text-gray-400">{title}</p>
            <p className="text-3xl font-bold mb-1 text-white">{value}</p>
          </div>
          <div className="p-3 rounded-xl" style={{ backgroundColor: style.bg, color: style.text }}>
            {icon}
          </div>
        </div>
        {trend && (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: trend.isPositive ? 'rgba(48, 209, 88, 0.15)' : 'rgba(255, 69, 58, 0.15)',
              color: trend.isPositive ? '#30D158' : '#FF453A'
            }}
          >
            <TrendingUp className="w-3 h-3" />
            <span>{Math.abs(trend.value).toFixed(1)}%</span>
          </div>
        )}
      </div>
    </div>
  )
}

// Simple Button Component
const Button = ({ children, variant = 'primary', size = 'md' }: any) => {
  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #0A84FF 0%, #007AFF 100%)',
      color: '#FFFFFF',
      boxShadow: '0 4px 14px 0 rgba(10, 132, 255, 0.4)',
    },
    secondary: {
      backgroundColor: 'rgba(44, 44, 46, 0.8)',
      backdropFilter: 'blur(10px)',
      color: '#FFFFFF',
      border: '1px solid rgba(84, 84, 88, 0.35)',
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.3)',
    },
    success: {
      background: 'linear-gradient(135deg, #30D158 0%, #34C759 100%)',
      color: '#FFFFFF',
      boxShadow: '0 4px 14px 0 rgba(48, 209, 88, 0.4)',
    },
  }
  const sizeStyles: { [key: string]: string } = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all ${sizeStyles[size as string] || sizeStyles.md}`}
      style={variantStyles[variant as keyof typeof variantStyles]}
    >
      {children}
    </button>
  )
}

// Simple MiniChart Component
const MiniChart = ({ data, color, height = 60 }: any) => {
  const maxValue = Math.max(...data.map((d: any) => d.value))
  const minValue = Math.min(...data.map((d: any) => d.value))
  const range = maxValue - minValue || 1

  return (
    <div style={{ height, position: 'relative' }}>
      <svg width="100%" height={height} style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <path
          d={`M ${data.map((d: any, i: number) => {
            const x = (i / (data.length - 1)) * 100
            const y = height - ((d.value - minValue) / range) * (height - 10) - 5
            return `${i === 0 ? 'M' : 'L'} ${x}% ${y}`
          }).join(' ')} L ${100}% ${height} L 0% ${height} Z`}
          fill={`url(#gradient-${color})`}
        />
        <path
          d={`M ${data.map((d: any, i: number) => {
            const x = (i / (data.length - 1)) * 100
            const y = height - ((d.value - minValue) / range) * (height - 10) - 5
            return `${i === 0 ? 'M' : 'L'} ${x}% ${y}`
          }).join(' ')}`}
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}

export default function ComponentScreenshots() {
  const [downloading, setDownloading] = useState<string | null>(null)

  const downloadComponent = async (ref: React.RefObject<HTMLDivElement | null>, name: string) => {
    if (!ref.current) return
    
    setDownloading(name)
    try {
      await new Promise(resolve => setTimeout(resolve, 300))
      
      const canvas = await html2canvas(ref.current, {
        backgroundColor: null,
        scale: 3,
        logging: false,
        useCORS: true,
        windowWidth: ref.current.offsetWidth,
        windowHeight: ref.current.offsetHeight,
      })

      const link = document.createElement('a')
      link.download = `component-${name}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Screenshot alınamadı:', error)
    } finally {
      setDownloading(null)
    }
  }

  // Refs for each component
  const statCardBlueRef = useRef<HTMLDivElement>(null)
  const statCardGreenRef = useRef<HTMLDivElement>(null)
  const statCardPurpleRef = useRef<HTMLDivElement>(null)
  const statCardOrangeRef = useRef<HTMLDivElement>(null)
  const buttonPrimaryRef = useRef<HTMLDivElement>(null)
  const buttonSecondaryRef = useRef<HTMLDivElement>(null)
  const buttonSuccessRef = useRef<HTMLDivElement>(null)
  const miniChartBlueRef = useRef<HTMLDivElement>(null)
  const miniChartGreenRef = useRef<HTMLDivElement>(null)
  const miniChartPurpleRef = useRef<HTMLDivElement>(null)
  const quickActionRef = useRef<HTMLDivElement>(null)
  const iconBadgeRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen bg-[#1C1C1E] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Component Screenshots</h1>
          <p className="text-gray-400">Küçük dekoratif component'lar için screenshot'lar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* StatCard - Blue */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">StatCard - Blue</h3>
              <button
                onClick={() => downloadComponent(statCardBlueRef, 'statcard-blue')}
                disabled={downloading === 'statcard-blue'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'statcard-blue' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={statCardBlueRef} className="w-fit">
              <StatCard
                title="Toplam Gelir"
                value="125.000 ₺"
                icon={<DollarSign className="w-6 h-6" />}
                color="blue"
                trend={{ value: 12.5, isPositive: true }}
              />
            </div>
          </div>

          {/* StatCard - Green */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">StatCard - Green</h3>
              <button
                onClick={() => downloadComponent(statCardGreenRef, 'statcard-green')}
                disabled={downloading === 'statcard-green'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'statcard-green' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={statCardGreenRef} className="w-fit">
              <StatCard
                title="Aktif Siparişler"
                value="24"
                icon={<Package className="w-6 h-6" />}
                color="green"
                trend={{ value: 8.3, isPositive: true }}
              />
            </div>
          </div>

          {/* StatCard - Purple */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">StatCard - Purple</h3>
              <button
                onClick={() => downloadComponent(statCardPurpleRef, 'statcard-purple')}
                disabled={downloading === 'statcard-purple'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'statcard-purple' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={statCardPurpleRef} className="w-fit">
              <StatCard
                title="Araçlar"
                value="12"
                icon={<Truck className="w-6 h-6" />}
                color="purple"
              />
            </div>
          </div>

          {/* StatCard - Orange */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">StatCard - Orange</h3>
              <button
                onClick={() => downloadComponent(statCardOrangeRef, 'statcard-orange')}
                disabled={downloading === 'statcard-orange'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'statcard-orange' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={statCardOrangeRef} className="w-fit">
              <StatCard
                title="Performans"
                value="98%"
                icon={<Activity className="w-6 h-6" />}
                color="orange"
                trend={{ value: 2.1, isPositive: true }}
              />
            </div>
          </div>

          {/* Button - Primary */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Button - Primary</h3>
              <button
                onClick={() => downloadComponent(buttonPrimaryRef, 'button-primary')}
                disabled={downloading === 'button-primary'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'button-primary' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={buttonPrimaryRef} className="w-fit p-4 bg-[#1C1C1E]">
              <Button variant="primary" size="md">
                Yeni Sipariş
              </Button>
            </div>
          </div>

          {/* Button - Secondary */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Button - Secondary</h3>
              <button
                onClick={() => downloadComponent(buttonSecondaryRef, 'button-secondary')}
                disabled={downloading === 'button-secondary'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'button-secondary' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={buttonSecondaryRef} className="w-fit p-4 bg-[#1C1C1E]">
              <Button variant="secondary" size="md">
                İptal
              </Button>
            </div>
          </div>

          {/* Button - Success */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Button - Success</h3>
              <button
                onClick={() => downloadComponent(buttonSuccessRef, 'button-success')}
                disabled={downloading === 'button-success'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'button-success' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={buttonSuccessRef} className="w-fit p-4 bg-[#1C1C1E]">
              <Button variant="success" size="md">
                Kaydet
              </Button>
            </div>
          </div>

          {/* MiniChart - Blue */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">MiniChart - Blue</h3>
              <button
                onClick={() => downloadComponent(miniChartBlueRef, 'minichart-blue')}
                disabled={downloading === 'minichart-blue'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'minichart-blue' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={miniChartBlueRef} className="w-48 p-4 bg-[#1C1C1E] rounded-xl">
              <MiniChart data={mockChartData} color="#0A84FF" height={60} />
            </div>
          </div>

          {/* MiniChart - Green */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">MiniChart - Green</h3>
              <button
                onClick={() => downloadComponent(miniChartGreenRef, 'minichart-green')}
                disabled={downloading === 'minichart-green'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'minichart-green' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={miniChartGreenRef} className="w-48 p-4 bg-[#1C1C1E] rounded-xl">
              <MiniChart data={mockChartData} color="#30D158" height={60} />
            </div>
          </div>

          {/* MiniChart - Purple */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">MiniChart - Purple</h3>
              <button
                onClick={() => downloadComponent(miniChartPurpleRef, 'minichart-purple')}
                disabled={downloading === 'minichart-purple'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'minichart-purple' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={miniChartPurpleRef} className="w-48 p-4 bg-[#1C1C1E] rounded-xl">
              <MiniChart data={mockChartData} color="#BF5AF2" height={60} />
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Quick Action</h3>
              <button
                onClick={() => downloadComponent(quickActionRef, 'quick-action')}
                disabled={downloading === 'quick-action'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'quick-action' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={quickActionRef} className="w-fit p-4 bg-[#1C1C1E]">
              <div className="flex flex-col items-center justify-center p-4 rounded-xl"
                style={{
                  backgroundColor: 'rgba(10, 132, 255, 0.15)',
                  border: '0.5px solid rgba(10, 132, 255, 0.4)',
                }}
              >
                <div
                  className="p-2.5 rounded-lg mb-2"
                  style={{
                    backgroundColor: 'rgba(10, 132, 255, 0.15)',
                    color: '#0A84FF',
                  }}
                >
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-center text-white">
                  Grafikler
                </span>
              </div>
            </div>
          </div>

          {/* Icon Badge */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Icon Badge</h3>
              <button
                onClick={() => downloadComponent(iconBadgeRef, 'icon-badge')}
                disabled={downloading === 'icon-badge'}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {downloading === 'icon-badge' ? '...' : <Download className="w-4 h-4" />}
              </button>
            </div>
            <div ref={iconBadgeRef} className="w-fit p-4 bg-[#1C1C1E]">
              <div className="p-3 rounded-xl"
                style={{
                  backgroundColor: 'rgba(10, 132, 255, 0.15)',
                  color: '#0A84FF',
                  boxShadow: '0 0 20px rgba(10, 132, 255, 0.15)'
                }}
              >
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={async () => {
              const components = [
                { ref: statCardBlueRef, name: 'statcard-blue' },
                { ref: statCardGreenRef, name: 'statcard-green' },
                { ref: statCardPurpleRef, name: 'statcard-purple' },
                { ref: statCardOrangeRef, name: 'statcard-orange' },
                { ref: buttonPrimaryRef, name: 'button-primary' },
                { ref: buttonSecondaryRef, name: 'button-secondary' },
                { ref: buttonSuccessRef, name: 'button-success' },
                { ref: miniChartBlueRef, name: 'minichart-blue' },
                { ref: miniChartGreenRef, name: 'minichart-green' },
                { ref: miniChartPurpleRef, name: 'minichart-purple' },
                { ref: quickActionRef, name: 'quick-action' },
                { ref: iconBadgeRef, name: 'icon-badge' },
              ]

              for (const component of components) {
                await downloadComponent(component.ref, component.name)
                await new Promise(resolve => setTimeout(resolve, 500))
              }
            }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center gap-2 mx-auto"
          >
            <DownloadCloud className="w-5 h-5" />
            Tümünü İndir
          </button>
        </div>
      </div>
    </div>
  )
}

