import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom/server'
import serialize from 'serialize-javascript'
import { webpackHost, webpackPort } from '../../config/env'

export default class Default extends React.Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
  }

  render() {
    const { assets, component, store } = this.props
    const content = component ? ReactDOM.renderToString(component) : ''

    return (
      <html lang='en'>
        <head>
          <title>Shortcut</title>
          {/* production */}
          {Object.keys(assets.styles).map((style, key) =>
            <link
              href={assets.styles[style]}
              key={key} media='screen, projection'
              rel='stylesheet' type='text/css' charSet='UTF-8'
            />
          )}
          {/* development */}
          { Object.keys(assets.styles).length === 0 ? <style dangerouslySetInnerHTML={{__html: require('../styles/main.scss')._style}}/> : null }
        </head>
        <body>
          <div id='root' dangerouslySetInnerHTML={{ __html: content }} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__=${serialize(store.getState())}` }}
            charSet='UTF-8'
          />
          <script src={assets.javascript.main} charSet='UTF-8'/>
        </body>
      </html>
    )
  }
}

Default.propTypes = {
  assets: React.PropTypes.object,
  component: React.PropTypes.node,
  store: React.PropTypes.object,
}
