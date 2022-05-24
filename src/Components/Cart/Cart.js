import React from "react";
import styled from "styled-components";
import EmptyCart from "./EmptyCart/EmptyCart";
import ItemCart from "./ItemCart/ItemCart";

const Cart = () => {
  return (
    <Container>
      {/* <EmptyCart /> */}
      <ItemCart />
    </Container>
  );
};

export default Cart;

const Container = styled.div``;
