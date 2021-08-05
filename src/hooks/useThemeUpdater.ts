import { useContext } from 'react'

import { ThemeContext } from '../contexts'

interface useThemeUpdaterResult {
  toggle: () => void
  isDark: boolean
}

const useThemeUpdater = (): useThemeUpdaterResult => {
  const [theme, setTheme] = useContext(ThemeContext)

  const toggle = (): void => setTheme(theme === 'dark' ? 'light' : 'dark')

  return { toggle, isDark: theme === 'dark' }
}

export default useThemeUpdater
