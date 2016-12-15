import React, {Component} from 'react'
import {Link} from 'react-router'

import Modal from './Modal'

import CLUSTERS from '../../data'

export default class ModalContainer extends Component {
  render() {
    const clusterId = parseInt(this.props.params.clusterId);
    const shortcutId = parseInt(this.props.params.shortcutId);
    let shortcut = CLUSTERS[clusterId].shortcuts[shortcutId];

    return (
      <div className='modal__container'>
        <Modal data={shortcut}/>
        <Link to='/'><div className='return'></div></Link>
      </div>
    )
  }
}
