import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initGA, trackPageView, getMeasurementId } from '../lib/analytics'
import { siteConfig } from '../config/site'

/**
 * Google Analytics component that initializes GA and tracks page views
 */
export default function GoogleAnalytics() {
  const location = useLocation()
  const measurementId = siteConfig.analytics.gaMeasurementId || getMeasurementId()

  // Initialize GA on mount
  useEffect(() => {
    if (measurementId) {
      initGA(measurementId)
    }
  }, [measurementId])

  // Track page views on route change
  useEffect(() => {
    if (measurementId) {
      trackPageView(location.pathname + location.search, document.title, measurementId)
    }
  }, [location, measurementId])

  // Don't render anything
  return null
}

