import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  HomePageContainer, PresentationContainer, H1, Span, P, Icons, Icon,
} from './Styled';
import ParticleBackground from '../ParticleBackground/ParticleBackground';

function HomePageComponent() {
  return (
    <HomePageContainer>
      <ParticleBackground />
      <PresentationContainer>
        <H1>
          {'Hi, I\'m '}
          <Span>
            Jossany
          </Span>
        </H1>
        <P>
          I am a 27 years old brazilian development student. This is my portfolio.
          Here you can know me and my projects a little better!
          On the Contact section you can get in touch with me if you want.
          I hope you enjoy it!
        </P>
        <Icons>
          <Icon href="https://github.com/mjossany">
            <GitHubIcon />
          </Icon>
          <Icon href="https://www.linkedin.com/in/jossanymoura/">
            <LinkedInIcon />
          </Icon>
        </Icons>
      </PresentationContainer>
    </HomePageContainer>
  );
}

export default HomePageComponent;
