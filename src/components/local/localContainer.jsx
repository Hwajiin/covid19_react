import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const LocalContainer = ({ data }) => {
  return data.loading ? <div>Loading...</div> : <Container></Container>;
};

export default LocalContainer;
