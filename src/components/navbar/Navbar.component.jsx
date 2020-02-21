import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.styles.scss';

const Navbar = () => {
  return (
    <div id="navbar">
      <Link className="logo-container" to="/small-human/">
        <img
          className="logo"
          src={require('../../_assets/img/leaves.svg')}
          alt="Small Human logo"
        />
      </Link>
      <div className="options">
        <Link className="option" to="/small-human/">
          <span>S</span><span>H</span><span>O</span><span>P</span>
        </Link>
        <Link className="option" to="/small-human/about">
          <span>A</span><span>B</span><span>O</span><span>U</span><span>T</span>
        </Link>
      </div>

      <input type="checkbox" id="overlay-input" />
      <label htmlFor="overlay-input" id="overlay-button"><span></span></label>
        <div id="overlay">
          <ul>
            <li>
              <Link to="/small-human/">
                SHOP
              </Link>
            </li>
            <li>
              <Link className="option" to="/small-human/about">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar;
