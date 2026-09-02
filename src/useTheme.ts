import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'
const KEY = 'kt-theme'

function stored(): Theme | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'light' || v === 'dark' ? v : null
  } catch {
    return null
  }
}

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Tema com três estados: sem escolha explícita a página segue o sistema
 * (nenhum data-theme no <html>). O toggle grava a escolha e passa a mandar.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(stored)

  useEffect(() => {
    const root = document.documentElement
    if (theme) root.dataset.theme = theme
    else delete root.dataset.theme
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = (current ?? systemTheme()) === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(KEY, next)
      } catch {
        /* modo privado, sessão sem storage: o tema vale só nesta visita */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
