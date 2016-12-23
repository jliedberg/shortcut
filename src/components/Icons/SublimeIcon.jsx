import React from 'react';

export default class SublimeIcon extends React.Component {
  render() {
    return (
      <svg className={this.props.className} width="1024px" height="1024px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>Sublime Icon</title>
          <desc>Sublime text</desc>
          <defs>
            <linearGradient x1="50%" y1="0%" x2="100%" y2="95.7225975%" id="linearGradient-1">
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
            <g id="1024">
              <g id="Group">
                <mask id="mask-4" fill="white">
                  <use xlinkHref="#path-2"></use>
                </mask>
                <g id="Rectangle" strokeOpacity="0.15" stroke="#000000" mask="url(#mask-3)" strokeWidth="2" fill="url(#linearGradient-1)">
                  <use mask="url(#mask-5)" xlinkHref="#path-2"></use>
                </g>
                <text id="s" mask="url(#mask-4)" fontFamily="Dosis-SemiBold, Dosis" fontSize="910" fontWeight="500" letterSpacing="-7.31568575" fill="#FF9000">
                  <tspan x="331.837843" y="727">s</tspan>
                </text>
              </g>
            </g>
          </g>
      </svg>
    )
  }
}
