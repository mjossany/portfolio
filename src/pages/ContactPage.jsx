import React from 'react';
import styled from 'styled-components';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import ContactItem from '../components/ContactItem';

function ContactPage() {
  const phone = <LocalPhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title="Contact" span="Contact" />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Get in touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">
                  Enter your name
                </label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">
                  Enter your email
                </label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">
                  Enter the subject
                </label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">
                  Enter your Message
                </label>
                <textarea name="text-area" id="text-area" cols="30" rows="10" />
              </div>
              <div className="form-field f-button">
                <PrimaryButton title="Send Email" />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem title="Phone" icon={phone} contact1="+55 21 971677882" />
            <ContactItem title="Email" icon={email} contact1="mjossany@gmail.com" />
            <ContactItem title="Location" icon={location} contact1="Avenida Rui Barbosa, 5, Apto 601, Niteroi, Rio de Janeiro, Brazil" />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
          margin-bottom: 2rem;
        }
    }
    .right-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 .5rem;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: .8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
