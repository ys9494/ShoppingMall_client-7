import React from "react";
import { Link } from "react-router-dom";
import { OrderedDetailItemWrapper } from "./ordereddetail-styled";
import {
  ItemDetail,
  ItemWrapper,
  ItemImageWrapeer,
  ItemInfoWrapper,
  OrderInfo,
  ItemInfo,
  OrderStatus,
} from "../ordereditem-styled";

const OrderedDetailItem = () => {
  return (
    <OrderedDetailItemWrapper>
      <ItemDetail>
        <OrderInfo>
          <span>{orderedItem?.date && timeFormat(orderedItem?.date)} </span>
          <span>({orderedItem?.orderNumber})</span>
        </OrderInfo>
        <ItemWrapper>
          <Link to={`/myaccount/order`}>
            <ItemImageWrapeer>
              {orderedItem?.image && (
                <img src={orderedItem.image} alt={orderedItem.title} />
              )}
            </ItemImageWrapeer>
          </Link>
          <ItemInfoWrapper>
            <ItemInfo>
              <h3>{orderedItem?.title}</h3>
              <div>
                <p>KRW {Number(orderedItem?.price).toLocaleString("ko-KR")}</p>
                <p>QTY : {orderedItem?.productQuantity}</p>
              </div>
            </ItemInfo>
            <OrderStatus>
              <p>{orderedItem?.status}</p>
              <button onClick={cancelOrder}>주문 취소</button>
            </OrderStatus>
          </ItemInfoWrapper>
        </ItemWrapper>
      </ItemDetail>
    </OrderedDetailItemWrapper>
  );
};

export default OrderedDetailItem;
