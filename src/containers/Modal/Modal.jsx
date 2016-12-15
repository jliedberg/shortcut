import React, {Component} from 'react'

import Keys from '../Keys';

export default class Modal extends Component {
  render() {
    const videoName = this.props.data.desc.replace(/(\s|\/)/g, '-')
      .replace(/\(.*\)/g, '')
      .replace(/(^\-+|\-+$)/, '')
      .toLowerCase();
    return (
      <div className='modal'>
        <h1><Keys keys={this.props.data.keys}/></h1>
        <h3>{this.props.data.desc}</h3>
        <video autoPlay loop>
          <source src={`/videos/${videoName}.mp4`} type="video/mp4"/>
        </video>
      </div>
    );
  }
}
