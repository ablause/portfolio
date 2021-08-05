import React from 'react'

import { Route } from './components'
import { RouterProvider, ThemeProvider } from './contexts/providers'
import HomePage from './pages/Home'

const App: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider initialMode='light'> {/* window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' */}
      <RouterProvider initialRoute='/'>
        <Route path='/' component={HomePage} />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
)

export default App
