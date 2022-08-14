import React from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";

const Home = () => {
  return (
    <Container>
      <Header />
      <SideBar />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
`;
