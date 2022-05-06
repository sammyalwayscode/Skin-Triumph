import React from "react";
import styled from "styled-components";

const Home3b = () => {
  return (
    <div>
      <Container>
        <Content>Parallax</Content>
      </Container>
    </div>
  );
};

export default Home3b;

const Container = styled.div`
  background: url("./Images/new1.jpg") repeat fixed 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Content = styled.div`
  height: 80vh;
`;
