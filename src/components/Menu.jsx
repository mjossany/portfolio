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
        transform: translateY(-100px);
        transition: all .4s ease-in-out;
      }
      .portfolio-image {
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 4%;
          height: 0;
          width: 0;
          transition: all .4s ease-in-out;
        }
      }
      .portfolio-image:hover {
        ul {
          transform: translateY(0);
          display: block;
          position: absolute;
          left: 50%;
          top: 40%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .4s ease-in-out;
          li {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--border-color);
            width: 3rem;
            height: 3rem;
            padding: 1rem;
            border-radius: 50%;
            margin: 0 .5rem;
            transition: all .4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2rem;
          }
        }
        &::before {
          height: calc(100% - 32%);
          width: calc(100% - 4%);
          background-color: white;
          opacity: 0.9;
          transform-origin: left;
          transition: all .4s ease-in-out;
        }
      }
    }
  }
`;

Menu.propTypes = {
  menuItem: arrayOf().isRequired,
};

export default Menu;
