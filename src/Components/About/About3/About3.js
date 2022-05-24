import React from "react";
import styled from "styled-components";

const About3 = () => {
  const data = [
    {
      id: 1,
      pix: "/Images/elo.jpeg",
      title: "ELoquence",
      content:
        " We stand by our promise to produce products that are unique and different to the finest standards of greatness through selective medium we pick the finest and best ingredients to formulate stringent product",
    },
    {
      id: 1,
      pix: "/Images/elo.jpeg",
      title: "ELoquence",
      content:
        " We stand by our promise to produce products that are unique and different to the finest standards of greatness through selective medium we pick the finest and best ingredients to formulate stringent product",
    },
    {
      id: 1,
      pix: "/Images/elo.jpeg",
      title: "ELoquence",
      content:
        " We stand by our promise to produce products that are unique and different to the finest standards of greatness through selective medium we pick the finest and best ingredients to formulate stringent product",
    },
    {
      id: 1,
      pix: "/Images/elo.jpeg",
      title: "ELoquence",
      content:
        " We stand by our promise to produce products that are unique and different to the finest standards of greatness through selective medium we pick the finest and best ingredients to formulate stringent product",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Title>WHY SKINTRIUMPH???</Title>
        <CardCtrl>
          {data?.map((props) => (
            <Card key={props.id}>
              <Image src={props.pix} />
              <WhyTitle>{props.title}</WhyTitle>
              <Content>{props.content}</Content>
            </Card>
          ))}
        </CardCtrl>
      </Wrapper>
    </Container>
  );
};

export default About3;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  margin-bottom: 100px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 800;
  font-family: poppins;
  margin-bottom: 30px;
`;
const CardCtrl = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  height: 350px;
  width: 260px;
  /* background-color: #d28e43; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;
const Image = styled.img`
  height: 150px;
  width: 100%;
  background-color: aqua;
  object-fit: cover;
`;
const WhyTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 800;
  color: #000;
`;
const Content = styled.div`
  width: 90%;
  height: 200px;
  font-size: 13px;
  color: #000;
`;
