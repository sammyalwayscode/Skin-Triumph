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
  background: url("/Images/ccc.jpg") repeat fixed 100%;
  height: 500px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackgroundText = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
`;
