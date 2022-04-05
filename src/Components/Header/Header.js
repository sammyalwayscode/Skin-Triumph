import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src="" alt="" />
        </Logo>

        <Navigations></Navigations>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div``;
const Wrapper = styled.div``;
const Logo = styled.div``;
const Navigations = styled.div``;
