import { useEffect, useRef, useState } from 'react'
import { getConsent, onConsentChange, type ConsentState } from '../lib/consent'
import { initTracking, trackEvent } from '../lib/analytics'
import { siteConfig } from '../config/site'

const Tracking = () => {
  const [consent, setConsent] = useState<ConsentState | null>(() => getConsent())
  const fired50 = useRef(false)
  const fired75 = useRef(false)

  useEffect(() => onConsentChange((next) => setConsent(next)), [])

  useEffect(() => {
    initTracking(consent, siteConfig.analytics)
  }, [consent])

  useEffect(() => {
    if (!consent?.analytics) return

    const handler = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY || doc.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      if (scrollHeight <= 0) return
      const pct = (scrollTop / scrollHeight) * 100

      if (!fired50.current && pct >= 50) {
        fired50.current = true
        trackEvent('scroll_depth_50', { percent: 50 })
      }
      if (!fired75.current && pct >= 75) {
        fired75.current = true
        trackEvent('scroll_depth_75', { percent: 75 })
      }
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [consent?.analytics])

  return null
}

export default Tracking

