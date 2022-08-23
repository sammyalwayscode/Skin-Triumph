import React, { useState } from "react";
import styled from "styled-components";
import { RiDeleteBack2Line } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Global/GlobalState";
import { NavLink } from "react-router-dom";
import formatter from "number-to-currency";

const ItemCart = () => {
  const getCart = useSelector((state) => state.cart);
  const getTotal = useSelector((state) => state.totalPrices);
  const dispatch = useDispatch();
  const [view, setView] = useState(getCart);
  console.log(view);
  return (
    <Container>
      <Hero>
        {" "}
        <Cc>Hear's Your Cart</Cc>{" "}
      </Hero>
      <Wrapper>
        {getCart?.map((props) => (
          <ShoppingCartDiv key={props._id}>
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
                <CaclQuanty
                  onClick={() => {
                    dispatch(removeFromCart(props));
                  }}
                >
                  <IoIosArrowBack color="#000" />
                </CaclQuanty>
                <MainQuantity> {props.qty} </MainQuantity>
                <CaclQuanty
                  onClick={() => {
                    dispatch(addToCart(props));
                  }}
                >
                  <IoIosArrowForward color="#000" />
                </CaclQuanty>
              </QuantityDiv>
              <ItemTotalPriceDiv>
                {" "}
                <span>&#8358;</span> {props.price * props.qty}
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
              <strong>Sub-total:</strong>
              <span>
                {" "}
                <span>&#8358;</span>
                {formatter(getTotal)}.00
              </span>
            </Detail>
            <Detail>
              <strong>Shipping:</strong>
              <span>
                Shipping Fee is <b>N500</b> for Orders widthin Lagos and{" "}
                <b>N1500</b> for Orders Outside Lagos
              </span>
            </Detail>
            <ShipOption />
            <hr />
            <TotalDetail>
              {" "}
              <strong>Total</strong> <span>N18,600.00</span>{" "}
            </TotalDetail>

            <center>
              <NavLink to="/checkout">
                <Button>Proceed to Check Out</Button>
              </NavLink>
            </center>
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
  } */
  /* @media (max-width: 700px) {
    width: 500px;
  } */
  @media (max-width: 500px) {
    width: 310px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
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
  width: 90px;
  /* background-color: aliceblue; */
  justify-content: space-around;

  @media (max-width: 400px) {
    margin: 10px 0;
  }
`;
const CaclQuanty = styled.button`
  /* padding: 2px 13px; */
  /* background-color: ${({ bg }) => (bg ? "red" : "green")}; */
  background-color: #fff;
  border: 0;
  outline: none;
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
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
  margin: 0 20px;
  font-size: 12px;
  font-weight: 600;
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
const DeleteIcon = styled(RiDeleteBack2Line)`
  font-size: 20px;
  cursor: pointer;
`;
const CartTotalDiv = styled.div`
  background-color: lightgray;
  border-radius: 10px;
`;
const TotalWrap = styled.div`
  padding: 20px;
`;
const Detail = styled.div``;
const ShipOption = styled.div``;
const TotalDetail = styled.div``;
const Button = styled.button`
  font-family: poppins;
  font-weight: 700;
  background-color: #000;
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 20px;
`;
const Line = styled.hr`
  width: 50%;
  background-color: lightgray;
  margin-top: 0.9px;
`;
