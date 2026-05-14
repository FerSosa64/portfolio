import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Copy, Lang } from '../i18n/copy.types.ts'
import { copyEn } from '../i18n/copy_en.ts'
import { copyEs } from '../i18n/copy_es.ts'

const copy: Record<Lang, Copy> = {
  en: copyEn,
  es: copyEs,
}

export type Theme = 'dark' | 'light'

type PortfolioPreferencesValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  theme: Theme
  setTheme: (theme: Theme) => void
  t: (typeof copy)[Lang]
}

const STORAGE_LANG = 'portfolio-lang'
const STORAGE_THEME = 'portfolio-theme'

const PortfolioPreferencesContext =
  createContext<PortfolioPreferencesValue | null>(null)

function readStoredLang(): Lang {
  const raw = localStorage.getItem(STORAGE_LANG)
  return raw === 'es' ? 'es' : 'en'
}

function readStoredTheme(): Theme {
  const raw = localStorage.getItem(STORAGE_THEME)
  return raw === 'light' ? 'light' : 'dark'
}

export function PortfolioPreferencesProvider({
  children,
}: {
  children: ReactNode
}) {
  const [lang, setLangState] = useState<Lang>(() => readStoredLang())
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme())

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    localStorage.setItem(STORAGE_LANG, next)
    document.documentElement.lang = next === 'es' ? 'es' : 'en'
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    localStorage.setItem(STORAGE_THEME, next)
    document.documentElement.dataset.theme = next
    document.documentElement.style.colorScheme = next
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es' : 'en'
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }, [lang, theme])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      theme,
      setTheme,
      t: copy[lang],
    }),
    [lang, setLang, theme, setTheme],
  )

  return (
    <PortfolioPreferencesContext.Provider value={value}>
      {children}
    </PortfolioPreferencesContext.Provider>
  )
}

export function usePortfolioPreferences() {
  const ctx = useContext(PortfolioPreferencesContext)
  if (!ctx) {
    throw new Error(
      'usePortfolioPreferences must be used within PortfolioPreferencesProvider',
    )
  }
  return ctx
}
