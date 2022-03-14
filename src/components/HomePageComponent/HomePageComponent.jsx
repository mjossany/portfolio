import React from 'react';
import Particles from 'react-tsparticles';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  HomePageContainer, PresentationContainer, H1, Span, P, Icons, Icon,
} from './Styled';
import particlesConfig from '../../helpers/particlesConfig';

function HomePageComponent() {
  return (
    <HomePageContainer>
      <Particles params={particlesConfig} />
      <PresentationContainer>
        <H1>
          {'Hi, I\'m '}
          <Span>
            Jossany
          </Span>
        </H1>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Commodi a vitae earum molestias voluptas minus magnam totam mollitia fuga numquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          A similique doloribus maxime minima, quia quasi voluptatem beatae!
          Velit, est cumque?
        </P>
        <Icons>
          <Icon>
            <FacebookIcon />
          </Icon>
          <Icon>
            <GitHubIcon />
          </Icon>
          <Icon>
            <YouTubeIcon />
          </Icon>
        </Icons>
      </PresentationContainer>
    </HomePageContainer>
  );
}

export default HomePageComponent;
