import React from 'react'
import { IndexRoute, Route } from 'react-router'

import {
  App,
  NotFound,
  ModalContainer
} from './containers'

export default () => {
  return (
    <Route path="/" component={App}>
      <Route path=':clusterId/:shortcutId'>
        <IndexRoute component={ModalContainer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
  )
}
