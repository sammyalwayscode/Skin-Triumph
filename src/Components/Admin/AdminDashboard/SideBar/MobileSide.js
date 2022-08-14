import React, { useContext } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { RiParentLine } from "react-icons/ri";
import { MdAccountTree, MdSubject } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FaPowerOff } from "react-icons/fa";
import styled from "styled-components";
import { GlobalState } from "../../../ContexGlobal/Global";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "../../../Global/GlobalState";
import { useDispatch } from "react-redux";

const MobileSide = () => {
  const { mobDisplay } = useContext(GlobalState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      {mobDisplay ? (
        <MobileContainer>
          <MobileWrapper>
            <NavsCtrl>
              <MainNav to="/overview">
                <Nav>
                  <IconHold>
                    <AiFillDashboard />
                  </IconHold>
                  <span>Overview</span>
                </Nav>
              </MainNav>
              <MainNav to="/customers">
                <Nav>
                  <IconHold>
                    <GiTeacher />
                  </IconHold>
                  <span>Costomers</span>
                </Nav>
              </MainNav>
              <MainNav to="/uploadproducts">
                <Nav>
                  <IconHold>
                    <IoIosPeople />
                  </IconHold>
                  <span>Upload Products</span>
                </Nav>
              </MainNav>
              <MainNav to="/boardproducts">
                <Nav>
                  <IconHold>
                    <RiParentLine />
                  </IconHold>
                  <span>Products</span>
                </Nav>
              </MainNav>
              <MainNav to="/orders">
                <Nav>
                  <IconHold>
                    <MdAccountTree />
                  </IconHold>
                  <span>Orders</span>
                </Nav>
              </MainNav>
              <MainNav to="/boardblogs">
                <Nav>
                  <IconHold>
                    <SiGoogleclassroom />
                  </IconHold>
                  <span>Blogs</span>
                </Nav>
              </MainNav>
              <MainNav to="/boardstocklist">
                <Nav>
                  <IconHold>
                    <MdSubject />
                  </IconHold>
                  <span>Stocklist</span>
                </Nav>
              </MainNav>
              <MainNavOut
                onClick={() => {
                  dispatch(signOut());
                  navigate("/");
                }}
              >
                <Nav>
                  <IconHold>
                    <FaPowerOff />
                  </IconHold>
                  <span>Log Out</span>
                </Nav>
              </MainNavOut>
            </NavsCtrl>
          </MobileWrapper>
        </MobileContainer>
      ) : null}
    </div>
  );
};

export default MobileSide;

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    /* background-color: darkorange; */
    background-color: #000;
    width: 200px;
    position: absolute;
    font-family: poppins;
  }
`;
const MobileWrapper = styled.div``;

const NavsCtrl = styled.div``;
const MainNav = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  text-decoration: none;
  /* border-top: 1px solid gray; */
  /* border-bottom: 1px solid gray; */

  cursor: pointer;
`;

const IconHold = styled.section`
  color: #ffa301;
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
    text-decoration: none;
  }
`;

const MainNavOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;
