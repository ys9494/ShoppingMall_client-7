import React from "react";
import { LayoutWrapper } from "../../../components/common-styled";
import { OrderHistoryWrapper, TitleWrapper } from "./userorderhistory-styled";
import UserOrderedItemList from "./UserOrderedItemList";

const UserOrderHistory = () => {
  return (
    <LayoutWrapper>
      <OrderHistoryWrapper>
        <TitleWrapper>
          <h1>ORDER HISTORY</h1>
        </TitleWrapper>
        <UserOrderedItemList />
      </OrderHistoryWrapper>
    </LayoutWrapper>
  );
};

export default UserOrderHistory;
