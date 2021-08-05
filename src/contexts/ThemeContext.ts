import { createContext } from 'react'

export type ThemeValue = 'dark' | 'light'
export type ThemeContextValue = [ThemeValue, React.Dispatch<React.SetStateAction<ThemeValue>>]

const ThemeContext = createContext<ThemeContextValue>(undefined as any)
// isDark: window.matchMedia('(prefers-color-scheme: dark)').matches

export default ThemeContext
