import React from "react";
// import { ImBooks } from "react-icons/im";
import styled from "styled-components";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
// import swal from "sweetalert";
import { NavLink } from "react-router-dom";
// import HashLoader from "react-spinners/HashLoader";
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
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

          <SignUpHold onSubmit={""} type="multipart/form-data">
            <ImageHolder>
              <PrevImgDiv>
                <img src="" alt="" />
              </PrevImgDiv>
              <ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
              <ImageInput onChange="" id="pix" type="file" accept="image/*" />
            </ImageHolder>

            <InputCtrl>
              <span>User Name</span>
              <input placeholder="Enter Your UserName" />
              <Error> error </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Your Email</span>
              <input placeholder="Enter Your Email Address" />
              <Error> error </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Password</span>
              <input
                type="password"
                placeholder="Create a Super Meroable Password"
              />
              <Error> error </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Confirm Password</span>
              <input type="password" placeholder="Confirm Your Password" />
              <Error> error </Error>
            </InputCtrl>
            <Button>
              <button type="submit">Sign Up</button>
            </Button>
            <NotUp bg>
              Already have an Account???{" "}
              <NavLink style={{ textDecoration: "none" }} to="/admin/signin">
                <span>Sign In</span>
              </NavLink>
            </NotUp>
          </SignUpHold>

          <br />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  min-height: 89vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  position: relative;
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
  width: 450px;
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
const SignUpHold = styled.form``;
const PrevImgDiv = styled.div`
  height: 80px;
  width: 80px;
  background-color: gray;
  border-radius: 50%;
  margin: 10px 0;
  border: 1px solid gray;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  padding: 6px 12px;
  background-color: #000;
  color: white;
  border-radius: 3px;
  transition: all 350ms;
  font-size: 14px;
  outline: none;
  border: 0;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
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
    height: 35px;
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
