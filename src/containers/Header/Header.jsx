import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header className='global__header'>
        <Link className='logo__link'>SublimeCuts</Link>
        <Link className='about__link'>About</Link>
      </header>
    )
  }
}
