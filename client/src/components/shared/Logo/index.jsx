import React from 'react';

import {Link} from 'react-router-dom';

import logo from './logo.png';
import Styles from './styles';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <Styles.Img className="mt-3" src={logo} alt='logo' />
      </Link>
    </div>
  );
}

export default Logo;