import React, {Component} from 'react'

import styles from './App.scss'

export default class App extends Component {
  render() {
    return <div className={styles.app}>{this.props.children}</div>
  }
}

App.propTypes = {
  children: React.PropTypes.any
}
