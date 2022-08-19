import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";

const Blog = () => {
  const [getBlog, setGetBlog] = useState([]);

  const gettingBlog = async () => {
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

  useEffect(() => {
    gettingBlog();
  }, []);

  return (
    <Container>
      <Wrapper>
        <NavLink to="/boardblogs/newblog">
          <Button>New Blog</Button>
        </NavLink>
        <BlogCardControl>
          {getBlog?.map((props) => (
            <BlogCard key={props._id}>
              <ImgDiv to={`/boardblogs/detail/${props._id}`}>
                <img src={props.blogImg} alt="" />
              </ImgDiv>
              <BlogTitle> {props.blogTitle} </BlogTitle>
              <BlogDescription>
                {props.blogShotDes} {console.log(props.blogShotDes.length)} ...
              </BlogDescription>
              <MoreDetail>
                <small> {moment(props.createdAt).fromNow()} </small>
                <NavLink to={`/boardblogs/detail/${props._id}`}>
                  <button>Read More</button>
                </NavLink>
              </MoreDetail>
            </BlogCard>
          ))}
        </BlogCardControl>
      </Wrapper>
    </Container>
  );
};

export default Blog;

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

const Button = styled.button`
  background-color: #000;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 600;
  border-radius: 2px;
  transition: all 350ms;
  margin: 20px 0;
  font-size: 12px;
  text-decoration: none;
  padding: 4px 17px;

  :hover {
    transform: scale(0.94);
    color: #e8bf0a;
  }
`;
