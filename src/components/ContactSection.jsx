import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <Section>
            <Container>
                <LeftSection>
                    <Heading>Let's talk</Heading>
                    <Subheading>We collaborate with thousands of creators, entrepreneurs, and complete legends.</Subheading>
                    <SocialLinks>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </SocialLinks>
                    <ContactInfo>
                        <ContactItem>
                            <Icon as={FaEnvelope} />
                            <ContactText>
                                <strong>Our email</strong><br />
                                hello@example.com
                            </ContactText>
                        </ContactItem>
                        <ContactItem>
                            <Icon as={FaPhone} />
                            <ContactText>
                                <strong>Call us</strong><br />
                                +123 456 7892
                            </ContactText>
                        </ContactItem>
                        <ContactItem>
                            <Icon as={FaMapMarkerAlt} />
                            <ContactText>
                                <strong>Find us</strong><br />
                                <a href="https://maps.google.com">Open Google Maps</a>
                            </ContactText>
                        </ContactItem>
                    </ContactInfo>
                </LeftSection>
                <RightSection>
                    <Card>
                        <Form>
                            <FormRow>
                                <FormInput>
                                    <label htmlFor="first-name">First name</label>
                                    <input type="text" id="first-name" name="first-name" />
                                </FormInput>
                                <FormInput>
                                    <label htmlFor="last-name">Last name</label>
                                    <input type="text" id="last-name" name="last-name" />
                                </FormInput>
                            </FormRow>
                            <FormRow>
                                <FormInput>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" />
                                </FormInput>
                                <FormInput>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" />
                                </FormInput>
                            </FormRow>
                            <FormRow>
                                <FormTextarea>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message"></textarea>
                                </FormTextarea>
                            </FormRow>
                            <FormRow>
                                <SubmitButton type="submit">Submit Now</SubmitButton>
                            </FormRow>
                        </Form>
                    </Card>
                </RightSection>
            </Container>
            <MapBox />
        </Section>
    );
};

export default ContactSection;

const Section = styled.section`
  padding: 20px 40px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  width: 100%;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px; /* Added margin-left for larger screens */

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
    margin-left: 0; /* Remove margin-left for smaller screens */
  }
`;

const Heading = styled.h1`
  margin-top: 0;
  font-size: 3em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
    text-align: center;
  }
`;

const Subheading = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1em;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Icon = styled.div`
  font-size: 1.5em;
  margin-right: 15px;
  margin-top: 0;
`;

const ContactText = styled.div`
  line-height: 1.2;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-bottom: 20px;

  a {
    margin-right: 15px;
    font-size: 1.5em;
    color: inherit;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const RightSection = styled.div`
  width: 100%;
  max-width: 50%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  &:last-child {
    justify-content: center;
  }

  div {
    width: 48%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    div {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

const FormInput = styled.div`
  width: 48%;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const FormTextarea = styled.div`
  width: 100%;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const MapBox = styled.div`
  width: 60%;
  height: 180px;
  background-color: black;
  margin: 20px auto 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

