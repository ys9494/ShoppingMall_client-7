import React from "react";
import { AdminWrapper, AdminNav } from "./Admin-styled";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <AdminWrapper>
        <div>
          <AdminNav>
            <Link to="../../" style={{ textDecoration: "none" }}>
              ORDER MANAGE
            </Link>
          </AdminNav>

          <AdminNav>
            <Link to="../category" style={{ textDecoration: "none" }}>
              CATEGORY MANAGE
            </Link>
          </AdminNav>

          <AdminNav>
            <Link to="../../productlist" style={{ textDecoration: "none" }}>
              PRODUCT LIST
            </Link>
          </AdminNav>

          <AdminNav>
            <Link to="../../productadd" style={{ textDecoration: "none" }}>
              PRODUCT ADD
            </Link>
          </AdminNav>
        </div>
      </AdminWrapper>
    </>
  );
};

export default Admin;
