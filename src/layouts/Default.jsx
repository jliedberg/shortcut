import React, {PropTypes, Component} from 'react'
import ReactDOM from 'react-dom/server'
import serialize from 'serialize-javascript'
import gtmParts from 'react-google-tag-manager';
import { webpackHost, webpackPort } from '../../config/env'

export default class Default extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node
  }

  render() {
    const gtm = gtmParts({
      id: 'GTM-K4MC6DC',
      dataLayerName: this.props.dataLayerName || 'dataLayer'
    });
    const { assets, component } = this.props
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
          { Object.keys(assets.styles).length === 0 ? <style dangerouslySetInnerHTML={{__html: require('../styles/main.scss')._style}}/> : null }
        </head>
        <body>
          <div>{gtm.noScriptAsReact()}</div>
          <div>{gtm.scriptAsReact()}</div>
          <div id='root' dangerouslySetInnerHTML={{ __html: content }} />
          <script src={assets.javascript.main} charSet='UTF-8'/>
        </body>
      </html>
    )
  }
}

Default.propTypes = {
  assets: React.PropTypes.object,
  component: React.PropTypes.node
}
