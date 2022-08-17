import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Checkout = () => {
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
          <ShipTxt>Shipping Address</ShipTxt>
          <AddressInputDiv>
            <AddressInputHold>
              <InputCtrl>
                <span>
                  Email Address <strong>*</strong>{" "}
                </span>
                <input placeholder="Enter Your UserName" />
                <Error> error </Error>
              </InputCtrl>
              <InputCtrl>
                <span>
                  First Name <strong>*</strong>{" "}
                </span>
                <input placeholder="Enter Your UserName" />
                <Error> error </Error>
              </InputCtrl>
              <InputCtrl>
                <span>
                  Last Name <strong>*</strong>{" "}
                </span>
                <input placeholder="Enter Your UserName" />
                <Error> error </Error>
              </InputCtrl>
              <InputCtrl>
                <span>
                  State <strong>*</strong>{" "}
                </span>
                <input placeholder="Enter Your UserName" />
                <Error> error </Error>
              </InputCtrl>
              <InputCtrl>
                <span>
                  City<strong>*</strong>{" "}
                </span>
                <input placeholder="Enter Your UserName" />
                <Error> error </Error>
              </InputCtrl>
              <InputCtrl>
                <span>
                  District<strong>*</strong>{" "}
                </span>
                <input placeholder="Enter Your UserName" />
                <Error> error </Error>
              </InputCtrl>
              <InputCtrl>
                <span>
                  Phone Number<strong>*</strong>{" "}
                </span>
                <input placeholder="Enter Your UserName" />
                <Error> error </Error>
              </InputCtrl>
              <InputCtrl>
                <span>
                  Street Address<strong>*</strong>{" "}
                </span>
                <input placeholder="Enter Your UserName" />
                <Error> error </Error>
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
const AddressInputHold = styled.div``;
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
