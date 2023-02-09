import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderNav,
  LinkStyle,
  LogoBox,
} from "./header-styled";

import { useUserState, useUserDispatch } from "../context/UserContext";

const Header = () => {
  const { isLoggedIn } = useUserState();
  const dispatch = useUserDispatch();

  const logoutSubmit = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("token");
      dispatch({
        type: "LOGOUT",
      });
      console.log("로그아웃 완료");
    }
  };

  return (
    <>
      <HeaderContainer>
        <LogoBox>
          <Link to="/">
            <img
              src="https://global.mardimercredi.com/img/logo-red.png"
              alt="LOGO"
            />
          </Link>
        </LogoBox>
        <HeaderNav>
          <ul>
            {isLoggedIn && isLoggedIn ? (
              <li onClick={logoutSubmit}>
                <LinkStyle to="/">LOGOUT</LinkStyle>
              </li>
            ) : (
              <li>
                <LinkStyle to="/login">LOGIN</LinkStyle>
              </li>
            )}

            <li>
              <LinkStyle to="/myaccount">
                <FontAwesomeIcon icon={faUser} />
              </LinkStyle>
            </li>
            <li>
              <LinkStyle to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </LinkStyle>
            </li>
          </ul>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
