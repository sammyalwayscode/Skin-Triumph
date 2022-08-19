import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const BoardDetailBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
          <ButtonHold>
            <Button>Update Blog</Button>
            <Button bg>Delete Blog</Button>
          </ButtonHold>
        </BlogDetail>
      </Wrapper>
    </Container>
  );
};

export default BoardDetailBlog;

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
  @media (max-width: 1150px) {
    width: 95%;
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

const Button = styled.button`
  height: 35px;
  width: 120px;
  background-color: ${({ bg }) => (bg ? "red" : "#000")};
  color: #fff;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 12px;
  border-radius: 2px;
  transition: all 350ms;

  :hover {
    transform: scale(0.94);
    color: #e8bf0a;
  }
`;

const ButtonHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;
