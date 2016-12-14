import React, {Component} from 'react'

export default class Modal extends Component {
  render() {
    let keys = this.props.data.keys
    let keysJoined = keys.join(' + ')
    return (
      <div className='modal'>
        <h1>{keysJoined}</h1>
        <h3>{this.props.data.desc}</h3>
      </div>
    )
  }
}
