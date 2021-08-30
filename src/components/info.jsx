import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 42px;
  font-weight: 600;
`;

const DataContainer = styled.div``;

const Date = styled.span`
  font-size: 18px;
  margin: 0 10px;
  font-weight: 600;
`;

const Data = styled.span`
  font-size: 18px;
  margin: 0 10px;
  font-weight: 600;
`;

const Text = styled.p`
  margin: 5px;
  font-size: 13px;
  margin-top: 15px;
`;

const Info = ({ name, yesterday, total, local, overflow }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <DataContainer>
        <Date>{yesterday}</Date>
        <Data>신규확진자: {total}</Data>
      </DataContainer>
      <Text>{`지역: ${local} 해외: ${overflow}`}</Text>
    </Container>
  );
};
export default Info;
