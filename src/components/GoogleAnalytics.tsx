import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../lib/analytics'

/**
 * Google Analytics component that tracks page views on route changes
 * Note: GA script is loaded in index.html
 */
export default function GoogleAnalytics() {
  const location = useLocation()

  // Track page views on route change
  useEffect(() => {
    // Wait a bit to ensure gtag is loaded
    const timer = setTimeout(() => {
      trackPageView(location.pathname + location.search, document.title)
    }, 100)

    return () => clearTimeout(timer)
  }, [location])

  // Don't render anything
  return null
}

