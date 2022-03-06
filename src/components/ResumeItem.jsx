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

const ResumeItemStyled = styled.div``;

ResumeItem.propTypes = {
  year: string.isRequired,
  title: string.isRequired,
  subTitle: string.isRequired,
  text: string.isRequired,
};

export default ResumeItem;
