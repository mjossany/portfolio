import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import avatar from '../images/avatar.jpg';

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeclassname="active">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" activeclassname="active">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2022 My Portfolio by Me</p>
      </footer>
    </NavigationStyled>
  );
}

export default Navigation;

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 100%;
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active {
      background-color: var(--primary-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: .45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all .4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          opacity: 0.21;
          transition: All 0.4s;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  .footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;
