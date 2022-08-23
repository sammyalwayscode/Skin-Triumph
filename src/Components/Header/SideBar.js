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
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = ({ setToggle, toggle }) => {
  const getQty = useSelector((state) => state.qty);
  return (
    <Container>
      <Wrapper>
        <Navs
          to="/"
          onClick={() => {
            setToggle(false);
          }}
        >
          <RiHomeSmileFill />
          <span>Home</span>
        </Navs>
        <Navs
          onClick={() => {
            setToggle(false);
          }}
          to="/about"
        >
          <FaLayerGroup />
          <span>About</span>
        </Navs>
        <Navs
          to="/products"
          onClick={() => {
            setToggle(false);
          }}
        >
          <AiTwotoneSkin />
          <span>Products</span>
        </Navs>
        <Navs
          to="/blog"
          onClick={() => {
            setToggle(false);
          }}
        >
          <FaBloggerB />
          <span>Blog</span>
        </Navs>
        <Navs
          to="/stocklist"
          onClick={() => {
            setToggle(false);
          }}
        >
          <FaClipboardList />
          <span>Stocklist</span>
        </Navs>
        <Navs
          to="/contact"
          onClick={() => {
            setToggle(false);
          }}
        >
          <MdContacts />
          <span>Contact</span>
        </Navs>
        <CartDiv
          to="/cart"
          onClick={() => {
            setToggle(false);
          }}
        >
          <FaShoppingCart />
          <span>Cart</span>
          <div> {getQty} </div>
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
  position: fixed;
  margin-top: 70px;
`;
const Wrapper = styled.div``;
const Navs = styled(NavLink)`
  text-decoration: none;
  margin: 25px 0;
  color: #fff;
  display: flex;
  font-size: 20px;
  /* justify-content: center; */
  align-items: center;
  :hover {
    color: #ffb400;
  }

  &.active {
    color: #ffb400;
  }

  span {
    margin-left: 5px;
  }
`;
const CartDiv = styled(NavLink)`
  display: flex;
  font-size: 20px;
  color: #fff;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  :hover {
    color: #ffb400;
  }

  &.active {
    color: #ffb400;
  }
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
