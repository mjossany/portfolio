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

export const SmallTitle = styled.div`
  padding-bottom: 3rem;
`;

export const SmallTitleContainer = styled.div`
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

export const ResumeContent = styled.div`
  border-left: 2px solid var(--border-color);
`;

export const ResumeItem = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 421px) {
    p, h5, h6 {
      font-size: 80%;
    }
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
`;

export const ResumeItemLeftContent = styled.div`
  width: 30rem;
  padding-left: 20px;
  position: relative;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    left: -10.5px;
    height: 15px;
    width: 15px;
    border: 2px solid var(--border-color);
    border-radius: 50%;
    background-color: var(--background-dark-color);
  }
`;

export const LeftContentP = styled.p`
  display: inline;
`;

export const ResumeItemRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

export const RightContentH5 = styled.h5`
  color: var(--primary-color);
  display: flex;
  height: 95px;
  line-height: 45px;
  font-size: 2rem;
  padding-bottom: .4rem;
`;

export const RightContentH6 = styled.h6`
  padding-bottom: .4rem;
`;

export const RightContentP = styled.p`

`;
