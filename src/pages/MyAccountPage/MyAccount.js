import React, { useEffect, useState } from "react";
import {
  MyAccountWrapper,
  AccountNavWrapper,
  GotoMyDetails,
  GotoOrderHistory,
} from "./myaccount-styled";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/route";
import { useUserState, useUserDispatch } from "../../context/UserContext";

const MyAccount = () => {
  const navigate = useNavigate();
  const { isAdmin } = useUserState();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      console.log("not");
      return navigate(ROUTE.LOGIN.link);
    }
    if (isAdmin === true) {
      navigate(ROUTE.ADMIN.link);
    }
  }, []);
  return (
    <MyAccountWrapper>
      <AccountNavWrapper>
        <h1>MY ACCOUNT</h1>
        <GotoMyDetails>
          <Link to={ROUTE.MYDETIALS.link}>MY DETAILS</Link>
        </GotoMyDetails>
        <GotoOrderHistory>
          <Link to={ROUTE.USERORDERHISTORY.link}>ORDER HISTORY</Link>
        </GotoOrderHistory>
      </AccountNavWrapper>
    </MyAccountWrapper>
  );
};

export default MyAccount;
