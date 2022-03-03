import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import particlesConfig from '../helpers/particlesConfig';

function HomePage() {
  return (
    <HomeStyled>
      <Particles params={particlesConfig} />
      <div className="typography">
        <h1>
          {'Hi, I\'m '}
          <span>Jossany</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Commodi a vitae earum molestias voluptas minus magnam totam mollitia fuga numquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          A similique doloribus maxime minima, quia quasi voluptatem beatae!
          Velit, est cumque?
        </p>
        <div className="icons">
          <a href="https://codepen.io/pen/" className="icon i-facebook">
            <FacebookIcon />
          </a>
          <a href="https://codepen.io/pen/" className="icon i-github">
            <GitHubIcon />
          </a>
          <a href="https://codepen.io/pen/" className="icon i-youtube">
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  #tsparticles {
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        border-radius: 50%;
        cursor: pointer;
        transition: all .4s ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: .5rem;
        }
      }
    }
  }
`;

export default HomePage;
