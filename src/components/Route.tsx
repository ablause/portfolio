import React, { createElement, useContext, useMemo } from 'react'
import { RouterContext } from '../contexts'

import Error from '../pages/Error'

export interface RouteProps {
  path?: string
  component: React.FC
};

const Route: React.FC<RouteProps> = ({ path, component }) => {
  const { location } = useContext(RouterContext)

  if (location.pathname === path) {
    return useMemo(() => createElement(component), [path])
  }

  return createElement(Error, { error: 404 })
}

export default Route
