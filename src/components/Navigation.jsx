import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationStyled from './Navigation.elements';
import avatar from '../images/avatar.jpg';

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" activeClassName="active-class">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class">
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
