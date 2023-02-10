import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderInfo, OrderWrapper, PayInfo } from "./styled";
import jwt_decode from "jwt-decode";
import * as API from "../../../utils/api";

const Order = () => {
  const location = useLocation();
	const {count, total, product, productId, productSize} = location.state;
  const inputName = useRef();
  const inputPhone = useRef();
  const inputAddress = useRef();
  const inputAddress2 = useRef();
  const inputZipcode = useRef();
  const navigator = useNavigate();
  let token = localStorage.getItem("token");

  console.log(count, total, product, productId, productSize);

  const orderHandler = async () => {
    try {
      const decoded = jwt_decode(token);
      const { userId } = decoded;
      const data = {
        userId,
        "totalPrice": total,
        "consignee": inputName.current.value,
        "address1": inputAddress.current.value,
        "address2": inputAddress2.current.value,
        "zipcode": inputZipcode.current.value,
        "phoneNumber": inputPhone.current.value
      }

      const response = await API.post("/order", data);
      const orderData = response.data;
      const odData = {
        "orderId": orderData._id,
        "productId": productId,
        "productQuantity": count,
        "productSize": productSize,
        "_id": userId,
      }

      await API.post("/order/product", odData);

      console.log(odData);

      navigator("/order/complete");
    } catch(err) {
      console.log(total, product, productId, productSize);
      console.log(err);
    }
  }

  return (
    <>
      <OrderWrapper>
        <div>
          <p>장바구니 &#62; <span>주문결제</span> &#62; 주문완료 </p>
        </div>
        <div>
          <OrderInfo>
            <p>배송지정보</p>
            <form>
              <div>
                <label htmlFor="name">NAME</label>
                <input type="text" id="name" placeholder="이름" ref={inputName} />
              </div>
              <div>
                <label htmlFor="phone">PHONE</label>
                <input type="text" id="phone" placeholder='휴대폰 번호' ref={inputPhone} />
              </div>
              <div>
                <label htmlFor="address">ADDRESS</label>
                <input type="text" id="address" placeholder='주소' ref={inputAddress} />
              </div>
              <div>
                <label htmlFor="address2">ADDRESS2</label>
                <input type="text" id="address2" placeholder='상세주소' ref={inputAddress2} />
              </div>
              <div>
                <label htmlFor="zipcode">ZIPCODE</label>
                <input type="text" id="zipcode" placeholder='우편번호' ref={inputZipcode} />
              </div>
            </form>
          </OrderInfo>
          <PayInfo>
            <div>
              <p>결제정보</p>
              <ul>
                <li>
                  주문 상품
                  <span> {product}</span>
                </li>
                <li>
                  상품 금액
                  <span> {total}원</span>
                </li>
              </ul>
              <p>총 결제금액 <span>{total}원</span></p>
            </div>
            <button onClick={orderHandler}>주문 하기</button>
          </PayInfo>
        </div>
      </OrderWrapper>
    </>
  );
};

export default Order;
