import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import PlanetBlack from '../images/planet_black.svg';
import PlanetBlue from '../images/planet_blue.svg';
import PlanetGreen from '../images/planet_green.svg';
import PlanetRed from '../images/planet_red.svg';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) /2);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p{
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;
const Button = styled.button`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: white;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1){
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2){
    top: 170px;
    right: 10px;
  }
  ${Image}:nth-child(3){
    top: 350px;
    left: 50px;
  }
  ${Image}:nth-child(4){
    bottom: 100px;
    right: 75px;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>Welcome to Space</h1>
          <p>Journey to the unknown</p>
          <Button>Get Started</Button>
        </ColumnLeft>
        <ColumnRight>
          <Image src={PlanetBlack} alt="planet"/>
          <Image src={PlanetBlue} alt="planet"/>
          <Image src={PlanetGreen} alt="planet"/>
          <Image src={PlanetRed} alt="planet"/>
        </ColumnRight>
      </Container>
    </Section>
  )
}

export default Hero
