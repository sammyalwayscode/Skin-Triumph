import React from "react";
import styled from "styled-components";

const Home3b = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>OUR PHILOSOPHY</Title>
          <Content>
            To ensure to produce products that are loved by community of people
            approve by global standard ae we source for unique different
            ingredients that fulfill the desires of our customer. Our products
            gives you that desire to achieve more by engaging your passion for
            luxury and elegance creating a product that fulfill your inner most
            desire
          </Content>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Home3b;

const Container = styled.div`
  background: url("./Images/pall.jpg") repeat fixed 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-family: poppins;
`;
const Wrapper = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 10px;
  color: darkorange;
  @media (max-width: 800px) {
    font-size: 21px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
const Content = styled.div`
  width: 850px;
  font-size: 23px;
  text-align: center;
  @media (max-width: 800px) {
    width: 90%;
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
