import React, {Component} from 'react'
import {Link} from 'react-router'

import Keys from '../Keys';

export default class Shortcut extends Component {
  render() {
    return (
      <li>
        <Link to={`/${this.props.cluster.id}/${this.props.shortcut.id}`} className="cluster__shortcut">
          <Keys keys={this.props.shortcut.keys}/> - {this.props.shortcut.desc}
        </Link>
      </li>
    )
  }
}
