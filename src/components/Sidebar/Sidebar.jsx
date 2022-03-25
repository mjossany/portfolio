import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Footer,
  FooterText,
  Nav,
  NavAvatar,
  NavAvatarContainer,
  NavItem,
  NavItems,
  SidebarContainer,
} from './Styled';
import avatar from '../../images/avatar.jpg';
import { PortfolioContext } from '../../context/portfolio';

function Sidebar() {
  const {
    navToggle,
    setNavToggle,
  } = useContext(PortfolioContext);
  return (
    <SidebarContainer className={`${navToggle ? 'nav-toggle' : ''}`}>
      <Nav>
        <NavAvatarContainer>
          <NavAvatar src={avatar} alt="" />
        </NavAvatarContainer>
        <NavItems>
          <NavItem>
            <NavLink
              to="/"
              activeclassname="active"
              onClick={() => setNavToggle(false)}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/about"
              activeclassname="active"
              onClick={() => setNavToggle(false)}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/resume"
              activeclassname="active"
              onClick={() => setNavToggle(false)}
            >
              Resume
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/portfolio"
              activeclassname="active"
              onClick={() => setNavToggle(false)}
            >
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/blogs"
              activeclassname="active"
              onClick={() => setNavToggle(false)}
            >
              Blogs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/contact"
              activeclassname="active"
              onClick={() => setNavToggle(false)}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavItems>
        <Footer>
          <FooterText>
            @2022 My Portfolio by Me
          </FooterText>
        </Footer>
      </Nav>
    </SidebarContainer>
  );
}

export default Sidebar;
