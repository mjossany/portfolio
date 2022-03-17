import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { arrayOf } from 'prop-types';
import {
  GridItem,
  Icon,
  Image, ItemText, ItemTitle, Link,
  LinksUl,
  PortfolioImageContainer,
  PortfolioProjectsContainer,
  ProjectContent,
} from './Styled';

function PortfolioProjects({ projects }) {
  return (
    <PortfolioProjectsContainer>
      {
        projects.map((project) => (
          <GridItem key={project.id}>
            <ProjectContent>
              <PortfolioImageContainer>
                <Image src={project.image} alt="" />
                <LinksUl>
                  <Link href>
                    <Icon href={project.link1}>
                      <GitHubIcon />
                    </Icon>
                  </Link>
                  <Link href>
                    <Icon href={project.link2}>
                      <PinterestIcon />
                    </Icon>
                  </Link>
                </LinksUl>
              </PortfolioImageContainer>
              <ItemTitle>
                {project.title}
              </ItemTitle>
              <ItemText>
                {project.text}
              </ItemText>
            </ProjectContent>
          </GridItem>
        ))
      }
    </PortfolioProjectsContainer>
  );
}

PortfolioProjects.propTypes = {
  projects: arrayOf().isRequired,
};

export default PortfolioProjects;
