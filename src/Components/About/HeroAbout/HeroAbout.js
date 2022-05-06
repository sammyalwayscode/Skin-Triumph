import React from "react";
import styled from "styled-components";

const HeroAbout = () => {
  return (
    <Conatiner>
      <BackgroundText>Get to know about us and our Products</BackgroundText>
    </Conatiner>
  );
};

export default HeroAbout;

const Conatiner = styled.div`
  background-image: url("/Images/btu1.webp");
  height: 500px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackgroundText = styled.div`
  font-size: 30px;
  font-weight: 800;
  font-family: poppins;
  color: #fff;
  text-align: center;
`;
