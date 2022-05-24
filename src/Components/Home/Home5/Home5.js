import React from "react";
import styled from "styled-components";

const Home5 = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Become A Stocklist</Title>
        <Content>
          We are always looking to expand our reach by partnering with brands
          who share our values. To become a Nokware stockist, please click to
          fill the stockist partnership form.
        </Content>
        <Button>Fill The Form</Button>
      </Wrapper>
    </Container>
  );
};

export default Home5;

const Container = styled.div`
  height: 70vh;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  margin-bottom: 100px;
`;
const Wrapper = styled.div`
  width: 85%;
  text-align: center;
`;
const Title = styled.div`
  font-size: 25px;
  /* color: #e8bf0a; */
  color: #ffb400;
  font-weight: 800;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
const Content = styled.div`
  color: #949494;
  margin-bottom: 20px;
`;
const Button = styled.button`
  height: 45px;
  width: 120px;
  background-color: #fff;
  color: #000;
  outline: none;
  border: none;
  font-weight: 600;
  border-radius: 3px;
  transition: all 350ms;

  :hover {
    transform: scale(0.94);
    color: #e8bf0a;
  }
`;
