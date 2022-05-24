import React from "react";
import styled from "styled-components";
import About1a from "./About1a/About1a";
import About1b from "./About1b/About1b";
import About1c from "./About1c/About1c";
import About1d from "./About1d/About1d";

const About1 = () => {
  return (
    <Container>
      <Wrapper>
        <Title>THE BRAND</Title>
        <Content>
          <About1a />
          <About1b />
          <About1c />
          <About1d />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default About1;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 70px 0;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 800;
  /* color: #ffb400; */
  text-align: center;
  color: #ffb400;
  margin-bottom: 40px;
`;
const Content = styled.div``;
