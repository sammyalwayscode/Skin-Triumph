import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

const Products = () => {
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
          text: `Please Check Your NETWORK Connections`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        });
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Wrapper>
        <h4>All Products</h4>
        <CardCtrl>
          {fecthProduct?.map((props) => (
            <ProductCard key={props._id}>
              <ImgDiv to={`/boardproducts/detail/${props._id}`}>
                <img src={props.avatar} alt="" />
              </ImgDiv>
              <OtherWatch>
                <ProductTitle>{props.productName}</ProductTitle>
                <Butons>
                  <CartBut>Update...</CartBut>
                  <Price>
                    {" "}
                    <span>&#8358;</span> {props.price}
                  </Price>
                </Butons>
                <ShortDescrib>
                  {props.shortDescription}
                  <More to={`/boardproducts/detail/${props._id}`}>
                    ... View More
                  </More>
                </ShortDescrib>
              </OtherWatch>
            </ProductCard>
          ))}
        </CardCtrl>
      </Wrapper>
    </Container>
  );
};

export default Products;

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
  justify-content: center;

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
  h4 {
    font-size: 20px;
    font-weight: bold;
  }
  @media (max-width: 1150px) {
    width: 95%;
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
  font-family: poppins;
  /* background-color: blue; */
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */

  :hover {
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transform: scale(1.02); */
  }
  @media (max-width: 768px) {
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    margin: 10px;
  }
  @media (max-width: 500px) {
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    margin: 18px 0;
  }
`;
const ImgDiv = styled(NavLink)`
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
  color: #5bd395;
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
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
  /* text-align: center; */
  font-size: 12px;
  font-family: poppins;
  margin-bottom: 15px;
  strong {
    cursor: pointer;
  }
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

const More = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;
