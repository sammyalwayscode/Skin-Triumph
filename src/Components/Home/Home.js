import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "./HeroPage/Hero";
import Home1 from "./Home1/Home1";
import Home2 from "./Home2/Home2";
import Home3 from "./Home3/Home3";
import Home3b from "./Home3b/Home3b";
import Home4 from "./Home4/Home4";
import Home5 from "./Home5/Home5";
import Home6 from "./Home6/Home6";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
        <Home3b />
        <Home5 />
        {/* <Home6 /> */}
      </Container>
      <Footer />
    </>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 70px;
`;
