import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  opacity: 1;
  z-index: 99;
  transition: all .4s ease-in-out;
  transform: translateX(0);
  @media (max-width: 1200px) {
    transform: translateX(-100%);
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
`;

export const NavAvatarContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  text-align: center;
  padding: 1rem 0;
`;

export const NavAvatar = styled.img`
  width: 100%;
`;

export const NavItems = styled.ul`
  width: 100%;
  text-align: center;
  .active {
    background-color: var(--primary-color);
  }
`;

export const NavItem = styled.li`
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
      color: var(--white-color);
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
      z-index: 1;
    }
  }
  a:hover::before {
    width: 100%;
    height: 100%;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid var(--border-color);
  width: 100%;
`;

export const FooterText = styled.p`
  padding: 2rem 0;
  font-size: 1.1rem;
  display: block;
  text-align: center;
`;
