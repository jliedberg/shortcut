import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import getRoutes from './routes'

const initialState = window.__INITIAL_STATE__
const middleware = routerMiddleware(browserHistory)
const store = createStore(rootReducer, initialState, applyMiddleware(middleware))
const history = syncHistoryWithStore(browserHistory, store)
const routes = getRoutes(store)

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  global.document.getElementById('root')
)
