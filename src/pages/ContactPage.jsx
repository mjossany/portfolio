import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../components/Title';

function ContactPage() {
  return (
    <MainLayout>
      <Title title="Contact" span="Contact" />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <form className="lef-content">
              <div className="form-field">
                <label htmlFor="name">
                  Enter your name
                  <input type="text" id="name" />
                </label>
              </div>
              <div className="form-field">
                <label htmlFor="email">
                  Enter your email
                  <input type="email" id="email" />
                </label>
              </div>
              <div className="form-field">
                <label htmlFor="subject">
                  Enter the subject
                  <input type="text" id="subject" />
                </label>
              </div>
              <div className="text-area">
                <label htmlFor="text-area">
                  Enter your Message
                  <textarea name="text-area" id="text-area" cols="30" rows="10" />
                </label>
              </div>
            </form>
          </div>
          <div className="right-content" />
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ContactPage;
