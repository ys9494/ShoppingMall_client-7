import {Link} from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  padding: 110px 40px;
  box-sizing: border-box;

  > ul > li:not(:last-of-type) {
    margin-bottom: 20px;
  }

  span {
    cursor: pointer;
  }
`;

export const LinkStyle = styled(Link)`
  display: inline-block;
  color: #000;
  text-decoration: none;
`;