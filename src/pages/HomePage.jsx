import React from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";
import particlesConfig from "../helpers/particlesConfig";

const HomePage = () => {
  return(
    <HomeStyled>
      <Particles params={particlesConfig}></Particles>
    </HomeStyled>
  )
};

const HomeStyled = styled.div`
  height: 100vh;
  #tsparticles {
    height: inherit;
  }
`;

export default HomePage;