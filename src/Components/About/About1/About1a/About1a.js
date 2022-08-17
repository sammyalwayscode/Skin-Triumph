import React from "react";
import styled from "styled-components";

const About1a = () => {
  return (
    <Container>
      <ImageDiv>
        <Image src="/Images/abt1.jpg" alt="" />
      </ImageDiv>
      <TextDiv>
        <Title>Standard</Title>
        <Content>
          <p>
            {" "}
            Skin triumph products have built a strong reputation for quality,
            uniqueness and elegance since 2018 as a technologically advance and
            innovative product that have gained a reputation for luxury elegance
            and superior quality.{" "}
          </p>

          <p>
            We stand by our promise to produce products that are unique and
            different to the finest standards of greatness through selective
            medium we pick the finest and best ingredients to formulate
            stringent product that please the standard of those that love to
            stand out in taste and elegances.{" "}
          </p>
        </Content>
      </TextDiv>
    </Container>
  );
};

export default About1a;

const Container = styled.div`
  width: 100%;
  /* background-color: beige; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 90px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const ImageDiv = styled.div`
  height: 500px;
  width: 500px;
  background-color: black;
  border-radius: 10px;
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
  font-family: poppins;
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
  color: #264653;
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
