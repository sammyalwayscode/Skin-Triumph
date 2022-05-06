import React from "react";
import styled from "styled-components";

const About1 = () => {
  return (
    <Container>
      <Wrapper>
        <Title>THE BRAND</Title>
        <Content>
          <p>
            Skin triumph products have built a strong reputation for quality,
            uniqueness and elegance since 2018 as a technologically advance and
            innovative product that have gained a reputation for luxury elegance
            and superior quality. We stand by our promise to produce products
            that are unique and different to the finest standards of greatness
            through selective medium we pick the finest and best ingredients to
            formulate stringent product that please the standard of those that
            love to stand out in taste and elegances. Our product quality is
            unique in its right and are appreciated by those who knows how to
            lavished and pamper their skins in style. Our product are skin
            friendly and gentle for all skin types because of its effectiveness.
            Immediately you applied our product you start having results because
            our drive are result oriented. Also, we formulate policies to ensure
            that all ingredients are toxin free and non cancerous induce
            ingredients.
          </p>
          <p>
            We ensure to send all ingredients to standardize routine of chemical
            matting in laboratory before commencement of production. Since most
            skin care product are heavily loaded with chemicals that are harmful
            to the skin resulting into internal and external damage for that
            reason we decided to use extensively natural base organic
            ingredient. Our passion and dream for our products and establishment
            is to create a product that can lavished the skin with elegance
            which enables all individuals to express their different personality
            and attributes. We make use of natural finest ingredients that are
            free from toxins and disease inoculation. Our dedicated and
            hardworking team of researchers ensure to use the best organic
            ingredient infuse with scientific method to create products that are
            environmental and toxin free. Be rest assured that what you buy are
            organically sanctify and scientifically proven to be save on your
            skin.
          </p>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default About1;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 60%;
  text-align: center;
  margin: 70px 0;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 800;
  color: #ffb400;
  margin-bottom: 25px;
`;
const Content = styled.div`
  font-size: 16px;
  color: #000;
`;
