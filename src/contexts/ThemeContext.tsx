/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeAppearance = 'light' | 'dark' | 'inherit'
type AccentColor = 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'brown' | 'orange' | 'sky' | 'mint' | 'lime' | 'yellow' | 'amber' | 'gold' | 'bronze' | 'gray'

interface ThemeContextType {
  appearance: ThemeAppearance
  accentColor: AccentColor
  setAppearance: (appearance: ThemeAppearance) => void
  setAccentColor: (accentColor: AccentColor) => void
  toggleAppearance: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [appearance, setAppearance] = useState<ThemeAppearance>(() => {
    const stored = localStorage.getItem('appearance')
    return (stored as ThemeAppearance) || 'inherit'
  })

  const [accentColor, setAccentColor] = useState<AccentColor>(() => {
    const stored = localStorage.getItem('accentColor')
    return (stored as AccentColor) || 'blue'
  })

  useEffect(() => {
    localStorage.setItem('appearance', appearance)
  }, [appearance])

  useEffect(() => {
    localStorage.setItem('accentColor', accentColor)
  }, [accentColor])

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
    <ThemeContext.Provider value={{ appearance, accentColor, setAppearance, setAccentColor, toggleAppearance }}>
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
