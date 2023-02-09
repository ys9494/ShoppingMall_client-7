import React, { useEffect, useState } from "react";
import { OrderedItemListWrapper } from "./userorderhistory-styled";
import UserOrderedItem from "./UserOrderedItem";
import { Link } from "react-router-dom";
import * as API from "../../../utils/api";

import { getUserId } from "../../../utils/utils";

const UserOrderedItemList = () => {
  const [orderedList, setOrderedList] = useState([]);

  const getOrderedListAPI = async () => {
    const userId = getUserId();
    try {
      const { data } = await API.get(`/order/${userId}`);
      console.log(data);
      setOrderedList(data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    const userId = getUserId();
    if (userId) {
      getOrderedListAPI();
      console.log("list", orderedList);
      console.log(userId);
    }
  }, []);

  return (
    <OrderedItemListWrapper>
      {orderedList &&
        orderedList.map((item, index) => (
          <UserOrderedItem key={index} {...item} />
        ))}
    </OrderedItemListWrapper>
  );
};

export default UserOrderedItemList;
