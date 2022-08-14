import React from "react";
import styled from "styled-components";

const Overview = () => {
  return (
    <Container>
      <Wrapper>
        <h5>Overview</h5>
        <TopContainer>
          <InnerTop1>
            <SBox1>
              <SalesBox>
                <SalesIcon>Icon</SalesIcon>
                <SalesNumText>
                  <Num>1,995</Num>
                  <Text>Total Sales</Text>
                </SalesNumText>
              </SalesBox>
              <SalesBox>
                <SalesIcon>Icon</SalesIcon>
                <SalesNumText>
                  <Num>1,995</Num>
                  <Text>Total Sales</Text>
                </SalesNumText>
              </SalesBox>
            </SBox1>
            <SBox2>
              <SalesBox>
                <SalesIcon>Icon</SalesIcon>
                <SalesNumText>
                  <Num>1,995</Num>
                  <Text>Total Sales</Text>
                </SalesNumText>
              </SalesBox>
              <SalesBox>
                <SalesIcon>Icon</SalesIcon>
                <SalesNumText>
                  <Num>1,995</Num>
                  <Text>Total Sales</Text>
                </SalesNumText>
              </SalesBox>
            </SBox2>
          </InnerTop1>
          <InnerTop2>TopTwo</InnerTop2>
        </TopContainer>
        <ButtomContainer>ButtomContainer</ButtomContainer>
      </Wrapper>
    </Container>
  );
};

export default Overview;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  height: 100%;
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f8f8f9;
  font-family: poppins;
  display: flex;
  justify-content: center;

  @media (max-width: 770px) {
    margin-left: 50px;
    width: calc(100vw - 50px);
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;
const Wrapper = styled.div`
  width: 1150px;
  @media (max-width: 1150px) {
    width: 95%;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const InnerTop1 = styled.div`
  display: flex;
`;
const SBox1 = styled.div``;
const SBox2 = styled.div``;
const SalesBox = styled.div`
  height: 100px;
  width: 260px;
  background-color: darkcyan;
  margin: 10px;
`;
const SalesIcon = styled.div``;
const SalesNumText = styled.div``;
const Num = styled.div``;
const Text = styled.div``;
const InnerTop2 = styled.div``;
const ButtomContainer = styled.div``;
