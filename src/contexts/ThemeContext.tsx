/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'sky' | 'sea' | 'forest' | 'gold' | 'pink' | 'chocolate' | 'halloween' | 'diwali' | 'valentine'
type Mode = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  mode: Mode
  setTheme: (theme: Theme) => void
  setMode: (mode: Mode) => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme')
    return (stored as Theme) || 'sky'
  })
  
  const [mode, setMode] = useState<Mode>(() => {
    const stored = localStorage.getItem('mode')
    return (stored as Mode) || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    localStorage.setItem('mode', mode)
    
    const root = document.documentElement
    
    // Remove all theme classes
    root.classList.remove('theme-sky', 'theme-sea', 'theme-forest', 'theme-gold', 'theme-pink', 'theme-chocolate', 'theme-halloween', 'theme-diwali', 'theme-valentine')
    root.classList.remove('dark', 'light')
    
    // Add current theme and mode
    root.classList.add(`theme-${theme}`)
    root.classList.add(mode)
  }, [theme, mode])

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode, toggleMode }}>
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
