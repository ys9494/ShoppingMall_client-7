import React, { useEffect, useState } from "react";
import { OrderedItemListWrapper } from "./orderhistory-styled";
import UserOrderedItem from "./OrderedItem";
import { Link } from "react-router-dom";
import * as API from "../../../utils/api";

import { getUserId } from "../../../utils/utils";

const UserOrderedItemList = () => {
  const [orderedInfoList, setOrderedInfoList] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState([]);

  // const getOrderedProductsAPI = async (orderId) => {
  //   try {
  //     const { data } = await API.get(`/order/product/${orderId}`);
  //     console.log("productData", data);
  //   } catch (err) {
  //     console.log("Err", err);
  //   }
  // };

  const getOrderedInfoListAPI = async () => {
    const userId = getUserId();
    try {
      const response = await API.get(`/order/${userId}`);
      const orderDetails = response.data;
      console.log("order list api success", data);
      for (const item of orderDetails) {
        const { data } = await API.get(`/order/product/${item.id}`);
        console.log("order item", data);
      }
      // setOrderedInfoList([...data]);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    const userId = getUserId();
    if (userId) {
      getOrderedInfoListAPI();
      // orderedInfoList.map((item) => {
      //   getOrderedProductsAPI(item._id);
      // });
    }
    console.log("ordered list", orderedInfoList);
    console.log("user id", userId);
  }, []);

  return (
    <OrderedItemListWrapper>
      {orderedInfoList &&
        orderedInfoList.map((item, index) => (
          <UserOrderedItem key={index} {...item} />
        ))}
    </OrderedItemListWrapper>
  );
};

export default UserOrderedItemList;
