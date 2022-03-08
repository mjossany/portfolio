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
  overflow: hidden;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
        transform: translateY(-100px);
        transition: all .4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
        display: flex;
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
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .4s ease-in-out;
          opacity: 1;
          li {
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
