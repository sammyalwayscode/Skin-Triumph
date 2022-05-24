import React from "react";
import styled from "styled-components";

const Home1 = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <TitOne>The Truth About</TitOne>
          <TitBrand>Skin Triumph</TitBrand>
        </Title>
        <Content>
          <p>
            Originating from Africa’s rich traditions and resources, Skintriumph
            is a 100% natural, clean beauty brand. Our skincare is made with
            natural ingredients that are sourced from sustainable local farms
            across Africa and packaged in sustainable, earth friendly packaging
          </p>
          <p>
            The brand is led and run by a Nigerian woman who truly do it all;
            from marketing and finance to research, formulation and production.
            With each product you purchase, we can together transform the lives
            of local small scale farmers, artisans and traders. Together, we can
            use commerce as a means to empower female communities and do
            business in a more beautiful way – with purpose.
          </p>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Home1;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  margin-bottom: 100px;
`;
const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const Title = styled.div`
  text-align: center;
`;
const TitOne = styled.div`
  font-size: 20px;
  font-weight: bold;
  /* font-family: "Tapestry", cursive; */
  font-family: "Water Brush", cursive;
  /* color: #e8bf0a; */
  color: #ffb400;
`;
const TitBrand = styled.div`
  font-size: 35px;
  font-family: poppins;
  font-weight: 800;
  margin-top: -10px;
  text-decoration: underline;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const Content = styled.div`
  color: #949494;
  text-align: center;
`;
