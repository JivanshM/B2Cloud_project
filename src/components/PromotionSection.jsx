import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const PromotionSection = () => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Title>Our Mission</Title>
          <Subtitle>Boost your with your business</Subtitle>
          <Paragraph>
            He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire
            difficulty gay assistance joy.
          </Paragraph>
          <List>
            <ListItem>
              <FaCheck /> Meaningful messageers an of unwilling
            </ListItem>
            <ListItem>
              <FaCheck /> Seem as fully taken by clumsy
            </ListItem>
            <ListItem>
              <FaCheck /> On since course gree living
            </ListItem>
            <ListItem>
              <FaCheck /> Recalled and centrally day
            </ListItem>
            <ListItem>
              <FaCheck /> Site law course gree living
            </ListItem>
            <ListItem>
              <FaCheck /> Preference for unreserved
            </ListItem>
          </List>
        </TextContainer>
        <ImageContainer>
          <ImageWrapper>
            <Image src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww" alt="Team interaction" />
            <StatItem>
              <StatTitle>10k</StatTitle>
              <StatDescription>Boost conversations per month</StatDescription>
            </StatItem>
          </ImageWrapper>
          <ImageWrapper>
            <Image src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww" alt="Business setting" />
            <StatItem>
              <StatTitle>95+</StatTitle>
              <StatDescription>Projects Complete</StatDescription>
            </StatItem>
          </ImageWrapper>
        </ImageContainer>
      </Container>
    </Section>
  );
};

export default PromotionSection;

const Section = styled.section`
  padding: 40px 0;
  background-color: black;
  color: white;
  height: 100vh;

  @media(max-width: 768px) {
    height: auto; /* Auto height for mobile view */
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  height: 100%;

  @media(max-width: 768px) {
    height: auto; /* Auto height for mobile view */
  }
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: auto; /* Align text a little bit above */
  margin-bottom: 100px; /* Add margin to bottom */
  
  @media(min-width: 768px) {
    width: 40%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media(min-width: 768px) {
    width: 60%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 80%; /* Reduced width to make images smaller */

  @media(min-width: 768px) {
    width: 45%;
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 100%; /* Ensure images fit within the wrapper */
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const StatItem = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const StatTitle = styled.h3`
  font-size: 24px;
`;

const StatDescription = styled.p`
  font-size: 16px;
`;
