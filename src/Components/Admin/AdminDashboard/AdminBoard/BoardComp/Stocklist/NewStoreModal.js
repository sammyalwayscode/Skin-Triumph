import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import * as yup from "yup";

const NewStoreModal = () => {
  const navigate = useNavigate();

  const handleForm = yup.object().shape({
    office: yup.string().max(40).required("Office is Required"),
    phoneNo: yup.string().max(40).required("Phone Number Is Required"),
    email: yup.string().email().required("Email Address Is Required"),
    address: yup.string().max(40).required("Address Is Required"),
    hours: yup.string().max(40).required("Hours Is Required"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(handleForm),
  });

  const formSummit = handleSubmit(async (value) => {
    const { office, phoneNo, address, email, hours } = value;

    const mainURL = "http://localhost:2221";
    const URL = `${mainURL}/api/stocklist/newstore`;

    await axios
      .post(URL, { office, phoneNo, address, email, hours })
      .then((res) => {
        console.log(res.data.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product Uploaded",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/boardstocklist");
        });
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

          <StoreHold onSubmit={formSummit}>
            <InputCtrl>
              <span>Store Office</span>
              <input
                placeholder="e.g God's Will Stores - Ikeja"
                {...register("office")}
              />
              <Error> {errors.office?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Store Address</span>
              <input
                placeholder="e.g 38 Ayebeng Street, Adenta Shopping Center, Adenta"
                {...register("address")}
              />
              <Error> {errors.address?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Store Phone Number</span>
              <input
                placeholder="e.g +234 908 117 6026, +234 903 098 8589"
                {...register("phoneNo")}
              />
              <Error> {errors.phoneNo?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Store Email Address</span>
              <input
                placeholder="e.g info@superbeautycollective.com"
                {...register("email")}
              />
              <Error> {errors.email?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Opening & Closing Hours</span>
              <input
                placeholder="e.g Monday – Saturday 10am – 5:30 pm"
                {...register("hours")}
              />
              <Error> {errors.hours?.message} </Error>
            </InputCtrl>
            <Button>
              <button type="submit">Upload Store</button>
            </Button>
          </StoreHold>

          <br />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default NewStoreModal;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  height: 100%;
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f8f8f9;
  font-family: poppins;
  display: flex;
  justify-content: center;

  @media (max-width: 770px) {
    margin-left: 50px;
    width: calc(100vw - 50px);
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;
const Wrapper = styled.div`
  width: 1150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 1150px) {
    width: 90%;
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
  background-color: #fff;

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
const StoreHold = styled.form``;

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
