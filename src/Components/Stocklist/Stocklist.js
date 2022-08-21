import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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
    <>
      <Header />

      <Container>
        <HeroStock>
          <HeroText>Stocklist</HeroText>
        </HeroStock>
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
              <ContentHold2 key={props.id}>
                <div> {props.office} </div>
                <p> {props.address} </p>
                <p>Tel: {props.phoneNo} </p>
                <p>Email: {props.email} </p>
                <p>Hours: {props.hours} </p>
              </ContentHold2>
            ))}
          </OtherStores>
        </Stores>
      </Container>
      <Footer />
    </>
  );
};

export default Stocklist;

const Container = styled.div`
  width: 100%;
  font-family: poppins;
  padding-top: 70px;
`;

const HeroStock = styled.div`
  height: 500px;
  width: 100%;
  /* background-color: darkred; */
  background: url("/Images/stock.jpg") repeat fixed 100%;
  background-position: top;
  background-size: cover;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 800;
  color: #fff;
`;

const HeroText = styled.div`
  height: 100%;
  width: 100%;
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
  }
  p {
    @media (max-width: 500px) {
      font-size: 14px;
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
  }
  p {
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;
