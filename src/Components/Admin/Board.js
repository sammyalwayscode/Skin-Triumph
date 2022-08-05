import React from "react";
import styled from "styled-components";
import DashBoard from "./Dashboard/DashBoard";
import SideBar from "./SideBar/SideBar";

const Home = () => {
  return (
    <Container>
      <SideBar />
      <DashBoard />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
`;
