import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SNav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: pink;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const Item = styled.li`
  border-top: 5px solid ${(props) => (props.current ? "coral" : "transparent")};
`;

export default withRouter((props) => {
  const { pathname } = props.location;
  return (
    <SNav>
      <List>
        <Item current={pathname === "/"}>
          <Link to="/">Local</Link>
        </Item>
        <Item current={pathname === "/maker"}>
          <Link to="/maker">Nationwide</Link>
        </Item>
      </List>
    </SNav>
  );
});
