import React, {Component} from 'react'
import {Link} from 'react-router'

import Modal from './Modal'

import CLUSTERS from '../../data'

export default class ModalContainer extends Component {
  render() {
    const cluster = CLUSTERS.filter(cluster => {
      return cluster.url === this.props.params.clusterUrl;
    })[0];
    const shortcut = cluster.shortcuts.filter(shortcut => {
      return shortcut.url === this.props.params.shortcutUrl;
    })[0];

    return <Modal shortcut={shortcut}/>;
  }
}
