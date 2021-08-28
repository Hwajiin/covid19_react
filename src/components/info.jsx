import React from "react";
import styled from "styled-components";

const Text = styled.p``;

const Info = ({ yesterday, total, local, overflow }) => {
  return (
    <div>
      <Text>{`${yesterday} 신규합계 ${total}`}</Text>
      <Text>{`지역: ${local} 해외: ${overflow}`}</Text>
    </div>
  );
};
export default Info;
