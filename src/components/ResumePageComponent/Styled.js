import styled from 'styled-components';

export const ResumePageContainer = styled.div`

`;

// SKILLS SECTION

export const SkillsSection = styled.section`

`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 3rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProgressBar = styled.div`

`;

export const ProgressBarTitle = styled.h6`

`;

export const ProgressBarInfos = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressBarInfosP = styled.p`
  padding-right: 1.1rem;
`;

export const Progress = styled.div`
  position: relative;
  width: 100%;
  height: .4rem;
  background-color: var(--border-color);
`;

export const ProgressSpan = styled.span`
  background-color: var(--primary-color);
  position: absolute;
  height: 100%;
`;

// RESUME SECTION
export const ResumeSection = styled.section`

`;

export const SmallTitleContainer = styled.div`
  padding-bottom: 3rem;
`;

export const SmallTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const SmallTitleP = styled.p`
  padding-right: 1rem;
  svg {
    font-size: 3rem;
  }
`;

export const SmallTitleH3 = styled.h3`
  color: var(--white-color);
`;
