import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import EmptyCart from "./EmptyCart/EmptyCart";
import ItemCart from "./ItemCart/ItemCart";

const Cart = () => {
  return (
    <>
      <Header />
      <Container>
        {/* <EmptyCart /> */}
        <ItemCart />
      </Container>
      <Footer />
    </>
  );
};

export default Cart;

const Container = styled.div`
  padding-top: 70px;
`;
