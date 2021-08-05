import React, { useContext, useMemo } from 'react'

import { Layout } from '../components'
import { HomeView, AboutView, SkillsView, ProjectView, ContactView, PortfolioView } from '../views'
import { RouterHistoryContext } from '../contexts'
import { useIntersectionObserver } from '../hooks'

const Home: React.FC = () => {
  const history = useContext(RouterHistoryContext)

  const options = useMemo(() => ({
    rootMargin: '-20% 0px -60% 0px'
  }), [])

  const { observeRef } = useIntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id !== null) history.replace({ hash: `#${entry.target.id}` })
    }
  }), options)

  return (
    <Layout>
      {useMemo(() =>
        [HomeView, AboutView, SkillsView, PortfolioView, ProjectView, ContactView]
          .map((View, key) => {
            return <View key={key} ref={observeRef} content={{}} />
          })
      , [observeRef])}
    </Layout>
  )
}

export default Home
