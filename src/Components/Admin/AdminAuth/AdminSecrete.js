import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import * as yup from "yup";

const AdminSecrete = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [secret, setSecret] = useState("");
  const formSchema = yup.object().shape({
    mainOTP: yup.string().required(" This Field Cannot Be Empty"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { mainOTP } = value;

    const mainURL = "http://localhost:2221";
    const URL = `${mainURL}/api/admin/${id}/${token}`;

    await axios
      .post(URL, { mainOTP })
      .then((res) => {
        console.log(res.data.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You Are Now Verified",
          text: "You Can now Proceed to Sign Up",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/admin/signin");
        });
        // setLoading(false)
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
    reset();
  });

  return (
    <Container>
      <Wrapper>
        <img src="/Images/verif.gif" alt="" />
        <Text onSubmit={onSubmit}>
          <h2>You Are a Step Away</h2>
          <p> Please Enter Your Secret Key to complect Your Process</p>
          <input placeholder="Enter Your Secret Key" {...register("mainOTP")} />
          <Error>{errors.mainOTP?.message}</Error>
          <Error> {secret} </Error>
          <button type="submit">Proceed</button>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default AdminSecrete;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
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
const Text = styled.form`
  width: 90%;
  text-align: center;
  h2 {
    font-weight: bold;
  }
  button {
    outline: none;
    background-color: #000;
    color: #fff;
    font-weight: 600;
  }
`;

const Error = styled.div`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;
