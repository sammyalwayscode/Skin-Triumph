import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <MainTitle>
            <Title>Skin Triumph</Title>

            <SubTitle>
              Elegance in your skincare, concept by{" "}
              <strong>OLORUNDA SAMUEL</strong>{" "}
            </SubTitle>
          </MainTitle>

          <SignInHold>
            <InputCtrl>
              <span>Your Email</span>
              <input placeholder="Enter Your Email Address" />
              <Error> error </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Password</span>
              <input type="password" placeholder="Enter Your Password" />
              <Error> error</Error>
            </InputCtrl>
            <Button>
              <button type="submit">Sign In</button>
            </Button>
            <NotUp>
              Don't have an Account???{" "}
              <NavLink style={{ textDecoration: "none" }} to="/admin/signup">
                {" "}
                <span>Sign Up</span>
              </NavLink>
            </NotUp>
          </SignInHold>

          <br />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  min-height: 89vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 1200px) {
    width: 85%;
  }
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 500px;
  /* min-height: 550px; */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    box-shadow: none;
  }
`;

const MainTitle = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const Title = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`;
const SubTitle = styled.div`
  font-size: x-small;
  margin-top: -10px;
`;
const InputCtrl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  span {
    font-size: 12px;
    font-weight: 600;
  }

  input {
    height: 30px;
    width: 300px;
    font-family: poppins;
    font-size: 12px;
  }
`;

const Error = styled.div`
  font-size: x-small;
  font-weight: bold;
  color: red;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  button {
    height: 32px;
    width: 80%;
    font-family: poppins;
    font-weight: 600;
    background-color: #ff9505;
    color: #fff;
    border: 0;
    outline: none;
  }
`;
const NotUp = styled.div`
  font-size: small;
  text-align: center;
  span {
    font-weight: 700;
    color: ${({ bg }) => (bg ? "green" : "red")};
    cursor: pointer;
  }
`;

const SignInHold = styled.form``;
