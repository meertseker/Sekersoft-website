export type ConsentCategory = 'analytics' | 'marketing'

export interface ConsentState {
  analytics: boolean
  marketing: boolean
  updatedAt: string
}

const STORAGE_KEY = 'sekersoft_consent_v1'
const CHANGE_EVENT = 'sekersoft_consent_changed'

const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined'

export const getConsent = (): ConsentState | null => {
  if (!isBrowser()) return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<ConsentState>
    if (typeof parsed.analytics !== 'boolean' || typeof parsed.marketing !== 'boolean') return null
    return {
      analytics: parsed.analytics,
      marketing: parsed.marketing,
      updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : new Date().toISOString(),
    }
  } catch {
    return null
  }
}

export const setConsent = (next: Pick<ConsentState, 'analytics' | 'marketing'>) => {
  if (!isBrowser()) return
  const value: ConsentState = { ...next, updatedAt: new Date().toISOString() }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: value }))
}

export const clearConsent = () => {
  if (!isBrowser()) return
  window.localStorage.removeItem(STORAGE_KEY)
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: null }))
}

export const onConsentChange = (handler: (consent: ConsentState | null) => void) => {
  if (!isBrowser()) return () => {}
  const listener = (event: Event) => {
    const custom = event as CustomEvent
    handler((custom.detail as ConsentState | null) ?? getConsent())
  }
  window.addEventListener(CHANGE_EVENT, listener)
  return () => window.removeEventListener(CHANGE_EVENT, listener)
}

