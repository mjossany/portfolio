import React from 'react';
import Navigation from './Navigation';
import { SidebarStyled } from './Sidebar.elements';

function Sidebar() {
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  );
}

export default Sidebar;
