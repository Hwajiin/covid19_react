import React from "react";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = (props) => {
  return (
    <SHeader>
      <span>Covid19</span>
    </SHeader>
  );
};

export default Header;
