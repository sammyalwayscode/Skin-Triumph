import React from "react";
import styled from "styled-components";
import { AiFillDashboard } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { RiParentLine } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../../Global/GlobalState";

const Desktop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <NavsCtrl>
          <MainNav to="/overview">
            <Nav>
              <IconHold>
                <AiFillDashboard />
              </IconHold>
              <span>Overviwe</span>
            </Nav>
          </MainNav>
          <MainNav to="/customers">
            <Nav>
              <IconHold>
                <GiTeacher />
              </IconHold>
              <span>Customers</span>
            </Nav>
          </MainNav>
          <MainNav to="/uploadproducts">
            <Nav>
              <IconHold>
                <IoIosPeople />
              </IconHold>
              <span>Upload Product</span>
            </Nav>
          </MainNav>
          <MainNav to="/boardproducts">
            <Nav>
              <IconHold>
                <IoIosPeople />
              </IconHold>
              <span>Products</span>
            </Nav>
          </MainNav>
          <MainNav to="/orders">
            <Nav>
              <IconHold>
                <RiParentLine />
              </IconHold>
              <span>Orders</span>
            </Nav>
          </MainNav>
          <MainNav to="/boardblogs">
            <Nav>
              <IconHold>
                <RiParentLine />
              </IconHold>
              <span>Blogs</span>
            </Nav>
          </MainNav>
          <MainNav to="/boardstocklist">
            <Nav>
              <IconHold>
                <RiParentLine />
              </IconHold>
              <span>Stocklist</span>
            </Nav>
          </MainNav>

          <MainNavOut>
            <Nav
              onClick={() => {
                dispatch(signOut());
                navigate("/");
              }}
            >
              <IconHold>
                <FaPowerOff />
              </IconHold>
              <span>Log Out</span>
            </Nav>
          </MainNavOut>
        </NavsCtrl>
      </Wrapper>
    </Container>
  );
};

export default Desktop;

const Container = styled.div`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  /* background-color: #031e3e; */
  background-color: #000;
  width: 180px;
  font-family: poppins;
  position: fixed;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div``;

const NavsCtrl = styled.div``;
const MainNav = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  /* border-top: 1px solid gray; */
  /* border-bottom: 1px solid gray; */
  cursor: pointer;

  &.active {
    background-color: #ffa301;
  }
`;

const MainNavOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  /* border-top: 1px solid gray; */
  /* border-bottom: 1px solid gray; */
  cursor: pointer;

  &.active {
    background-color: #ffa301;
  }
`;

const IconHold = styled.section`
  color: #ffa301;
  /* &.active {
    color: red;
  } */
`;

const Nav = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  span {
    font-size: x-small;
    font-weight: 400;
    margin-left: 5px;
    color: #fff;
  }
`;
