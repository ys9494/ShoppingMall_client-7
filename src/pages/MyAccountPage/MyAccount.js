import React, { useEffect, useState } from "react";
import {
  MyAccountWrapper,
  AccountNavWrapper,
  GotoMyDetails,
  GotoOrderHistory,
} from "./myaccount-styled";
import { Link } from "react-router-dom";
import axios from "axios";

const MyAccount = () => {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      console.log("logged out");
    }
  });

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
