import React from "react";
import styled from "styled-components";
import Info from "../info";

const Container = styled.div``;

const LocalContainer = ({ data }) => {
  console.log(data);
  return data.loading ? (
    <div>Loading...</div>
  ) : (
    <Container>
      <Info />
    </Container>
  );
};

export default LocalContainer;
