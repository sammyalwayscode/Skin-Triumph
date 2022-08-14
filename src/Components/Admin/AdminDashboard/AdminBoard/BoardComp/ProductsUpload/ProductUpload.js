import React from "react";
import styled from "styled-components";

const ProductUpload = () => {
  return (
    <Container>
      <Wrapper>
        <Card onSubmit={""}>
          <MainTitle>
            <Title>Skintriumph</Title>
          </MainTitle>
          <CreateHold>
            <ImageHolder>
              <PrevImgDiv>
                <img src={""} alt="" />
              </PrevImgDiv>
              <ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
              <ImageInput id="pix" type="file" accept="image/*" onChange={""} />
            </ImageHolder>

            <InputCtrl>
              <span>Title</span>
              <input placeholder="What's the title of your notes" />
              <Error> error </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Notes</span>
              <textarea placeholder="Write your Notes Here" />
              <Error> error </Error>
            </InputCtrl>
          </CreateHold>
          <Button>
            <button type="submit">Create Diary</button>
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
  height: 80px;
  width: 80px;
  background-color: aqua;
  border-radius: 50%;
  margin: 10px 0;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
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
    height: 32px;
    width: 130px;
    font-family: poppins;
    font-weight: 600;
    background-color: #ff9505;
    color: #fff;
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;
