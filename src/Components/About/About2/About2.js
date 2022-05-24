import React from "react";
import styled from "styled-components";
import About2a from "./About2a/About2a";
import About2b from "./About2b/About2b";
import About2c from "./About2c/About2c";

const About2 = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Try Out Our Skin Combination</Title>
        <Content>
          <About2a />
          <About2b />
          <About2c />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default About2;

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    font-size: 21px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
const Content = styled.div``;
