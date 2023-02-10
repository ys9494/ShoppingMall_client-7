import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LayoutWrapper } from "../../../../components/common-styled";
import { TitleWrapper } from "../orderhistory-styled";
import {
  OrderedDetailWrapper,
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
import { ROUTE } from "../../../../routes/route";
import * as API from "../../../../utils/api";
import { getUserId } from "../../../../utils/utils";

const OrderedDetail = () => {
  const { orderId } = useParams();
  const [item, setItem] = useState({});
  const [products, setProducts] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const getOrderedInfoAPI = async (userId) => {
    const { data } = API.get(`/order/${userId}`);
    console.log("orderInfo", data);
    // setOrderInfo(data);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate(ROUTE.LOGIN.link);
    } else {
      const userId = getUserId();
      getOrderedInfoAPI(userId);
    }
  }, []);

  useEffect(() => {
    if (orderId) {
      console.log(orderId);
    }
  }, [orderId]);

  // useEffect(() => {
  //   const orderedItem = location.state;
  //   console.log("state", orderedItem);
  // }, []);

  return (
    <LayoutWrapper>
      <OrderedDetailWrapper>
        <TitleWrapper>
          <h1>ORDER INFORMATION</h1>
        </TitleWrapper>
        {item && (
          <>
            item
            {/* <ItemDetail>
              <OrderInfo>
                <span>
                  {orderedItem?.date && timeFormat(orderedItem?.date)}{" "}
                </span>
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
                      <p>
                        KRW {Number(orderedItem?.price).toLocaleString("ko-KR")}
                      </p>
                      <p>QTY : {orderedItem?.productQuantity}</p>
                    </div>
                  </ItemInfo>
                  <OrderStatus>
                    <p>{orderedItem?.status}</p>
                    <button onClick={cancelOrder}>주문 취소</button>
                  </OrderStatus>
                </ItemInfoWrapper>
              </ItemWrapper>
            </ItemDetail> */}
            {/* <UserOrderedItem option={"detailPage"} {...item} /> */}
            <UserOrderInfo>
              <InfoTitle>
                <h3>배송지 정보</h3>
                <button>배송지 변경</button>
              </InfoTitle>
              <InfoDetail>
                <ul>
                  <li>
                    <strong>수령인</strong>
                    <span>{item.name}</span>
                  </li>
                  <li>
                    <strong>전화번호</strong>
                    <span>{item.phoneNumber}</span>
                  </li>
                  <li>
                    <strong>주소</strong>
                    <span>
                      ({item.zipCode}) {item.address1} {item.address2}
                    </span>
                  </li>
                </ul>
              </InfoDetail>
            </UserOrderInfo>
          </>
        )}
      </OrderedDetailWrapper>
    </LayoutWrapper>
  );
};

export default OrderedDetail;
