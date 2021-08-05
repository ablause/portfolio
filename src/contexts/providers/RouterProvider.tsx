import React, { useState, useLayoutEffect, useMemo } from 'react'
import { State, Update, BrowserHistory } from 'history'

import RouterContext, { browserHistory as defaultBrowserHistory, RouterHistoryContext } from '../RouterContext'

export interface RouterProviderProps {
  browserHistory?: BrowserHistory<State>
  initialRoute?: string
};

const RouterProvider: React.FC<RouterProviderProps> = ({ browserHistory = defaultBrowserHistory, initialRoute = '/', children }) => {
  const [location, setLocation] = useState(browserHistory.location)

  const handleRouteChange = (update: Update<State>): void => {
    setLocation(update.location)
  }

  useLayoutEffect(() => browserHistory.listen(handleRouteChange), [browserHistory])

  const RouterHistoryContextValue = useMemo(() => browserHistory, [browserHistory])

  return (
    <RouterHistoryContext.Provider value={RouterHistoryContextValue}>
      <RouterContext.Provider value={{ location, history: browserHistory, initialRoute }}>
        {children}
      </RouterContext.Provider>
    </RouterHistoryContext.Provider>
  )
}

export default RouterProvider
