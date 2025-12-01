// Google Analytics 4 (GA4) utility functions

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/**
 * Initialize Google Analytics
 * @param measurementId - GA4 Measurement ID (e.g., 'G-XXXXXXXXXX')
 */
export const initGA = (measurementId: string) => {
  if (typeof window === 'undefined' || !measurementId) {
    return
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  const dataLayer = window.dataLayer
  window.gtag = function () {
    dataLayer.push(arguments)
  }

  // Set the measurement ID
  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    page_path: window.location.pathname,
  })

  // Load the GA script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
}

/**
 * Track page view
 * @param path - Page path (e.g., '/about')
 * @param title - Page title (optional)
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) {
    return
  }

  // Use the measurement ID from environment or default to the one in index.html
  const measurementId = getMeasurementId() || 'G-SMBMV6EV2B'

  window.gtag('config', measurementId, {
    page_path: path,
    page_title: title,
  })
}

/**
 * Track custom event
 * @param eventName - Event name (e.g., 'button_click')
 * @param eventParams - Event parameters (optional)
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window === 'undefined' || !window.gtag) {
    return
  }

  window.gtag('event', eventName, eventParams)
}

/**
 * Get measurement ID from environment variable
 */
export const getMeasurementId = (): string => {
  return import.meta.env.VITE_GA_MEASUREMENT_ID || ''
}

