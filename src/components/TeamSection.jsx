import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  { name: 'Alice Johnson', subtitle: 'Lead Designer', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D', facebook: '#', instagram: '#', linkedin: '#' },
  { name: 'Bob Smith', subtitle: 'Project Manager', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D', facebook: '#', instagram: '#', linkedin: '#' },
  { name: 'Charlie Brown', subtitle: 'Software Engineer', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D', facebook: '#', instagram: '#', linkedin: '#' },
];

const TeamSection = () => {
  return (
    <Section>
      <Container>
        <Heading>Our Team</Heading>
        <TeamContainer>
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <ImageWrapper>
                <Image src={member.photo} alt={member.name} />
                <Icons>
                  <Icon href={member.facebook} target="_blank"><FaFacebook /></Icon>
                  <Icon href={member.instagram} target="_blank"><FaInstagram /></Icon>
                  <Icon href={member.linkedin} target="_blank"><FaLinkedin /></Icon>
                </Icons>
              </ImageWrapper>
              <Name>{member.name}</Name>
              <Subtitle>{member.subtitle}</Subtitle>
            </Card>
          ))}
        </TeamContainer>
        <BlackBox>
          <BoxContent>
            <Message style={{color: "white"}}>Join our team and make an impact!</Message>
            <Button>Get in Touch</Button>
          </BoxContent>
        </BlackBox>
      </Container>
    </Section>
  );
};

export default TeamSection;

const Section = styled.section`
  background-color: white;
  color: black;
  min-height: 100vh; /* Ensures the section takes full height of the viewport */
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    min-height: auto; /* Auto height for mobile view */
  }
`;


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    height: auto; /* Auto height for mobile view */
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background-color: white;
  color: black;
  border-radius: 10px;
  margin: 40px;
  padding: 15px;  /* Reduced padding */
  width: 300px;  /* Decreased width */
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%; /* Adjusted width for smaller screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for very small screens */
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Icons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

const Icon = styled.a`
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h2`
  font-size: 18px;  /* Adjusted font size */
  margin-top: 10px;
`;

const Subtitle = styled.h3`
  font-size: 14px;  /* Adjusted font size */
  color: gray;
  margin-top: 5px;
`;

const BlackBox = styled.div`
  background-color: black;
  color: white;
  width: 80%;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  margin-top: 1vh;

  @media (max-width: 768px) {
    width: 100%; /* Full width for smaller screens */
  }
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;
