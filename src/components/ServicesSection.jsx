import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../images/design.svg';
import intelligence from '../images/intelligence.svg';
import gamedev from '../images/game-dev.svg';

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title="Services" span="Services" />
        <div className="services">
          <ServiceCard
            image={design}
            title="Web Design"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis iure culpa, ducimus corporis non exercitationem
              officiis nihil deserunt quaerat!"
          />
        </div>
        <div className="services">
          <ServiceCard
            image={intelligence}
            title="Artificial Intelligence"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis iure culpa, ducimus corporis non exercitationem
              officiis nihil deserunt quaerat!"
          />
        </div>
        <div className="services">
          <ServiceCard
            image={gamedev}
            title="Game Development"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis iure culpa, ducimus corporis non exercitationem
              officiis nihil deserunt quaerat!"
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section``;

export default ServicesSection;
