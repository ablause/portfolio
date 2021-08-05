import { createContext } from 'react'
import { Location, State, createBrowserHistory, BrowserHistory } from 'history'

const browserHistory = createBrowserHistory()

export interface RouterContextValue {
  location: Location<State>
  initialRoute?: string
  history: BrowserHistory<State>
}

const RouterContext = createContext<RouterContextValue>(undefined as any)
const RouterHistoryContext = createContext(browserHistory)

export default RouterContext
export { RouterHistoryContext, browserHistory }
