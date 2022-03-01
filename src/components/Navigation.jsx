import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationStyled from './Navigation.elements';
import avatar from '../images/avatar.jpg';

//oi

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2022 My Portfolio</p>
      </footer>
    </NavigationStyled>
  );
}

export default Navigation;
