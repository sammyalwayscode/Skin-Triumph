import React from "react";
import styled from "styled-components";

const Home6 = () => {
  return (
    <Container>
      <Wrapper>
        <PreTitle>Join Our</PreTitle>
        <Title>Inclusive Beauty Movement</Title>
        <Img1 src="/Images/btu1.webp" />
        <Img1 src="/Images/btu2.jpg" />
      </Wrapper>
    </Container>
  );
};

export default Home6;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const PreTitle = styled.div`
  font-family: "Water Brush", cursive;
  font-size: 25px;
  font-weight: bold;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
const Img1 = styled.img`
  width: 100%;
`;
