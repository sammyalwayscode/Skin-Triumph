import React from "react";
import styled from "styled-components";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Home3 = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Our Vision</Title>

          <Content>
            {/* <Quote /> */}
            To formulate products that are unique different and elegant as we
            quest for innovation and quality for individual’s that identify with
            our principles.
            {/* <Quote1 /> */}
          </Content>
        </Wrapper>
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
  font-family: poppins;
`;
const Wrapper = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 10px;
  color: darkorange;
  @media (max-width: 800px) {
    font-size: 21px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
const Content = styled.span`
  width: 800px;
  font-size: 23px;
  text-align: center;
  @media (max-width: 800px) {
    width: 90%;
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
// const Quote = styled(ImQuotesLeft)`
//   margin-right: 10px;
//   margin-top: -10px;
// `;
// const Quote1 = styled(ImQuotesRight)`
//   margin-left: 10px;
//   margin-top: -10px;
// `;
