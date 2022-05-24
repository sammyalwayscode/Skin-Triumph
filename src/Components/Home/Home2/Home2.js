import React from "react";
import styled from "styled-components";

const Home2 = () => {
  const newData = [
    {
      id: 1,
      product: "Hibiscus Bathing Soap Skin Enhancer",
      price: 7800.0,
      detail:
        "Skintriumph Hibiscus soap fight germs and bacterial from skin surface, also fight germs that cause body odor and eczema",
      image: "./Images/eee.jpg",
    },
    {
      id: 2,
      product: "Hibiscus Bathing Soap Skin Enhancer",
      price: 7800.0,
      detail:
        "Skintriumph Hibiscus soap fight germs and bacterial from skin surface, also fight germs that cause body odor and eczema",
      image: "./Images/new1.jpg",
    },
    {
      id: 3,
      product: "Hibiscus Bathing Soap Skin Enhancer",
      price: 7800.0,
      detail:
        "Skintriumph Hibiscus soap fight germs and bacterial from skin surface, also fight germs that cause body odor and eczema",
      image: "./Images/bbb.jpg",
    },
    {
      id: 4,
      product: "Hibiscus Bathing Soap Skin Enhancer",
      price: 7800.0,
      detail:
        "Skintriumph Hibiscus soap fight germs and bacterial from skin surface, also fight germs that cause body odor and eczema",
      image: "./Images/new4.jpg",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Title>Shop Our New Release</Title>
        <NewProducts>
          {newData?.map((props) => (
            <ProductCard key={props.id}>
              <ImgDiv>
                <img src={props.image} alt="" />
                <div>New</div>
              </ImgDiv>
              <OtherWatch>
                <ProductTitle>Hibiscus Bathing Soap Skin Enhancer</ProductTitle>
                <Butons>
                  <CartBut>Add to Cart</CartBut>
                  <Price>N7,800.00</Price>
                </Butons>
                <ShortDescrib>
                  Skintriumph Hibiscus soap fight germs and bacterial from skin
                  surface, also fight germs that cause body odor and eczema.
                </ShortDescrib>
              </OtherWatch>
            </ProductCard>
          ))}
        </NewProducts>
        <Button>See More</Button>
      </Wrapper>
    </Container>
  );
};

export default Home2;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 30px;
  /* color: #e8bf0a; */
  color: #ffb400;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
const NewProducts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* background-color: red; */
  margin-bottom: 25px;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const ProductCard = styled.div`
  height: 100%;
  width: 280px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 20px;
  transition: all 350ms;
  /* background-color: blue; */

  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transform: scale(1.02);
  }
  @media (max-width: 768px) {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 10px;
  }
  @media (max-width: 500px) {
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    margin: 10px 0;
  }
`;
const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 10px;
  height: 185px;
  div {
    height: 20px;
    width: 35px;

    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
    border-radius: 0 0 0 4px;
  }
  img {
    width: 100%;
    height: 185px;
    object-fit: contain;
    border-radius: 7px 7px 0 0;
  }
`;
const OtherWatch = styled.div`
  width: 90%;
`;
const ProductTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  text-align: center;
  /* color: #e8bf0a; */
  color: #ffb400;
  transition: all 350ms;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    color: #000;
  }
`;
const Butons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const CartBut = styled.button`
  padding: 5px 15px;
  background-color: #000;
  color: #fff;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 3px;
  outline: none;
  border: none;
  transition: all 350ms;

  :hover {
    transform: scale(0.94);
  }
`;
const Price = styled.div`
  height: 30px;
  width: 120px;
  /* background-color: #000; */
  color: #000;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  border-radius: 3px;
  text-decoration: underline;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    /* color: #e8bf0a; */
  }
`;
const ShortDescrib = styled.div`
  text-align: center;
  font-size: 12px;
  margin-bottom: 15px;
`;
const Button = styled.button`
  height: 45px;
  width: 120px;
  background-color: #000;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  transition: all 350ms;

  :hover {
    transform: scale(0.94);
    color: #e8bf0a;
  }
`;
