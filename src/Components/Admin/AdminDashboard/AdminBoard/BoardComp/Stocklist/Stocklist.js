import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

const Stocklist = () => {
  const [stockData, setStockData] = useState([]);

  const getStock = async () => {
    const mainURL = "http://localhost:2221";
    const URL = `${mainURL}/api/stocklist/`;

    await axios
      .get(URL)
      .then((res) => {
        console.log(res.data.data);
        setStockData(res.data.data);
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
    getStock();
  }, []);

  return (
    <Container>
      <Wrapper>
        <h4>Stocklist</h4>
        <NavLink to="/boardstocklist/newstore">
          <button>Add New Stocklist</button>
        </NavLink>
        <Stores>
          <MainStore>
            <h2>Flagship Store</h2>

            <ContentHold>
              <div>Skin Triumph Stores - Olodi-Apapa</div>
              <p>38 Ayebeng Street, Adenta Shopping Center, Adenta</p>
              <p>Tel:+234 908 117 6026, +234 903 098 8589 </p>
              <p>Email: info@afribeautycollective.com</p>
              <p>Hours: Tuesday – Saturday 10am – 5:30 pm</p>
            </ContentHold>
          </MainStore>

          <OtherStores>
            <h2>Our Other Stores</h2>
            {stockData?.map((props) => (
              <ContentHold2 key={props._id}>
                <div> {props.office} </div>
                <p> {props.address} </p>
                <p>Tel: {props.phoneNo} </p>
                <p>Email: {props.email} </p>
                <p>Hours: {props.hours} </p>
              </ContentHold2>
            ))}
          </OtherStores>
        </Stores>
      </Wrapper>
    </Container>
  );
};

export default Stocklist;

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
    font-weight: 700;
    margin: 10px 0;
  }

  button {
    background-color: #000;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 600;
    border-radius: 2px;
    transition: all 350ms;
    /* margin: 20px 0; */
    font-size: 12px;
    text-decoration: none;
    padding: 4px 17px;

    :hover {
      transform: scale(0.94);
      color: #e8bf0a;
    }
  }
  @media (max-width: 1150px) {
    width: 95%;
  }
`;

const Stores = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainStore = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h2 {
    margin-bottom: 20px;
    font-weight: 800;
  }
`;
const OtherStores = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h2 {
    margin-bottom: 20px;
    font-weight: 800;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;
const ContentHold = styled.div`
  div {
    margin-bottom: 10px;
    color: red;
    font-weight: 700;
    color: #ffb400;
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
  p {
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
`;
const ContentHold2 = styled.div`
  margin-bottom: 40px;
  div {
    margin-bottom: 10px;
    color: red;
    font-weight: 700;
    color: #ffb400;
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
  p {
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
`;
