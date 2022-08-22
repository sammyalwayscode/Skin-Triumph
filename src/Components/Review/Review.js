import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import formatter from "number-to-currency";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiDeleteBack2Line } from "react-icons/ri";

const Review = () => {
  const getCart = useSelector((state) => state.cart);
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
        <ReviewBox>
          <ItemOrderedDiv>
            <center>
              <h4>Item Ordered</h4>
            </center>
            <OrderedBox>
              <OrderedBoxHold>
                {getCart?.map((props) => (
                  <ShoppingCartDiv>
                    <ShopingCartHold>
                      {" "}
                      <ImageDiv>
                        {" "}
                        <img src={props.avatar} alt="" />{" "}
                      </ImageDiv>
                      <ItemName>{props.productName} </ItemName>
                      <ItemPrice>
                        {" "}
                        <strong>Item Price:</strong>
                        <span>&#8358;</span>
                        {formatter(props.price)}
                      </ItemPrice>
                      <QuantityDiv>
                        <MainQuantity> {props.qty} </MainQuantity>
                      </QuantityDiv>
                      <ItemTotalPriceDiv>
                        {" "}
                        <span>&#8358;</span> {props.price * props.qty}
                      </ItemTotalPriceDiv>
                    </ShopingCartHold>
                    <Line />
                  </ShoppingCartDiv>
                ))}
              </OrderedBoxHold>
            </OrderedBox>
          </ItemOrderedDiv>
          <OrdererDetail>
            <center>
              <h4>To be Devivered To...</h4>
            </center>
            <DeliverBox>
              <DeliverBoxHold>
                <InfoHold>
                  <strong>Order ID:</strong>
                  <span>Olorunda Samuel</span>
                </InfoHold>
                <InfoHold>
                  <strong>Name:</strong>
                  <span>Olorunda Samuel</span>
                </InfoHold>
                <InfoHold>
                  <strong>Email:</strong>
                  <span>Olorunda Samuel</span>
                </InfoHold>
                <InfoHold>
                  <strong>State:</strong>
                  <span>Olorunda Samuel</span>
                </InfoHold>
                <InfoHold>
                  <strong>L.G.A:</strong>
                  <span>Olorunda Samuel</span>
                </InfoHold>
                <InfoHold>
                  <strong>Address:</strong>
                  <span>Olorunda Samuel</span>
                </InfoHold>
              </DeliverBoxHold>
            </DeliverBox>
          </OrdererDetail>
          <PayMeto>Payment Method</PayMeto>
        </ReviewBox>
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
const ItemOrderedDiv = styled.div`
  h4 {
    font-size: 20px;
    font-weight: 800;
    text-decoration: underline;
    @media (max-width: 500px) {
      font-weight: 600;
    }
  }
`;
const OrderedBox = styled.div``;
const OrderedBoxHold = styled.div``;

const ShoppingCartDiv = styled.div`
  /* width: 65%; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: aqua; */
  @media (max-width: 500px) {
    width: 300px;
  }
`;

const ShopingCartHold = styled.div`
  min-height: 60px;
  width: 90%;
  /* background-color: beige; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    /* justify-content: flex-start; */
  }
`;
const ImageDiv = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  /* margin-left: 20px; */
  background-color: #eee;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const ItemName = styled.div`
  margin: 0 20px;
  width: 200px;
  font-size: 13px;
  font-weight: 600;
  /* background-color: azure; */
  flex-wrap: wrap;
  text-align: center;
  @media (max-width: 500px) {
    margin: 0 10px;
    width: 180px;
    font-size: 11px;
    text-align: left;
  }
`;
const ItemPrice = styled.div`
  margin: 0 20px;
  font-size: 12px;
  font-weight: 500;
  /* color: #bbb; */
  color: #5bd395;
  strong {
    display: none;
  }
  @media (max-width: 500px) {
    margin: 0 5px;
    font-size: 11px;
    font-weight: bold;
  }
`;
const QuantityDiv = styled.div`
  display: flex;
  width: 40px;
  /* background-color: aliceblue; */
  justify-content: space-around;

  @media (max-width: 400px) {
    margin: 10px 0;
  }
`;

const MainQuantity = styled.div`
  height: 28px;
  width: 28px;
  /* background-color: lightgray; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
`;
const ItemTotalPriceDiv = styled.div`
  margin: 0 10px;
  font-size: 12px;
  font-weight: 600;
  /* background-color: green; */
  /* color: #aaa; */
  color: orange;
  strong {
    display: none;
  }
  @media (max-width: 400px) {
    strong {
      display: contents;
      color: #000;
    }
  }
`;
const OrdererDetail = styled.div`
  margin: 20px 0;
  h4 {
    font-size: 20px;
    font-weight: 800;
    text-decoration: underline;
    @media (max-width: 500px) {
      font-weight: 600;
    }
  }
`;
const DeliverBox = styled.div`
  width: 100%;
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeliverBoxHold = styled.div`
  width: 90%;
  margin: 20px 0;
  strong {
    margin-right: 10px;
  }
`;
const Line = styled.hr`
  width: 50%;
  background-color: lightgray;
  margin-top: 0.9px;
`;

const PayMeto = styled.div``;

const InfoHold = styled.div`
  margin: 10px 0;
`;
