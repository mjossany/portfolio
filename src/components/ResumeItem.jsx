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
        <div className="right-content-infos">
          <h5>{title}</h5>
          <h6>{subTitle}</h6>
          <p>{text}</p>
        </div>
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: flex;
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
    &::before {
      content: "";
      position: absolute;
      left: -10.5px;
      top: 5px;
      height: 15px;
      width: 15px;
      border: 2px solid var(--border-color);
      border-radius: 50%;
      background-color: var(--background-dark-color);
    }
    p {
      display: inline;
      position: relative;
      top: -1%;
      @media screen and (max-width: 1024px) {
        top: 6%;
      }
      @media screen and (max-width: 912px) {
        top: -1%;
      }
      @media screen and (max-width: 820px) {
        top: -.5%;
      }
      @media screen and (max-width: 768px) {
        top: 0;
      }
      @media screen and (max-width: 540px) {
        top: 3%;
      }
      @media screen and (max-width: 414px) {
        top: .5%;
      }
      @media screen and (max-width: 375px) {
        top: 3%;
      }
      @media screen and (max-width: 360px) {
        top: 2%;
      }
      @media screen and (max-width: 280px) {
        top: -1.5%;
      }
    }
  }
  .right-content {
    /* padding-left: 5rem; */
    position: relative;
    .right-content-infos {
      position: relative;
        h5 {
          color: var(--primary-color);
          font-size: 2rem;
          padding-bottom: .4rem;
        }
        h6 {
          padding-bottom: .4rem;
        }
        @media screen and (max-width: 3000px) {
          top: -10%;
        }
        @media screen and (max-width: 1280px) {
          top: -10%;
        }
        @media screen and (max-width: 1024px) {
          top: -5%;
        }
        @media screen and (max-width: 375px) {
          top: -3%;
        }
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
