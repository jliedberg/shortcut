import React, {Component} from 'react';
import {Link} from 'react-router';

import Keys from '../Keys';

export default class Modal extends Component {
  render() {
    const videoName = this.props.data.desc.replace(/(\s|\/)/g, '-')
      .replace(/\(.*\)/g, '')
      .replace(/(^\-+|\-+$)/, '')
      .toLowerCase();
    return (
      <div className="modal">
        <Link to="/" className="modal__backdrop"/>
        <div className="modal__dialog">
          <div className="modal__text">
            <Keys keys={this.props.data.keys}/>
            <span className="modal__command">{this.props.data.desc}</span>
          </div>
          <div className="modal__video">
            <div className="modal__video-crop">
              <video autoPlay loop>
                <source src={`/videos/${videoName}.mp4`} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
