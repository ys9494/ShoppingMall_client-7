import React, { useEffect, useState } from "react";
import { OrderedItemListWrapper } from "./userorderhistory-styled";
import UserOrderedItem from "./UserOrderedItem";
import { Link } from "react-router-dom";
import axios from "axios";

import { getUserId } from "../../../utils/utils";

const dummy = [
  {
    id: 1,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product1",
    price: 12332543,
    qty: 3,
    status: "결제 완료",
    image: "https://global.mardimercredi.com/img/imgmain-intro-1014-2.png",
  },
  {
    id: 2,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product2",
    price: 234243,
    qty: 1,
    status: "배송중",
  },
  {
    id: 3,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product3",
    price: 234534,
    qty: 7,
    status: "배송중",
  },
  {
    id: 4,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product4",
    price: 13000,
    qty: 2,
    status: "배송 완료",
  },
  {
    id: 5,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product5",
    price: 13000,
    qty: 2,
    status: "배송 완료",
  },
  {
    id: 6,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product6",
    price: 13000,
    qty: 5,
    status: "배송 완료",
  },
];

const UserOrderedItemList = () => {
  const [orderedList, setOrderedList] = useState([]);
  const [products, setProducs] = useState([]);

  // const userId = "63e1c775c6347f1d522e3cd1";

  const getOrderedList = async (token, userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8001/api/order/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrderedList(response.data);
      console.log(response.data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    const userId = getUserId();
    const token = localStorage.getItem("token");

    getOrderedList(token, userId);
  }, []);

  //   console.log(dummy);
  return (
    <OrderedItemListWrapper>
      {orderedList &&
        orderedList.map((item) => <UserOrderedItem key={item.id} {...item} />)}
    </OrderedItemListWrapper>
  );
};

export default UserOrderedItemList;
