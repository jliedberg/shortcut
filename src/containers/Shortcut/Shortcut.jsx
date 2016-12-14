import React, {Component} from 'react'

export default class Shortcut extends Component {
  render() {
    return (
      <ul className="cluster__shortcuts">
        {this.props.data}
      </ul>
    )
  }
}
