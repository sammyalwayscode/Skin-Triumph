import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
  return (
    <Container>
      <FirstText>Don't Wait</FirstText>
      <SecondText>Your Cart Is Empty</SecondText>
      <BoxEmpty>
        {" "}
        <span>
          Your Cart is currently empty, Be sure to go to the store and make
          Puchases
        </span>{" "}
      </BoxEmpty>
      <Button to="/products">Return to Store</Button>
    </Container>
  );
};

export default EmptyCart;

const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const FirstText = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: "Water Brush", cursive;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const SecondText = styled.div`
  margin-bottom: 40px;
  font-family: poppins;
  font-size: 30px;
  font-weight: 800;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const BoxEmpty = styled.div`
  height: 75px;
  width: 80%;
  background-color: #f6e57f;
  /* background-color: #ffb400;*/
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 40px;
  span {
    font-weight: 600;
    font-family: poppins;
    font-size: 13px;
    text-align: center;
  }
`;
const Button = styled(NavLink)`
  text-decoration: none;
  padding: 7px 15px;
  border: 0;
  outline: none;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  border-radius: 2px;
  font-size: 15px;
  font-family: poppins;
  transition: all 350ms;

  @media (max-width: 600px) {
    font-size: 10px;
  }

  :hover {
    transform: scale(0.96);
  }
`;
