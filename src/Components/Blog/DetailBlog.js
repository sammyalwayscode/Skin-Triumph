import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import moment from "moment";

const DetailBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogTail, setBlogTail] = useState({});

  const getBlogDetail = async () => {
    const mainURL = "http://localhost:2221";
    const URL = `${mainURL}/api/blog/${id}`;

    await axios
      .get(URL)
      .then((res) => {
        setBlogTail(res.data.data);
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
    getBlogDetail();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <BlogDetail>
            <ImgDiv>
              <img src={blogTail.blogImg} alt="" />
            </ImgDiv>
            <Title> {blogTail.blogTitle} </Title>
            <Description>
              <p> {blogTail.descPragraphOne}</p>
              <p> {blogTail.descPragraphTwo}</p>
              <p> {blogTail.descPragraphThree}</p>
            </Description>
            <MoreDetail>
              <small> {moment(blogTail.createdAt).fromNow()} </small>
              <button
                onClick={() => {
                  navigate(-1);
                }}
              >
                Go Back
              </button>
            </MoreDetail>
          </BlogDetail>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default DetailBlog;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 70px;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 85%;

  @media (max-width: 500px) {
    width: 90%;
  }
`;
const BlogDetail = styled.div``;
const ImgDiv = styled.div`
  height: 400px;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin: 10px 0;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;
const Description = styled.div``;
const MoreDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 30px 0;

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
