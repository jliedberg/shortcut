import React, {Component} from 'react';
import {Link} from 'react-router';

import Keys from '../Keys';

export default class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <Link to="/" className="modal__backdrop"/>
        <div className="modal__dialog">
          <div className="modal__text">
            <Keys keys={this.props.shortcut.keys}/>
            <span className="modal__command">{this.props.shortcut.desc}</span>
          </div>
          <div className="modal__video">
            <div className="modal__video-crop">
              <video autoPlay loop>
                <source src={`/videos/${this.props.shortcut.url}.mp4`} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
