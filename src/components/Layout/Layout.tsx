import React, { Suspense } from 'react'

import Navbar from '../Navbar'
import Footer from '../Footer'
import styles from './Layout.module.css'

export interface LayoutProps {
  title?: string
  description?: string
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Suspense fallback={<div>chargement...</div>}>
          {children}
        </Suspense>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
