/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeAppearance = 'light' | 'dark' | 'inherit'

interface ThemeContextType {
  appearance: ThemeAppearance
  setAppearance: (appearance: ThemeAppearance) => void
  toggleAppearance: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [appearance, setAppearance] = useState<ThemeAppearance>(() => {
    const stored = localStorage.getItem('appearance')
    return (stored as ThemeAppearance) || 'inherit'
  })

  useEffect(() => {
    localStorage.setItem('appearance', appearance)
  }, [appearance])

  const toggleAppearance = () => {
    setAppearance((prev) => {
      if (prev === 'inherit') {
        // If inherit, check system preference and toggle to opposite
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return systemPrefersDark ? 'light' : 'dark'
      } else if (prev === 'light') {
        return 'dark'
      } else {
        return 'light'
      }
    })
  }

  return (
    <ThemeContext.Provider value={{ appearance, setAppearance, toggleAppearance }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
