import React from "react";
import styled from "styled-components";
import { RiHomeSmileFill } from "react-icons/ri";
import {
  FaLayerGroup,
  FaClipboardList,
  FaShoppingCart,
  FaBloggerB,
} from "react-icons/fa";
import { AiTwotoneSkin } from "react-icons/ai";
import { MdContacts } from "react-icons/md";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <Navs>
          <RiHomeSmileFill />
          <span>Home</span>
        </Navs>
        <Navs>
          <FaLayerGroup />
          <span>About</span>
        </Navs>
        <Navs>
          <AiTwotoneSkin />
          <span>Products</span>
        </Navs>
        <Navs>
          <FaBloggerB />
          <span>Blog</span>
        </Navs>
        <Navs>
          <FaClipboardList />
          <span>Stocklist</span>
        </Navs>
        <Navs>
          <MdContacts />
          <span>Contact</span>
        </Navs>
        <CartDiv>
          <FaShoppingCart />
          <span>Cart</span>
          <div>20</div>
        </CartDiv>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  font-family: poppins;
  font-weight: 600;
`;
const Wrapper = styled.div``;
const Navs = styled.div`
  margin: 25px 0;
  color: #fff;
  display: flex;
  font-size: 20px;
  /* justify-content: center; */
  align-items: center;
  :hover {
    color: #e8bf0a;
  }

  span {
    margin-left: 5px;
  }
`;
const CartDiv = styled.div`
  display: flex;
  font-size: 20px;
  color: #fff;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 5px;
  }
  div {
    margin-left: 15px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #e8bf0a;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-weight: 800;
  }
`;
