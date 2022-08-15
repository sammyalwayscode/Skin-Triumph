import React from "react";
import styled from "styled-components";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const ItemCart = () => {
  const getCart = useSelector((state) => state.cart);
  return (
    <Container>
      <Hero>
        {" "}
        <Cc>Hear's Your Cart</Cc>{" "}
      </Hero>
      <Wrapper>
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
                {props.price}
              </ItemPrice>
              <QuantityDiv>
                <CaclQuanty>+</CaclQuanty>
                <MainQuantity>2</MainQuantity>
                <CaclQuanty bg>-</CaclQuanty>
              </QuantityDiv>
              <ItemTotalPriceDiv>
                {" "}
                <strong>TIP:</strong> N7,400.00
              </ItemTotalPriceDiv>
              <DeleteIcon />
            </ShopingCartHold>
            <Line />
          </ShoppingCartDiv>
        ))}

        <CartTotalDiv>
          <TotalWrap>
            <h3>Cart Total</h3>
            <Detail>
              <strong>Sub-total</strong>
              <span>N18,000.00</span>
            </Detail>
            <Detail>
              <strong>Shipping</strong>
              <span>Enter Your Shipping Options Below</span>
            </Detail>
            <ShipOption />
            <hr />
            <TotalDetail>
              {" "}
              <strong>Total</strong> <span>N18,600.00</span>{" "}
            </TotalDetail>
            <Button>Proceed to Check Out</Button>
          </TotalWrap>
        </CartTotalDiv>
      </Wrapper>
    </Container>
  );
};

export default ItemCart;

const Container = styled.div`
  min-height: 80vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: poppins;
  align-items: center;
  flex-direction: column;
`;

const Hero = styled.div`
  height: 60vh;
  width: 100%;
  background: url("/Images/cart.jpg");
`;
const Cc = styled.div`
  font-size: 30px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 1200px;
  /* background-color: gray; */
  padding: 20px;

  @media (max-width: 1200px) {
    width: 1000px;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
  /* @media (max-width: 800px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 310px;
  } */
`;
const ShoppingCartDiv = styled.div`
  /* width: 65%; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: aqua; */
`;

const ShopingCartHold = styled.div`
  min-height: 60px;
  width: 100%;
  /* background-color: beige; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const ImageDiv = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 20px;
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
  width: 250px;
  font-size: 13px;
  font-weight: 600;
  /* background-color: azure; */
  flex-wrap: wrap;
  text-align: center;
`;
const ItemPrice = styled.div`
  margin: 0 20px;
  font-size: 12px;
  font-weight: 500;
  color: #bbb;
  strong {
    display: none;
  }
`;
const QuantityDiv = styled.div`
  display: flex;
  width: 150px;
  /* background-color: aliceblue; */
  justify-content: space-around;

  @media (max-width: 400px) {
    margin: 10px 0;
  }
`;
const CaclQuanty = styled.button`
  padding: 2px 13px;
  background-color: ${({ bg }) => (bg ? "red" : "green")};
  border: 0;
  outline: none;
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
`;
const MainQuantity = styled.div`
  height: 28px;
  width: 28px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
`;
const ItemTotalPriceDiv = styled.div`
  margin: 0 20px;
  font-size: 12px;
  font-weight: 600;
  color: #aaa;
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
const DeleteIcon = styled(RiDeleteBack2Line)`
  font-size: 20px;
  cursor: pointer;
`;
const CartTotalDiv = styled.div`
  background-color: lightgray;
`;
const TotalWrap = styled.div``;
const Detail = styled.div``;
const ShipOption = styled.div``;
const TotalDetail = styled.div``;
const Button = styled.div``;
const Line = styled.hr`
  width: 50%;
  background-color: lightgray;
  margin-top: 0.9px;
`;
