import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import EmptyCart from "./EmptyCart/EmptyCart";
import ItemCart from "./ItemCart/ItemCart";

const Cart = () => {
  const getQty = useSelector((state) => state.qty);
  return (
    <>
      <Header />
      <Container>{getQty === 0 ? <EmptyCart /> : <ItemCart />}</Container>
      <Footer />
    </>
  );
};

export default Cart;

const Container = styled.div`
  padding-top: 70px;
`;
