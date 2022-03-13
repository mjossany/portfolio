import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function ResumeItem({
  year, title, subTitle, text,
}) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
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
  .left-content {
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
    p {
      display: inline;
    }
  }
  .right-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    h5 {
      color: var(--primary-color);
      display: flex;
      height: 95px;
      line-height: 45px;
      font-size: 2rem;
      padding-bottom: .4rem;
    }
    h6 {
      padding-bottom: .4rem;
    }
  }
`;

ResumeItem.propTypes = {
  year: string.isRequired,
  title: string.isRequired,
  subTitle: string.isRequired,
  text: string.isRequired,
};

export default ResumeItem;
