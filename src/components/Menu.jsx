import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { arrayOf } from 'prop-types';

function Menu({ menuItem }) {
  return (
    <MenuStyled>
      {
        menuItem.map((item) => (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1}>
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a href={item.link2}>
                      <PinterestIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        ))
      }
    </MenuStyled>
  );
}

const MenuStyled = styled.div``;

Menu.propTypes = {
  menuItem: arrayOf().isRequired,
};

export default Menu;
