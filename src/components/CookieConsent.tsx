import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { X, Settings, Check } from 'lucide-react'
import { getConsent, onConsentChange, setConsent, type ConsentState } from '../lib/consent'
import { initTracking, pushDataLayer } from '../lib/analytics'
import { siteConfig } from '../config/site'

const defaultDraft: Pick<ConsentState, 'analytics' | 'marketing'> = { analytics: false, marketing: false }

const CookieConsent = () => {
  const [consent, setConsentState] = useState<ConsentState | null>(() => getConsent())
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState(defaultDraft)

  const shouldShowBanner = useMemo(() => consent === null && !isOpen, [consent, isOpen])

  useEffect(() => {
    return onConsentChange((next) => setConsentState(next))
  }, [])

  useEffect(() => {
    if (!consent) return
    initTracking(consent, siteConfig.analytics)
    pushDataLayer('consent_update', {
      consent_analytics: consent.analytics,
      consent_marketing: consent.marketing,
      consent_updated_at: consent.updatedAt,
    })
  }, [consent])

  const openSettings = () => {
    setDraft(consent ? { analytics: consent.analytics, marketing: consent.marketing } : defaultDraft)
    setIsOpen(true)
  }

  const acceptAll = () => {
    setConsent({ analytics: true, marketing: true })
    setIsOpen(false)
  }

  const rejectAll = () => {
    setConsent({ analytics: false, marketing: false })
    setIsOpen(false)
  }

  const saveDraft = () => {
    setConsent({ analytics: draft.analytics, marketing: draft.marketing })
    setIsOpen(false)
  }

  if (shouldShowBanner) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-[60]">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-4 sm:p-5 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-300 leading-relaxed">
                Web sitemizde deneyimi iyileştirmek ve pazarlama faaliyetlerini ölçmek için çerezler kullanıyoruz. Detaylar için{' '}
                <Link to="/cookie-policy" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Çerez Politikası
                </Link>{' '}
                ve{' '}
                <Link to="/kvkk" className="text-blue-400 hover:text-blue-300 font-semibold">
                  KVKK
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={rejectAll}
                className="px-4 py-2 rounded-xl glass glass-hover text-sm font-semibold"
              >
                Reddet
              </button>
              <button
                onClick={openSettings}
                className="px-4 py-2 rounded-xl glass glass-hover text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Ayarlar
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
              >
                Kabul Et
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={() => setIsOpen(false)} aria-hidden="true" />
      <div className="relative w-full max-w-2xl glass-strong rounded-3xl p-6 sm:p-8 border border-white/10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold">Çerez Tercihleri</h2>
            <p className="text-sm text-gray-400 mt-1">
              Analitik ve pazarlama çerezlerini seçebilir veya tümünü reddedebilirsiniz.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl glass glass-hover"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-4 border border-white/10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold">Zorunlu</p>
                <p className="text-sm text-gray-400">Sitenin çalışması için gereklidir.</p>
              </div>
              <div className="px-3 py-1 rounded-lg bg-green-500/20 text-green-300 text-sm font-semibold flex items-center gap-1">
                <Check className="w-4 h-4" />
                Açık
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-4 border border-white/10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold">Analitik</p>
                <p className="text-sm text-gray-400">Performans ölçümü ve iyileştirme.</p>
              </div>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={draft.analytics}
                  onChange={(e) => setDraft((prev) => ({ ...prev, analytics: e.target.checked }))}
                  className="rounded border-white/20 text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-300">{draft.analytics ? 'Açık' : 'Kapalı'}</span>
              </label>
            </div>
          </div>

          <div className="glass rounded-2xl p-4 border border-white/10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold">Pazarlama</p>
                <p className="text-sm text-gray-400">Reklam optimizasyonu (Meta/Google).</p>
              </div>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={draft.marketing}
                  onChange={(e) => setDraft((prev) => ({ ...prev, marketing: e.target.checked }))}
                  className="rounded border-white/20 text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-300">{draft.marketing ? 'Açık' : 'Kapalı'}</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button onClick={rejectAll} className="px-4 py-2 rounded-xl glass glass-hover font-semibold">
            Tümünü Reddet
          </button>
          <button onClick={saveDraft} className="px-4 py-2 rounded-xl glass glass-hover font-semibold">
            Seçimi Kaydet
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
          >
            Tümünü Kabul Et
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          Detaylar: <Link to="/cookie-policy" className="text-blue-400 hover:text-blue-300">Çerez Politikası</Link>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent

