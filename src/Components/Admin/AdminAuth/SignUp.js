import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import avat from "../Img/ava.gif";

const SignUp = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(avat);
  const [avatar, setAvatar] = useState("");

  const formHandle = yup.object().shape({
    name: yup.string().required("Your Name is A Required Field"),
    email: yup.string().email().required("Email is a Required Field"),
    password: yup.string().required("Password Is a Required Field"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Dose Not Match"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(formHandle),
  });

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const formSummit = handleSubmit(async (value) => {
    const { name, email, password } = value;
    const mainURL = "http://localhost:2221";
    const URL = `${mainURL}/api/admin/signup`;
    console.log(value);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatarImg", avatar);

    const config = {
      "content-type": "multipart/form-data",
    };

    await axios
      .post(URL, formData, config)
      .then((res) => {
        console.log(res.data.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account Created Sucessfully",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/admin/toverify");
        });
        // setLoading(false)
      })
      .catch((error) => {
        new Swal({
          title: error.response.data.message,
          text: `Please Check and Fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        }).then(() => {
          // setLoading(false)
        });
      });
  });
  return (
    <Container>
      <Wrapper>
        <Card>
          <MainTitle>
            <Title>Skin Triumph</Title>

            <SubTitle>Elegance in your skincare</SubTitle>
          </MainTitle>

          <SignUpHold onSubmit={formSummit} type="multipart/form-data">
            <ImageHolder>
              <PrevImgDiv>
                <img src={image} alt="" />
              </PrevImgDiv>
              <ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
              <ImageInput
                onChange={handleImage}
                id="pix"
                type="file"
                accept="image/*"
              />
            </ImageHolder>

            <InputCtrl>
              <span>Admin Name</span>
              <input placeholder="Enter Your UserName" {...register("name")} />
              <Error> {errors.name?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Your Email</span>
              <input
                placeholder="Enter Your Email Address"
                {...register("email")}
              />
              <Error> {errors.email?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Password</span>
              <input
                type="password"
                placeholder="Create a Super Meroable Password"
                {...register("password")}
              />
              <Error> {errors.password?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Confirm Password</span>
              <input
                type="password"
                placeholder="Confirm Your Password"
                {...register("confirm")}
              />
              <Error> {errors.confirm?.message} </Error>
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
