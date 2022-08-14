import React, { useState } from "react";
import styled from "styled-components";
import {
  AiFillDashboard,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { RiParentLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { HiPresentationChartBar } from "react-icons/hi";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../../Global/GlobalState";

const TabletSide = () => {
  const [tabDiaplay, setTabDisplay] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tabDiaplayHandler = () => {
    setTabDisplay(!tabDiaplay);
  };

  return (
    <div>
      {" "}
      {tabDiaplay ? (
        <TabDisplayContainer>
          <TabDisplayWrapper>
            <TabBar onClick={tabDiaplayHandler}>
              <AiOutlineMenuUnfold />
            </TabBar>
            <NavIconCtrl>
              <MainIconNav to="/overview">
                <IconNav>
                  <AiFillDashboard />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/customers">
                <IconNav>
                  <GiTeacher />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/uploadproducts">
                <IconNav>
                  <IoIosPeople />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/boardproducts">
                <IconNav>
                  <RiParentLine />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/orders">
                <IconNav>
                  <SiGoogleclassroom />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/boardblogs">
                <IconNav>
                  <HiPresentationChartBar />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/boardstocklist">
                <IconNav>
                  <BsCalendar2EventFill />
                </IconNav>
              </MainIconNav>
              <MainIconNavOut
                onClick={() => {
                  dispatch(signOut());
                  navigate("/");
                }}
              >
                <IconNav>
                  <FaPowerOff />
                </IconNav>
              </MainIconNavOut>
            </NavIconCtrl>
          </TabDisplayWrapper>
        </TabDisplayContainer>
      ) : (
        <ContainerDisplay>
          <WrapperDiaplay>
            <Bar onClick={tabDiaplayHandler}>
              <AiOutlineMenuFold />
            </Bar>
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
                    <SiGoogleclassroom />
                  </IconHold>
                  <span>Orders</span>
                </Nav>
              </MainNav>
              <MainNav to="/boardblogs">
                <Nav>
                  <IconHold>
                    <HiPresentationChartBar />
                  </IconHold>
                  <span>Blogs</span>
                </Nav>
              </MainNav>
              <MainNav to="/boardstocklist">
                <Nav>
                  <IconHold>
                    <HiPresentationChartBar />
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
          </WrapperDiaplay>
        </ContainerDisplay>
      )}
    </div>
  );
};

export default TabletSide;

const TabDisplayContainer = styled.div`
  display: none;
  @media (max-width: 770px) {
    display: block;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    /* background-color: hotpink; */
    background-color: #000;
    width: 50px;
    position: fixed;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const TabDisplayWrapper = styled.div``;
const ContainerDisplay = styled.div`
  display: none;
  @media (max-width: 770px) {
    display: block;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    /* background-color: gold; */
    background-color: #000;
    width: 180px;
    position: fixed;
    font-family: poppins;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
const WrapperDiaplay = styled.div``;

const TabBar = styled.div`
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const NavIconCtrl = styled.div``;
const MainIconNav = styled(NavLink)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    background-color: #ffa301;
  }
`;

const MainIconNavOut = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconNav = styled.div`
  font-size: 20px;
  color: #ffa301;
`;

const Bar = styled.div`
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

const NavsCtrl = styled.div``;
const MainNav = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;

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
  }
`;
