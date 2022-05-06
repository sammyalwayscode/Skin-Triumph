import React from "react";
import styled from "styled-components";
import About1 from "./About1/About1";
import HeroAbout from "./HeroAbout/HeroAbout";

const About = () => {
  return (
    <Container>
      <HeroAbout />
      <About1 />
    </Container>
  );
};

export default About;

const Container = styled.div``;
