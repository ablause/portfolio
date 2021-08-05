import React, { useLayoutEffect, useState } from 'react'
import ThemeContext, { ThemeValue } from '../ThemeContext'

export interface ThemeProviderProps { initialMode?: ThemeValue };

const browserValue = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const ThemeProvider: React.FC<ThemeProviderProps> = ({ initialMode, children }) => {
  const [theme, setTheme] = useState<ThemeValue>((localStorage.getItem('theme') as ThemeValue) ?? initialMode ?? browserValue)

  useLayoutEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
