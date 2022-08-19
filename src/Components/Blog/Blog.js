import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import moment from "moment";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const [getBlog, setGetBlog] = useState([]);

  const getAllBlogs = async () => {
    const mainURL = "http://localhost:2221";
    const URL = `${mainURL}/api/blog`;

    await axios
      .get(URL)
      .then((res) => {
        setGetBlog(res.data.data);
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

  useState(() => {
    getAllBlogs();
  }, []);
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
        <Wrapper>
          <BlogCardControl>
            {getBlog?.map((props) => (
              <BlogCard key={props._id}>
                <ImgDiv to={`/blog/detail/${props._id}`}>
                  <img src={props.blogImg} alt="" />
                </ImgDiv>
                <BlogTitle> {props.blogTitle} </BlogTitle>
                <BlogDescription>{props.blogShotDes} ...</BlogDescription>
                <MoreDetail>
                  <small> {moment(props.createdAt).fromNow()} </small>
                  <NavLink to={`/blog/detail/${props._id}`}>
                    <button>Read More</button>
                  </NavLink>
                </MoreDetail>
              </BlogCard>
            ))}
          </BlogCardControl>
        </Wrapper>
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
    font-weight: 600;
  }

  @media (max-width: 500px) {
    font-size: 24px;

    strong {
      font-size: 10px;
    }
  }
`;

const Wrapper = styled.div`
  width: 85%;
`;
const BlogCardControl = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const BlogCard = styled.div`
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
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    transform: scale(1.02);
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
  /* margin-bottom: 10px; */
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
const BlogTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  /* text-align: center; */
  color: darkred;
  /* color: #ffb400; */
  transition: all 350ms;
  /* margin-bottom: 10px; */
  cursor: pointer;
`;
const BlogDescription = styled.div`
  /* text-align: center; */
  font-size: 12px;
  font-family: poppins;
  margin-bottom: 15px;
`;
const MoreDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  small {
    font-size: 10px;
    font-weight: 600;
    color: red;
  }

  button {
    border: 0;
    outline: none;
    font-size: 10px;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    border-radius: 2px;
  }
`;
