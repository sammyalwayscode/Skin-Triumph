import React from "react";
import styled from "styled-components";

const About1c = () => {
  return (
    <Container>
      <ImageDiv>
        <Image src="/Images/nat.jpg" alt="" />
      </ImageDiv>
      <TextDiv>
        <Title>Natural Ingredents</Title>
        <Content>
          <p>
            {" "}
            We ensure to send all ingredients to standardize routine of chemical
            matting in laboratory before commencement of production. Since most
            skin care product are heavily loaded with chemicals that are harmful
            to the skin resulting into internal and external damage for that
            reason we decided to use extensively natural base organic
            ingredient.{" "}
          </p>

          <p>
            Our passion and dream for our products and establishment is to
            create a product that can lavished the skin with elegance which
            enables all individuals to express their different personality and
            attributes. We make use of natural finest ingredients that are free
            from toxins and disease inoculation.{" "}
          </p>
        </Content>
      </TextDiv>
    </Container>
  );
};

export default About1c;

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
