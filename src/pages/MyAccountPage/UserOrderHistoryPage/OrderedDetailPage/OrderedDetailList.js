import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LayoutWrapper } from "../../../../components/common-styled";
import { TitleWrapper } from "../orderhistory-styled";
import {
  OrderedDetailListWrapper,
  UserOrderInfo,
  InfoTitle,
  InfoDetail,
} from "./ordereddetail-styled";
import {
  ItemDetail,
  ItemWrapper,
  ItemImageWrapeer,
  ItemInfoWrapper,
  OrderInfo,
  ItemInfo,
  OrderStatus,
} from "../ordereditem-styled";
import OrderedDetailItem from "./OrderedDetailItem";
import { ROUTE } from "../../../../routes/route";
import * as API from "../../../../utils/api";
import {
  useOrderState,
  useOrderDispatch,
} from "../../../../context/OrderContext";

const OrderedDetailList = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const { orderedItems } = useOrderState();

  useEffect(() => {
    if (orderId) {
      console.log(orderId);
    }
  }, [orderId]);

  // const getProducts = async () => {
  //   const orderId = "63e2a4239e40b325a36b3138";
  //   try {
  //     const response = await axios.get("http://localhost:8001/api/products/");
  //     const products = response.data;

  //     console.log("response1", products);

  //     const response2 = await axios.get(
  //       `http://localhost:8001/api/order/product/${orderId}`
  //     );
  //     const orderItemInfo = response2.data;

  //     console.log("response2", orderItemInfo);
  //   } catch (err) {
  //     console.log("Error", err);
  //   }
  // };

  useEffect(() => {
    const orderedItem = location.state;
    console.log("state", orderedItem);
  }, []);

  // useEffect(() => {
  //   getProducts();
  //   if (id) {
  //     console.log("products", products);
  //     console.log("id", id);
  //     // const matchedItem = products?.find((item) => item._id == id);
  //     setItem(products?.find((item) => item._id == id));
  //   }
  //   if (item) {
  //     console.log("item", item);
  //   }
  // }, [id, item]);

  return (
    <OrderedDetailListWrapper>
      <div></div>
    </OrderedDetailListWrapper>
  );
};

export default OrderedDetailList;
