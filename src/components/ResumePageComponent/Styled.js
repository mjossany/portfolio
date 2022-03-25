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
  @media screen and (max-width: 425px) {
    padding: 2rem;
  }
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

export const ResumeAndEducationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 1943px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Resume = styled.div`
  width: 80%;
  @media screen and (max-width: 1943px) {
    margin-left: 0;
  }
`;

export const Education = styled.div`
  margin-left: 5rem;
  width: 80%;
  @media screen and (max-width: 1943px) {
    margin-left: 0;
  }
`;

export const SmallTitle = styled.div`
  padding-bottom: 3rem;
  padding-top: 2rem;
  @media screen and (min-width: 1944px) {
    padding-top: 0;
  }
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
  width: 100%;
  border-left: 2px solid var(--border-color);
`;

export const ResumeItem = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
`;

export const ResumeItemLeftContent = styled.div`
  width: 50%;
  padding-left: 20px;
  position: relative;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    left: -10px;
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
  width: 50%;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`;

export const RightContentH5 = styled.h5`
  color: var(--primary-color);
  display: flex;
  word-wrap: break-word;
  font-size: 2rem;
  padding-bottom: .4rem;
  @media screen and (max-width: 425px) {
    font-size: 1.7rem;
  }
`;

export const RightContentH6 = styled.h6`
  padding-bottom: .4rem;
  font-weight: 800;
  color: gray;
`;

export const RightContentP = styled.p`

`;
