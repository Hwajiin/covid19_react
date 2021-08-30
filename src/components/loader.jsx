import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const SLoader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #eeeeee;
  border-top: 5px solid #0026ca;
  position: relative;
  background-color: transparent;
  animation: ${spin} 1s infinite;
`;

const Loader = () => {
  return (
    <Container>
      <SLoader></SLoader>
    </Container>
  );
};

export default Loader;
