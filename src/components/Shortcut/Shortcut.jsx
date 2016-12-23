import React, {Component} from 'react'
import {Link} from 'react-router'

import Keys from '../Keys';
import VideoIcon from '../../components/Icons/VideoIcon';

export default class Shortcut extends Component {
  render() {
    return (
      <li className='shortcut'>
        <Link to={`/${this.props.cluster.id}/${this.props.shortcut.id}`} className="cluster__shortcut">
          <Keys keys={this.props.shortcut.keys}/>
          <p className='command'>{this.props.shortcut.desc}</p>
          <VideoIcon className='video__icon'/>
        </Link>
      </li>
    )
  }
}
