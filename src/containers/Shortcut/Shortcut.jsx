import React, {Component} from 'react'
import {Link} from 'react-router'

import Keys from '../Keys';

export default class Shortcut extends Component {
  render() {
    return (
      <Link to={`/${this.props.cluster.url}/${this.props.shortcut.url}`} className="cluster__shortcut">
        <Keys keys={this.props.shortcut.keys}/> <p className="command">{this.props.shortcut.desc}</p>
      </Link>
    )
  }
}
