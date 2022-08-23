import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { preOrderedDetail } from "../Global/GlobalState";

const Checkout = () => {
  const getCart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrices);
  const [cartItem] = useState(getCart);
  const navigate = useNavigate();
  const [nijaStates, setNijaStates] = useState([]);
  const dispatch = useDispatch();

  const handleForm = yup.object().shape({
    email: yup.string().email().required("EMail is Required"),
    username: yup.string().required("username is Required"),
    state: yup.string().required("state is Required"),
    LGA: yup.string().required("LGA is Required"),
    phone: yup.string().required("phone is Required"),
    address: yup.string().required("address is Required"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(handleForm),
  });

  const onSubmit = handleSubmit(async (value) => {
    const { email, username, state, LGA, phone, address } = value;

    const mainURL = "http://localhost:2221";
    const URL = `${mainURL}/api/shipping/newshipping`;

    await axios
      .post(URL, {
        email,
        username,
        state,
        LGA,
        phone,
        address,
        orders: cartItem,
      })
      .then((res) => {
        console.log(res.data.data);
        dispatch(preOrderedDetail(res.data.data));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Shippment Sucessfull",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/reviewdetails");
        });
      })
      .catch((error) => {
        new Swal({
          title: error.response.data.message,
          text: `Please Check and Fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        });
      });
  });

  const getStates = async () => {
    const apiUrl = "https://nigerian-states-info.herokuapp.com/api/v1/states";
    await axios.get(apiUrl).then((res) => {
      console.log(res.data.data);
      setNijaStates(res.data.data);
    });
  };

  useEffect(() => {
    getStates();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>Skin Triumph</Title>
          <Stages>
            <EachStage1>
              {" "}
              <span>1</span> Shipping{" "}
            </EachStage1>
            <EachStage2>
              {" "}
              <span>2</span> Review & Payment{" "}
            </EachStage2>
          </Stages>
          <h2>Estimated Total: {totalPrice}</h2>
          <ShipTxt>Shipping Address</ShipTxt>
          <AddressInputDiv>
            <AddressInputHold onSubmit={onSubmit}>
              <InputCtrl>
                <span>
                  Email Address <strong>*</strong>{" "}
                </span>
                <input placeholder="Enter Your Email" {...register("email")} />
                <Error> {errors.email?.message} </Error>
              </InputCtrl>
              <InputCtrl>
                <span>
                  User Name <strong>*</strong>{" "}
                </span>
                <input
                  placeholder="Enter Your UserName"
                  {...register("username")}
                />
                <Error> {errors.username?.message} </Error>
              </InputCtrl>

              <InputCtrl>
                <span>
                  State <strong>*</strong>{" "}
                </span>
                <select {...register("state")}>
                  {nijaStates?.map((props) => (
                    <option key={props.info.officialName}>
                      {" "}
                      {props.info.officialName}{" "}
                    </option>
                  ))}
                </select>
                <Error> {errors.state?.message} </Error>
              </InputCtrl>
              {/* <InputCtrl>
                <span>
                  State <strong>*</strong>{" "}
                </span>
                <input
                  placeholder="Which State Are You?"
                  {...register("state")}
                />
                <Error> {errors.state?.message} </Error>
              </InputCtrl> */}
              <InputCtrl>
                <span>
                  LGA<strong>*</strong>{" "}
                </span>
                <input
                  placeholder="Your Local Government Area"
                  {...register("LGA")}
                />
                <Error> {errors.LGA?.message} </Error>
              </InputCtrl>

              <InputCtrl>
                <span>
                  Phone Number<strong>*</strong>{" "}
                </span>
                <input
                  placeholder="Entee a Valid Phone No"
                  {...register("phone")}
                />
                <Error> {errors.phone?.message} </Error>
              </InputCtrl>
              <InputCtrl>
                <span>
                  Street Address<strong>*</strong>{" "}
                </span>
                <input
                  placeholder="A Discriptive Address"
                  {...register("address")}
                />
                <Error> {errors.address?.message} </Error>
              </InputCtrl>
              <Button>
                <button type="submit">Next</button>
              </Button>
            </AddressInputHold>
          </AddressInputDiv>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;

const Container = styled.div`
  padding-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 15px;
    font-weight: bold;
  }
`;
const Title = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`;
const Stages = styled.div`
  display: flex;
`;
const EachStage1 = styled.div`
  height: 35px;
  width: 300px;
  background-color: orange;
  color: #fff;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px 0 0 50px;
  font-weight: 700;
  span {
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 50%;
    color: #000;
    margin-right: 10px;
    font-size: 13px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 600px) {
    width: 130px;
    font-size: 10px;
    margin: px;
    span {
      height: 14px;
      width: 14px;
      font-size: 10px;
    }
  }
`;
const EachStage2 = styled.div`
  height: 35px;
  width: 300px;
  background-color: #e4e4e4;
  color: #000;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 50px 50px 0;
  font-weight: 700;
  cursor: not-allowed;
  span {
    height: 20px;
    width: 20px;
    background-color: #646464;
    border-radius: 50%;
    color: #fff;
    margin-right: 10px;
    font-size: 13px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    width: 130px;
    font-size: 10px;
    span {
      height: 14px;
      width: 14px;
      font-size: 10px;
    }
  }
`;
const AddressInputDiv = styled.div``;
const ShipTxt = styled.div`
  width: 100%;
  background-color: #fff;
  background-color: #000;
  margin: 20px 0;
  height: 50px;
  display: flex;
  font-size: 25px;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const AddressInputHold = styled.form``;
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
  strong {
    color: red;
  }

  select {
    height: 35px;
    width: 300px;
    font-family: poppins;
    margin-bottom: 15px;
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
