import { useState } from "react";
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
import { VscThreeBars } from "react-icons/vsc";
import { GiCancel } from "react-icons/gi";
import SideBar from "./SideBar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <img src="" alt="Logo" />
          </Logo>

          <Navigations>
            <Navs to="/">
              <RiHomeSmileFill />
              <span>Home</span>
            </Navs>
            <Navs to="/about">
              <FaLayerGroup />
              <span>About</span>
            </Navs>
            <Navs to="/products">
              <AiTwotoneSkin />
              <span>Products</span>
            </Navs>
            <Navs to="/blog">
              <FaBloggerB />
              <span>Blog</span>
            </Navs>
            <Navs to="/stocklist">
              <FaClipboardList />
              <span>Stocklist</span>
            </Navs>
            <Navs to="/contact">
              <MdContacts />
              <span>Contact</span>
            </Navs>
            <CartDiv to="/cart">
              <FaShoppingCart />
            </CartDiv>
          </Navigations>
          <Side>
            {toggle ? (
              <GiCancel onClick={toggleChange} color="#fff" size="30px" />
            ) : (
              <VscThreeBars onClick={toggleChange} color="#fff" size="30px" />
            )}
          </Side>
        </Wrapper>
      </Container>
      {toggle ? <SideBar setToggle={setToggle} toggle={toggle} /> : null}
    </>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div``;
const Navigations = styled.div`
  width: 600px;
  /* background-color: gold; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Navs = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  cursor: pointer;
  span {
    margin-left: 3px;
  }

  :hover {
    color: #e8bf0a;
    transform: scale(0.95);
  }

  &.active {
    color: #ffb400;
  }
`;

const CartDiv = styled(NavLink)`
  margin-left: 10px;
  font-size: 23px;
  transition: all 350ms;
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  :hover {
    color: #e8bf0a;
    transform: scale(0.95);
  }

  &.active {
    color: #ffb400;
  }
`;

const Side = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
