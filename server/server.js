import express from 'express'
import path from 'path'
import PrettyError from 'pretty-error'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { createStore, applyMiddleware } from 'redux'
import { match, RouterContext } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createMemoryHistory from 'react-router/lib/createMemoryHistory'
import { Provider } from 'react-redux'
import getRoutes from '../src/routes'
import rootReducer from '../src/reducers'
import Default from '../src/layouts/Default'
import { port, apiHost, apiPort } from '../config/env'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()

// middleware ==================================================================
app.use(cookieParser())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use('/', express.static(path.resolve(__dirname, '../public')))

app.use((req, res) => {
  if (process.env.NODE_ENV === 'development') {
    webpackIsomorphicTools.refresh()
  }

  const preloadedState = {}
  const memoryHistory = createMemoryHistory(req.originalUrl)
  const middleware = routerMiddleware(memoryHistory)
  const store = createStore(rootReducer, preloadedState, applyMiddleware(middleware))

  match({ routes: getRoutes(), location: req.originalUrl },
  (error, redirectLocation, renderProps) => {
    if (error) {
      console.error('ROUTER ERROR:', pretty.render(error))
      res.status(500).send(`
        <!doctype html>
          ${ReactDOM.renderToString(<Default assets={webpackIsomorphicTools.assets()} store={store} />)}
      `)
    }
    else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }
    else if (renderProps) {
      const component = (
        <Provider store={store} key="provider">
          <RouterContext {...renderProps} />
        </Provider>
      )

      res.status(200).send(`
        <!doctype html>
          ${ReactDOM.renderToStaticMarkup(<Default assets={webpackIsomorphicTools.assets()} component={component} store={store} />)}
      `)
    }
    else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  }
  else {
    console.info(`🎄 --> Server listening on port ${port}.`)
  }
})
