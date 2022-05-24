import React from "react";
import styled from "styled-components";
import About1 from "./About1/About1";
import About2 from "./About2/About2";
import About3 from "./About3/About3";
import HeroAbout from "./HeroAbout/HeroAbout";

const About = () => {
  return (
    <Container>
      <HeroAbout />
      <About1 />
      <About2 />
      <About3 />
    </Container>
  );
};

export default About;

const Container = styled.div``;
