import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function ContactItem({
  icon, title, contact1, contact2,
}) {
  return (
    <ContactItemStyled>
      <div className="left-content">
        <p>
          {icon}
        </p>
      </div>
      <div className="right-content">
        <h6>
          {title}
        </h6>
        <p>
          {contact1}
        </p>
        <p>
          {contact2}
        </p>
      </div>
    </ContactItemStyled>
  );
}

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-gray);
`;

ContactItem.propTypes = {
  icon: string.isRequired,
  title: string.isRequired,
  contact1: string.isRequired,
  contact2: string.isRequired,
};

export default ContactItem;
