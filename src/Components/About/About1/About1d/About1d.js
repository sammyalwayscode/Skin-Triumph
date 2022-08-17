import React from "react";
import styled from "styled-components";

const About1d = () => {
  return (
    <Container>
      <ImageDiv>
        <Image src="/Images/abt4.jpg" alt="" />
      </ImageDiv>
      <TextDiv>
        <Title>Well Crafted Research</Title>
        <Content>
          <p>
            {" "}
            Our dedicated and hardworking team of researchers ensure to use the
            best organic ingredient infuse with scientific method to create
            products that are environmental and toxin free.{" "}
          </p>

          <p>
            Be rest assured that what you buy are organically sanctify and
            scientifically proven to be save on your skin.{" "}
          </p>
        </Content>
      </TextDiv>
    </Container>
  );
};

export default About1d;

const Container = styled.div`
  width: 100%;
  /* background-color: beige; */
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  margin-bottom: 90px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const ImageDiv = styled.div`
  height: 500px;
  width: 500px;
  /* background-color: black; */
  @media (max-width: 768px) {
    height: 350px;
    margin-bottom: 30px;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const TextDiv = styled.div`
  width: 500px;
  @media (max-width: 768px) {
    text-align: center;
    width: 80%;
  }
  @media (max-width: 500px) {
    text-align: center;
    width: 90%;
  }
  /* background-color: black; */
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: #2a9d8f;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-decoration: underline;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
const Content = styled.div`
  color: gray;
  font-size: 20px;
  font-weight: 270;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
