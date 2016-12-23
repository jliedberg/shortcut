import React, {Component} from 'react'
import {Link} from 'react-router'

import Modal from '../../components/Modal/Modal'

import CLUSTERS from '../../data'

export default class ModalContainer extends Component {
  render() {
    const clusterId = parseInt(this.props.params.clusterId);
    const shortcutId = parseInt(this.props.params.shortcutId);
    let shortcut = CLUSTERS[clusterId].shortcuts[shortcutId];

    return (
      <div className='modal__container'>
        <div className='container'>
          <div className='row row--center'>
            <div className='col col--sm-12'>
              <Modal data={shortcut}/>
            </div>
          </div>
        </div>
        <Link to='/'><div className='return'></div></Link>
      </div>
    )
  }
}
