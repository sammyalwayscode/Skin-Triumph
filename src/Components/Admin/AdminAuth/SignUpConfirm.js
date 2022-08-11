import React from "react";
import styled from "styled-components";

const SignUpConfirm = () => {
  return (
    <Container>
      <Wrapper>
        <img src="/Images/verify.gif" alt="" />
        <Text>
          <h2>Thanks For Creating An Account With us</h2>
          <p>
            {" "}
            Although, your account has been created but hasn't been verified, go
            to your mail to finish up your Registration.
          </p>
          <strong>Thanks 👍</strong>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default SignUpConfirm;

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
const Text = styled.div`
  width: 70%;
  text-align: center;
  h2 {
    font-weight: bold;
  }
`;
