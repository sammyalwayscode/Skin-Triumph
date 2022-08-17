import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Blog = () => {
  return (
    <>
      <Header />
      <Container>
        <BlogHero>
          <HeroText>
            Skintriumph Blog Page
            <strong>The Official Blog Page of @skorganics</strong>
          </HeroText>
        </BlogHero>
        <Wrapper>Blogs</Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

const BlogHero = styled.div`
  height: 300px;
  width: 100%;
  background-color: darkcyan;
  background: url("/Images/blo.jpg") repeat fixed 100%;
  margin-bottom: 60px;
  background-size: cover;
  background-position: center;
`;

const HeroText = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  font-size: 30px;
  font-weight: 800;
  text-align: center;

  strong {
    font-size: 12px;
  }
`;

const Wrapper = styled.div``;
