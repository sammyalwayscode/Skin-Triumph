import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { addToCart } from "../Global/GlobalState";

const Products = () => {
  const dispatch = useDispatch();
  const [fecthProduct, setFecthProduct] = useState([]);

  const getProducts = async () => {
    const mainURL = "http://localhost:2221";
    const URL = `${mainURL}/api/product/`;

    await axios
      .get(URL)
      .then((res) => {
        setFecthProduct(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        new Swal({
          title: error.response.data.message,
          text: `Please Check and Fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        });
      });
  };

  useEffect(() => {
    getProducts();
    console.log(fecthProduct);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <ProductHero>
          <HeroText>Go Through The Best Of Our Products</HeroText>
        </ProductHero>

        <ProdCategory>
          <Category>
            <p>Product Category</p>
            <input placeholder="Select a Category" />
          </Category>
          <Prodct>All Products</Prodct>
        </ProdCategory>
        <Wrapper>
          <CardCtrl>
            {fecthProduct?.map((props) => (
              <ProductCard key={props._id}>
                <ImgDiv>
                  <img src={props.avatar} alt="" />
                </ImgDiv>
                <OtherWatch>
                  <ProductTitle>{props.productName}</ProductTitle>
                  <Butons>
                    <CartBut
                      onClick={() => {
                        dispatch(addToCart(props));
                      }}
                    >
                      Add to Cart
                    </CartBut>
                    <Price> {props.price} </Price>
                  </Butons>
                  <ShortDescrib>
                    {props.shortDescription}
                    <strong>Read More</strong>
                  </ShortDescrib>
                </OtherWatch>
              </ProductCard>
            ))}
          </CardCtrl>
        </Wrapper>
      </Container>
    </>
  );
};

export default Products;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductHero = styled.div`
  height: 300px;
  width: 100%;
  background-color: darkcyan;
  background: url("/Images/prod.jpg") repeat fixed 100%;
  margin-bottom: 60px;
  background-size: cover;
  background-position: center;
`;

const HeroText = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 85%;
`;
const ProdCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 70px;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
  input {
    width: 260px;
    font-family: poppins;
  }

  p {
    font-size: 13px;
    font-family: poppins;
    font-weight: 700;
    margin-bottom: 2px;
  }
`;
const Category = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
`;
const Prodct = styled.div`
  font-size: 15px;
  font-weight: 800;
  font-family: poppins;
  @media (max-width: 500px) {
    height: 40px;
    width: 100vw;
    color: #fff;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CardCtrl = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const ProductCard = styled.div`
  height: 100%;
  width: 260px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 20px;
  transition: all 350ms;
  /* background-color: blue; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

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
    margin: 18px 0;
  }
`;
const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 10px;
  height: 135px;
  width: 100%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  height: 30px;
  width: 100px;
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
  font-family: poppins;

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
  font-family: poppins;
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
