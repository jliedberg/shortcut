import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import getRoutes from './routes'

import './styles/main.scss';

const routes = getRoutes()

ReactDOM.render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
  global.document.getElementById('root')
)
