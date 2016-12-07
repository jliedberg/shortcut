import React from 'react'
import { IndexRoute, Route } from 'react-router'

import {
  App,
  HomeContainer,
  NotFound,
} from './containers'

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
}
