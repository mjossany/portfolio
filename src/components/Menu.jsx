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

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      h6 {
        font-size: 1.5rem;
      }
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        display: none;
      }
    }
  }
`;

Menu.propTypes = {
  menuItem: arrayOf().isRequired,
};

export default Menu;
