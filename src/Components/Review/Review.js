import React from "react";
import styled from "styled-components";

const Review = () => {
  return (
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
        <ShipTxt>Review & Payment</ShipTxt>
        <ReviewBox>All Review</ReviewBox>
      </Wrapper>
    </Container>
  );
};

export default Review;

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
  background-color: #e4e4e4;
  color: #000;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px 0 0 50px;
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
  background-color: orange;
  color: #fff;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 50px 50px 0;
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
    span {
      height: 14px;
      width: 14px;
      font-size: 10px;
    }
  }
`;

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

const ReviewBox = styled.div``;
