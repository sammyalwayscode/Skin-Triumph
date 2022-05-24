import React from "react";
import styled from "styled-components";

const Stocklist = () => {
  const stockData = [
    {
      id: 1,
      office: "God's Will Stores - Ikeja",
      address: "38 Ayebeng Street, Adenta Shopping Center, Adenta",
      phone: "+234 908 117 6026, +234 903 098 8589",
      email: "info@afribeautycollective.com",
      hours: "Tuesday – Saturday 10am – 5:30 pm",
    },
    {
      id: 1,
      office: "Spar Supersaver Stores - Ikorodu",
      address: "38 Ayebeng Street, Adenta Shopping Center",
      phone: "+234 908 117 6026, +234 903 098 8589",
      email: "info@afribeautycollective.com",
      hours: "Tuesday – Saturday 10am – 5:30 pm",
    },
    {
      id: 1,
      office: "la classic spar - Apapa",
      address: "38 Ayebeng Street, Agric Ikorudu",
      phone: "+234 908 117 6026, +234 903 098 8589",
      email: "info@afribeautycollective.com",
      hours: "Tuesday – Saturday 10am – 5:30 pm",
    },
  ];
  return (
    <Container>
      <HeroStock>Stocklist</HeroStock>
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
              <p>Tel: {props.phone} </p>
              <p>Email: {props.email} </p>
              <p>Hours: {props.hours} </p>
            </ContentHold2>
          ))}
        </OtherStores>
      </Stores>
    </Container>
  );
};

export default Stocklist;

const Container = styled.div`
  width: 100%;
  font-family: poppins;
`;

const HeroStock = styled.div`
  height: 500px;
  width: 100%;
  /* background-color: darkred; */
  background: url("/Images/stock.webp") repeat fixed 100%;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 800;
  color: #fff;
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
