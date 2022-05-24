import React from "react";
import styled from "styled-components";

const About1b = () => {
  return (
    <Container>
      <ImageDiv>
        <Image src="/Images/ab2.jpeg" alt="" />
      </ImageDiv>
      <TextDiv>
        <Title>Uniqueness</Title>
        <Content>
          <p>
            {" "}
            Our product quality is unique in its right and are appreciated by
            those who knows how to lavished and pamper their skins in style. Our
            product are skin friendly and gentle for all skin types because of
            its effectiveness.{" "}
          </p>

          <p>
            Immediately you applied our product you start having results because
            our drive are result oriented. Also, we formulate policies to ensure
            that all ingredients are toxin free and non cancerous induce
            ingredients.{" "}
          </p>
        </Content>
      </TextDiv>
    </Container>
  );
};

export default About1b;

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
