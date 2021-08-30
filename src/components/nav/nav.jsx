import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SNav = styled.nav`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #8187ff;
  color: white;
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-top: 5px solid
    ${(props) => (props.current ? "#3d5afe" : "transparent")};
  &:hover {
    background-color: #3d5afe;
  }
  transition: all 0.2s ease-in;
`;

const SLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter((props) => {
  const { pathname } = props.location;
  return (
    <SNav>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">지역</SLink>
        </Item>
        <Item current={pathname === "/maker"}>
          <SLink to="/maker">국내</SLink>
        </Item>
      </List>
    </SNav>
  );
});
