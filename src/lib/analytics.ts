import type { ConsentState } from './consent'

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
    _fbq?: (...args: any[]) => void
  }
}

const loaded = new Set<string>()

const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined'

export const pushDataLayer = (event: string, params: Record<string, unknown> = {}) => {
  if (!isBrowser()) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

export const loadGtm = (gtmId: string) => {
  if (!isBrowser()) return
  if (!gtmId) return
  if (loaded.has(`gtm:${gtmId}`)) return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`
  script.id = `gtm-${gtmId}`
  document.head.appendChild(script)

  loaded.add(`gtm:${gtmId}`)
}

export const loadGa4 = (ga4Id: string) => {
  if (!isBrowser()) return
  if (!ga4Id) return
  if (loaded.has(`ga4:${ga4Id}`)) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`
  script.id = `ga4-${ga4Id}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args: any[]) {
      window.dataLayer?.push(args as any)
    }

  window.gtag('js', new Date())
  window.gtag('config', ga4Id, { anonymize_ip: true })

  loaded.add(`ga4:${ga4Id}`)
}

export const loadMetaPixel = (pixelId: string) => {
  if (!isBrowser()) return
  if (!pixelId) return
  if (loaded.has(`mp:${pixelId}`)) return

  // Minimal Meta Pixel loader (no noscript fallback in SPA).
  ;(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return
    n = (f.fbq = function (...args: any[]) {
      ;(n as any).callMethod ? (n as any).callMethod(...args) : (n as any).queue.push(args)
    })
    if (!f._fbq) f._fbq = n
    ;(n as any).push = (n as any)
    ;(n as any).loaded = true
    ;(n as any).version = '2.0'
    ;(n as any).queue = []
    t = b.createElement(e)
    t.async = true
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

  window.fbq?.('init', pixelId)
  window.fbq?.('track', 'PageView')

  loaded.add(`mp:${pixelId}`)
}

export type TrackingIds = {
  gtmId?: string
  ga4Id?: string
  metaPixelId?: string
}

export const initTracking = (consent: ConsentState | null, ids: TrackingIds) => {
  if (!isBrowser()) return
  if (!consent) return

  if (consent.analytics) {
    if (ids.gtmId) loadGtm(ids.gtmId)
    else if (ids.ga4Id) loadGa4(ids.ga4Id)
  }

  if (consent.marketing) {
    // Best practice: use GTM for Pixel. Fallback to direct pixel if provided.
    if (!ids.gtmId && ids.metaPixelId) loadMetaPixel(ids.metaPixelId)
  }
}

export const trackEvent = (
  event: string,
  params: Record<string, unknown> = {},
  options: { requireConsent?: boolean } = { requireConsent: true },
) => {
  if (!isBrowser()) return

  if (options.requireConsent) {
    const raw = window.localStorage.getItem('sekersoft_consent_v1')
    if (!raw) return
    try {
      const parsed = JSON.parse(raw) as { analytics?: boolean; marketing?: boolean }
      if (!parsed?.analytics && !parsed?.marketing) return
    } catch {
      return
    }
  }

  pushDataLayer(event, params)

  // Optional direct fallbacks
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params)
  }
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', event, params)
  }
}

