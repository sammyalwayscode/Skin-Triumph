import React from "react";
import styled from "styled-components";

const DashBoard = () => {
  return (
    <Container>
      <Wrapper>DashBoard</Wrapper>
    </Container>
  );
};

export default DashBoard;

const Container = styled.div`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  background-color: #f0f1f3;
  flex: 1;
  /* height: 100%; */
`;
const Wrapper = styled.div``;
