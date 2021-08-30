import React from "react";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0031ca;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Header = () => {
  return (
    <SHeader>
      <span>Covid19</span>
    </SHeader>
  );
};

export default Header;
