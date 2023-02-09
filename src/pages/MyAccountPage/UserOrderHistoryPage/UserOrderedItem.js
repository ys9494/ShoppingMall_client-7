import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  OrderedItemWrapper,
  ItemDetail,
  ItemWrapper,
  ItemImageWrapeer,
  ItemInfoWrapper,
  OrderInfo,
  ItemInfo,
  OrderStatus,
} from "./userordereditem-styled";
import { timeFormat } from "../../../utils/utils";
import { ROUTE } from "../../../routes/route";

const UserOrderedItem = (item) => {
  useState(() => {
    if (item) {
      console.log("item_item", item);
    }
  }, [item]);

  const cancelOrder = () => {
    if (confirm("주문을 취소하시겠습니까?")) {
      console.log("주문 취소 완료");
    }
  };

  return (
    <OrderedItemWrapper>
      {item && (
        <ItemDetail>
          <OrderInfo>
            <span>{item?.date && timeFormat(item?.date)} </span>
            <span>({item?.orderId})</span>
          </OrderInfo>
          <ItemWrapper>
            <Link to={`${ROUTE.PRODUCTDETAIL}/${item._id}`}>
              <ItemImageWrapeer>
                {item?.image && <img src={item.image} alt={item.title} />}
              </ItemImageWrapeer>
            </Link>
            <ItemInfoWrapper>
              <ItemInfo>
                <h3>{item?.title}</h3>
                <div>
                  <p>KRW {Number(item?.price).toLocaleString("ko-KR")}</p>
                  <p>QTY : {item?.qty}</p>
                </div>
              </ItemInfo>
              <OrderStatus>
                <p>{item?.status}</p>
                {item.option === "detailPage" ? (
                  <button onClick={cancelOrder}>주문 취소</button>
                ) : (
                  <Link
                    to={`${ROUTE.USERORDEREDDETAIL}/${item._id}`}
                    state={item}
                  >
                    <span>주문 상세 &gt; </span>
                  </Link>
                )}
              </OrderStatus>
            </ItemInfoWrapper>
          </ItemWrapper>
        </ItemDetail>
      )}
    </OrderedItemWrapper>
  );
};

export default UserOrderedItem;
