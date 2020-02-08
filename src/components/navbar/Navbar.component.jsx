import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.styles.scss';

const Navbar = () => {
  return (
    <div id="navbar">
      <Link className="logo-container" to="/">
        <img className="logo" src={require('../../_assets/img/leaves.svg')} alt="Small Human logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/">
          SHOP
        </Link>
        <Link className="option" to="/about">
          ABOUT
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
