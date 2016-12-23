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
        <div className='row row--center row--full-height'>
          <div className='col col--sm-5 left__container'>
            <div className='left__inner'>
              <Keys keys={this.props.data.keys}/>
              <span className='command'>{this.props.data.desc}</span>
            </div>
          </div>
          <div className='col col--sm-7 right__container'>
            <div className='right__inner'>
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
