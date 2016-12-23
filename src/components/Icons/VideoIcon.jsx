import React from 'react';

export default class VideoIcon extends React.Component {
  render() {
    return (
      <svg className={this.props.className} width="1024px" height="1024px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>Video Icon</title>
        <desc>Play button</desc>
        <defs>
          <linearGradient x1="50%" y1="0%" x2="100%" y2="100%" id="linearGradient-1">
            <stop stopColor="#000000" stopOpacity="0.25" offset="0%"></stop>
            <stop stopColor="#000000" stopOpacity="0.23" offset="100%"></stop>
          </linearGradient>
          <rect id="path-2" x="0" y="0" width="1024" height="1024" rx="512"></rect>
          <mask id="mask-3" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="1024" height="1024" fill="white">
            <use xlinkHref="#path-2"></use>
          </mask>
          <mask id="mask-5" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="1024" height="1024" fill="white">
            <use xlinkHref="#path-2"></use>
          </mask>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="1024-copy">
            <g id="Group">
              <mask id="mask-4" fill="white">
                  <use xlinkHref="#path-2"></use>
              </mask>
              <g id="Rectangle" strokeOpacity="0.15" stroke="#000000" mask="url(#mask-3)" strokeWidth="2" fill="url(#linearGradient-1)">
                  <use mask="url(#mask-5)" xlinkHref="#path-2"></use>
              </g>
              <path d="M527.225404,365.539803 C539.609198,347.245561 559.687001,347.245123 572.071092,365.539803 L765.498389,651.284673 C777.882183,669.578916 770.020085,684.40933 747.919371,684.40933 L351.377125,684.40933 C329.284706,684.40933 321.414016,669.579354 333.798107,651.284673 L527.225404,365.539803 Z" id="Triangle" fill="#FF9000" mask="url(#mask-4)" transform="translate(549.648648, 513.130717) rotate(90.000000) translate(-549.648648, -513.130717) "></path>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}
