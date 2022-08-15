import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import * as yup from "yup";
import upl from "../../../../Img/FGGG.jpg";

const ProductUpload = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(upl);
  const [avatar, setAvatar] = useState("");

  const handleForm = yup.object().shape({
    productName: yup.string().required("A Product name is Needed"),
    category: yup.string().required("Please Select a Category"),
    price: yup.number().required("A Price Is Required"),
    shortDescription: yup
      .string()
      .max(120)
      .required("Please Input a Short Description"),
    productDescription: yup.string().required("Full Detaild Required"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(handleForm),
  });

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const onSummitProduct = handleSubmit(async (value) => {
    const {
      productName,
      category,
      price,
      shortDescription,
      productDescription,
    } = value;
    const mainURL = "http://localhost:2221";
    const URL = `${mainURL}/api/product/uploadProduct`;
    console.log(value);

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("shortDescription", shortDescription);
    formData.append("productDescription", productDescription);
    formData.append("avatar", avatar);

    const config = {
      "content-type": "multipart/form-data",
    };

    await axios
      .post(URL, formData, config)
      .then((res) => {
        console.log(res.data.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product Uploaded",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/boardproducts");
        });
      })
      .catch((error) => {
        new Swal({
          title: error.response.data.message,
          text: `Please Check and Fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        }).then(() => {
          // setLoading(false)
        });
      });
  });

  return (
    <Container>
      <Wrapper>
        <Card onSubmit={onSummitProduct} type="multipart/form-data">
          <MainTitle>
            <Title>Skintriumph</Title>
          </MainTitle>
          <CreateHold>
            <ImageHolder>
              <PrevImgDiv>
                <img src={image} alt="" />
              </PrevImgDiv>
              <ImageLabel htmlFor="pix">Upload an Image</ImageLabel>
              <ImageInput
                id="pix"
                type="file"
                accept="image/*"
                onChange={handleImage}
              />
            </ImageHolder>

            <InputCtrl>
              <span>Product Name</span>
              <input
                placeholder="e.g Body Cream"
                {...register("productName")}
              />
              <Error> {errors.productName?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Category</span>
              <select {...register("category")}>
                <option>Soap</option>
                <option>Body Wash</option>
                <option>Scrubes</option>
                <option>Creame</option>
                <option>Face Corrector</option>
                <option>Strech Mark</option>
              </select>
              <Error> {errors.category?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Price</span>
              <input
                type="number"
                placeholder="e.g 12,000"
                {...register("price")}
              />
              <Error> {errors.price?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Short Description</span>
              <textarea
                placeholder="A Pet Talk About The Product"
                {...register("shortDescription")}
              />
              <Error> {errors.shortDescription?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Full Details</span>
              <textarea
                placeholder="All you want Users to Know about the Product"
                {...register("productDescription")}
              />
              <Error> {errors.productDescription?.message} </Error>
            </InputCtrl>
          </CreateHold>
          <Button>
            <button type="submit">Upload Product</button>
          </Button>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default ProductUpload;

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
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1150px) {
    width: 95%;
  }
`;

const Card = styled.form`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 500px;
  min-height: 400px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    box-shadow: none;
  }
`;

const MainTitle = styled.div`
  text-align: center;
`;
const Title = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`;

const CreateHold = styled.div``;
const PrevImgDiv = styled.div`
  height: 130px;
  width: 90%;
  background-color: aqua;
  border-radius: 10px;
  margin: 10px 0;

  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;
const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  padding: 6px 12px;
  background-color: #000;
  color: white;
  border-radius: 3px;
  transition: all 350ms;
  font-size: 14px;
  outline: none;
  border: 0;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  small {
    color: red;
    font-weight: 600;
  }
`;
const InputCtrl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  span {
    font-size: small;
    font-weight: 600;
  }

  input {
    height: 30px;
    width: 300px;
    font-family: poppins;
  }

  select {
    height: 30px;
    width: 300px;
    font-family: poppins;
    margin-bottom: 15px;
  }

  textarea {
    height: 100px;
    font-family: poppins;
    resize: none;
  }
`;

const Error = styled.div`
  font-size: x-small;
  font-weight: bold;
  color: red;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  button {
    padding: 6px 15px;
    font-family: poppins;
    font-weight: 600;
    background-color: #ff9505;
    color: #fff;
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;
