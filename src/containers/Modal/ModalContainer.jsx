import React, {Component} from 'react'
import {Link} from 'react-router'

import Modal from './Modal'

import CLUSTERS from '../../data'

export default class ModalContainer extends Component {
  render() {
    const clusterId = this.props.params.clusterId
    const shortcutId = this.props.params.shortcutId

    let shortcut = () => {
      for (var i = 0; i < CLUSTERS.length; i++) {
        if (CLUSTERS[i].id.toString() === clusterId) {
          for (var j = 0; j < CLUSTERS[i].shortcuts.length; j++) {
            if (CLUSTERS[i].shortcuts[j].id.toString() === shortcutId) {
              return CLUSTERS[i].shortcuts[j]
            }
          }
        }
      }
    }

    return (
      <div className='modal__container'>
        <Modal data={shortcut()}/>
        <Link to='/'><div className='return'></div></Link>
      </div>
    )
  }
}
