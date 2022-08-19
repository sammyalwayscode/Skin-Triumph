import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

const BoardProductDes = () => {
  const [getProductDetails, setGetProductDetails] = useState({});
  const { id } = useParams();

  const getDetailProduct = async () => {
    const mainURL = "http://localhost:2221";
    const URL = `${mainURL}/api/product/${id}`;

    await axios
      .get(URL)
      .then((res) => {
        setGetProductDetails(res.data.data);
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
    getDetailProduct();
  }, []);
  return (
    <Container>
      <Wrapper>
        <ImageDiv>
          <img src={getProductDetails.avatar} alt="" />
        </ImageDiv>
        <TextDetail>
          <Title>{getProductDetails.productName}</Title>
          <Price>
            {" "}
            Price:{" "}
            <strong>
              <span>&#8358;</span> {getProductDetails.price}
            </strong>{" "}
          </Price>
          <Content>
            <p>{getProductDetails.productDescription}</p>
            {/* <p>
                  This product contains 28 minerals such mustard seed oil,bay
                  leave and essential oils that was developed by our chemists.
                  In this formulation both the external and internal factors are
                  taken care of by balancing both making our product unique and
                  result orientated in treating stretch mark challenges ,our
                  product gives immediate results right from day one of
                  application without delay giving you a increased in collagen
                  and elastin returning the skin to its original state.
                </p>
                <p>
                  The uniqueness of this product was source from areas known to
                  achieve results in skin stretching this product merge the
                  barrier caused by exter
                  nal and internal factor by replacing
                  the lost nutrients and increased the skin protein. This
                  product is one of its kinds as it is proven to work immensely
                  for all skin type
                </p> */}
          </Content>
          <MoreBtn>
            <CartAddBtn>Update Prodct </CartAddBtn>
            <CartAddBtn bg>Delete Product</CartAddBtn>
          </MoreBtn>
        </TextDetail>
      </Wrapper>
    </Container>
  );
};

export default BoardProductDes;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  height: 100%;
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f8f8f9;
  font-family: poppins;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 770px) {
    margin-left: 50px;
    width: calc(100vw - 50px);
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;
const Wrapper = styled.div`
  width: 1150px;
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
  @media (max-width: 1150px) {
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
  strong {
    color: #5bd395;
  }
`;
const Content = styled.div`
  color: gray;
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
  background-color: ${({ bg }) => (bg ? "red" : "#000")};
  color: #fff;
  padding: 6px 0;
  margin: 10px;
  font-size: 15px;
  font-weight: bold;
`;
