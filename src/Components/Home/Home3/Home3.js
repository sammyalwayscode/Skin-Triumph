import React from "react";
import styled from "styled-components";

const Home3 = () => {
  return (
    <div>
      <Container>
        <Content>Parallax</Content>
      </Container>
    </div>
  );
};

export default Home3;

const Container = styled.div`
  background: url("./Images/new1.jpg") repeat fixed 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 100px;
`;
const Content = styled.div`
  height: 80vh;
`;
