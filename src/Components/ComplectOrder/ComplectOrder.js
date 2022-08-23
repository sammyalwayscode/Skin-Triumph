import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ComplectOrder = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <img src="/Images/verify.gif" alt="" />
          <Text>
            <h2>Thank you from Skintriumph</h2>
            <strong>Your Order has been Confirmed</strong>
            <p>
              {" "}
              Thanks for ordering from skintriumph, the customer service will
              call you to confirm order info within 1-24 hours, please keep your
              phone open . You will receive an email with an orderOTP. Your
              order will be delivered in 3-7 business day. Kindly wait for it!
            </p>
            <strong>Thanks 👍</strong>
            <br />
            <NavLink to="/">
              <button>Back Home</button>
            </NavLink>
          </Text>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default ComplectOrder;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  padding-top: 70px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 300px;
  }
`;
const Text = styled.div`
  width: 70%;
  text-align: center;
  h2 {
    font-weight: bold;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
