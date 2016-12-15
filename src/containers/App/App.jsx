import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Home from '../Home/Home'

export default class App extends Component {
  render() {
    const children = React.Children.map(this.props.children,
     (child, i) => React.cloneElement(child, {
       key: i
     })
    )

    return (
      <div>
        <Home/>
        <ReactCSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {children}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.any
}
