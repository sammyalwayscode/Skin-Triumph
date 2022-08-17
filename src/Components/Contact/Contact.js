import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <Container>
        <HeroContact>Be sure to visit us</HeroContact>
        <Wrapper>
          <h2>Contact Us</h2>
          <Address>
            <AddressCard>
              <IconDiv>
                <Icon />
              </IconDiv>
              <AddressTitle>Email</AddressTitle>
              <AdressContent>skintriump@gmail.com</AdressContent>
            </AddressCard>
            <AddressCard>
              <IconDiv>
                <Icon1 />
              </IconDiv>
              <AddressTitle>Contact Address</AddressTitle>
              <AdressContent>
                No 1 Idewu Street Olodi-Aapap, Off New Road Lagos
              </AdressContent>
            </AddressCard>
            <AddressCard>
              <IconDiv>
                <Icon2 />
              </IconDiv>
              <AddressTitle>Contact Number</AddressTitle>
              <AdressContent>+234 708 909 0095</AdressContent>
            </AddressCard>
            <AddressCard>
              <IconDiv>
                <Icon3 />
              </IconDiv>
              <AddressTitle>Website</AddressTitle>
              <AdressContent>www.skincare.com</AdressContent>
            </AddressCard>
          </Address>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.2895298899143!2d3.341246441825973!3d6.4480529079348425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bd7063c5ba1%3A0x77013f8760e8d672!2s1%20Idewu%20St%2C%20Apapa%20102103%2C%20Lagos!5e0!3m2!1sen!2sng!4v1652709679602!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  font-family: poppins;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;
const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 10px;

  @media (max-width: 1200px) {
    width: 1000px;
  }
  @media (max-width: 1000px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 310px;
  }

  h2 {
    font-weight: 800;
    margin-bottom: 20px;
  }

  iframe {
    width: 70%;
    height: 600px;
    @media (max-width: 500px) {
      width: 80%;
      height: 400px;
    }
  }
`;
const HeroContact = styled.div`
  height: 300px;
  width: 100%;
  background-color: darkorange;
  background: url("/Images/ct.jpg") repeat fixed 100%;
  background-size: cover;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 800;
  color: #fff;
`;

const Address = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const AddressCard = styled.div`
  height: 200px;
  width: 270px;
  border-radius: 4px;
  margin: 8px;
  display: flex;

  align-items: center;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin-bottom: 35px;
`;
const IconDiv = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffb400;
  margin: 15px 0;
`;
const Icon = styled(HiOutlineMail)`
  font-size: 30px;
  color: #fff;
`;
const Icon1 = styled(HiOutlineLocationMarker)`
  font-size: 30px;
  color: #fff;
`;
const Icon2 = styled(FiPhoneCall)`
  font-size: 30px;
  color: #fff;
`;
const Icon3 = styled(BiWorld)`
  font-size: 30px;
  color: #fff;
`;
const AddressTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;
const AdressContent = styled.div``;
