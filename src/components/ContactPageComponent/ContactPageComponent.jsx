import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Title from '../Title/Title';
import { InnerLayout, MainLayout } from '../../styles/Layouts';
import {
  Button,
  ButtonContainer,
  ContactItem,
  ContactLeftContent,
  ContactPageContainer,
  ContactRightContent,
  ContactTitle,
  ContactTitleContainer,
  Form,
  FormField,
  H6,
  Input,
  Label,
  LeftContent,
  P,
  RightContent,
  TextArea,
} from './Styled';

function ContactPageComponent() {
  return (
    <MainLayout>
      <Title title="Contact" span="Contact" />
      <ContactPageContainer>
        <InnerLayout className="contact-section">
          <LeftContent>
            <ContactTitleContainer>
              <ContactTitle>
                Get in touch
              </ContactTitle>
            </ContactTitleContainer>
            <Form>
              <FormField>
                <Label htmlFor="name">
                  Enter your name
                </Label>
                <Input type="text" id="name" />
              </FormField>
              <FormField>
                <Label htmlFor="email">
                  Enter your email
                </Label>
                <Input type="email" id="email" />
              </FormField>
              <FormField>
                <Label htmlFor="subject">
                  Enter the subject
                </Label>
                <Input type="text" id="subject" />
              </FormField>
              <FormField>
                <Label htmlFor="text-area">
                  Enter your message
                </Label>
                <TextArea name="text-area" id="text-area" cols="30" rows="10" />
              </FormField>
              <ButtonContainer>
                <Button>
                  Send Email
                </Button>
              </ButtonContainer>
            </Form>
          </LeftContent>
          <RightContent>
            <ContactItem>
              <ContactLeftContent>
                <LocalPhoneIcon />
              </ContactLeftContent>
              <ContactRightContent>
                <H6>
                  Phone
                </H6>
                <P>
                  +55 21 97167-7882
                </P>
              </ContactRightContent>
            </ContactItem>
            <ContactItem>
              <ContactLeftContent>
                <EmailIcon />
              </ContactLeftContent>
              <ContactRightContent>
                <H6>
                  Email
                </H6>
                <P>
                  mjossany@gmail.com
                </P>
              </ContactRightContent>
            </ContactItem>
            <ContactItem>
              <ContactLeftContent>
                <LocationOnIcon />
              </ContactLeftContent>
              <ContactRightContent>
                <H6>
                  Location
                </H6>
                <P>
                  Avenida Rui Barbosa, 5, Apto 601, Niteroi, Rio de Janeiro, Brazil
                </P>
              </ContactRightContent>
            </ContactItem>
          </RightContent>
        </InnerLayout>
      </ContactPageContainer>
    </MainLayout>
  );
}

export default ContactPageComponent;
