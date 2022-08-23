import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const About2a = () => {
  return (
    <div>
      <Container>
        <Content>
          <NavLink to="/products">
            <Button>Try Now</Button>
          </NavLink>
        </Content>
      </Container>
    </div>
  );
};

export default About2a;

const Container = styled.div`
  background: url("./Images/comb.jpg") repeat fixed 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Content = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 60px;
  background-color: #fff;
  color: #000;
  outline: none;
  border: none;
  font-weight: 800;
  border-radius: 3px;
  transition: all 350ms;
  font-family: poppins;

  :hover {
    transform: scale(0.94);
    color: #e8bf0a;
  }
`;
