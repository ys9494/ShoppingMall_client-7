import React, { useEffect, useState } from "react";
import {
  MyAccountWrapper,
  AccountNavWrapper,
  GotoMyDetails,
  GotoOrderHistory,
} from "./myaccount-styled";
import { Link, useNavigate } from "react-router-dom";

const MyAccount = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate("/login");
    }
  }, []);

  return (
    <MyAccountWrapper>
      <AccountNavWrapper>
        <h1>MY ACCOUNT</h1>
        <GotoMyDetails>
          <Link to={`./mydetails`}>MY DETAILS</Link>
        </GotoMyDetails>
        <GotoOrderHistory>
          <Link to={`./orderhistory`}>ORDER HISTORY</Link>
        </GotoOrderHistory>
      </AccountNavWrapper>
    </MyAccountWrapper>
  );
};

export default MyAccount;
