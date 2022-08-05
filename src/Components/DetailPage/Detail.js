import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Detail = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <ImageDiv>
            <img src="/Images/img8.jpg" alt="" />
          </ImageDiv>
          <TextDetail>
            <Title>STRETCH MARK BODY CREAM</Title>
            <Price>
              {" "}
              <strong>Price:</strong> <i>N12, 300</i>{" "}
            </Price>
            <Content>
              <p>
                Stretch marks is the cause of skin breakage in many individuals
                and a lot of product claim to treat this condition but we use a
                different approach to get result to this condition since we
                understand the first cause of stretch marks on skin. Stretch
                marks are the inability of the skin to returned back to its
                previous structure and formation this is mostly caused by after
                child birth, bleaching process and whitening creams, increased
                in body mass index all these are external factors and
                environmental factors also, internal factors can stretch marks
                such as reduction in collagen and elastin a type of skin protein
                that gives the skin it firmness and edacity of stretching front
                and back.
              </p>
              <p>
                This product contains 28 minerals such mustard seed oil,bay
                leave and essential oils that was developed by our chemists. In
                this formulation both the external and internal factors are
                taken care of by balancing both making our product unique and
                result orientated in treating stretch mark challenges ,our
                product gives immediate results right from day one of
                application without delay giving you a increased in collagen and
                elastin returning the skin to its original state.
              </p>
              <p>
                The uniqueness of this product was source from areas known to
                achieve results in skin stretching this product merge the
                barrier caused by external and internal factor by replacing the
                lost nutrients and increased the skin protein. This product is
                one of its kinds as it is proven to work immensely for all skin
                type
              </p>
            </Content>
            <MoreBtn>
              <QuantityDiv>
                <CaclQuanty>+</CaclQuanty>
                <MainQuantity>2</MainQuantity>
                <CaclQuanty bg>-</CaclQuanty>
              </QuantityDiv>
              <CartAddBtn>Add To Cart</CartAddBtn>
            </MoreBtn>
          </TextDetail>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Detail;

const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    justify-content: center;
  }
  @media (max-width: 1200px) {
    width: 85%;
  }
`;
const ImageDiv = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 600px) {
    height: 300px;
    width: 100%;
    object-fit: contain;
  }
`;
const TextDetail = styled.div`
  width: 600px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 800;
  margin: 10px 0;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const Price = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
`;
const Content = styled.div`
  color: #aaa;
`;

const QuantityDiv = styled.div`
  display: flex;
  width: 120px;
  /* background-color: aliceblue; */
  justify-content: space-around;
  margin-right: 20px;
`;
const CaclQuanty = styled.button`
  padding: 2px 13px;
  background-color: ${({ bg }) => (bg ? "red" : "green")};
  border: 0;
  outline: none;
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
`;
const MainQuantity = styled.div`
  height: 28px;
  width: 28px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
`;

const MoreBtn = styled.div`
  width: 100%;
  display: flex;
`;

const CartAddBtn = styled.button`
  outline: none;
  border: 0;
  flex: 1;
  background-color: #000;
  color: #fff;
  padding: 6px 0;
`;
