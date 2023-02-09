import axios from 'axios';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { OrderInfo, OrderWrapper, PayInfo } from "./styled";
import jwt_decode from "jwt-decode";

const Order = () => {
  const location = useLocation();
	const {count, total, product} = location.state;
  const inputName = useRef();
  const inputPhone = useRef();
  const inputAddress = useRef();
  const inputAddress2 = useRef();
  const inputZipcode = useRef();

  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const { userId } = decoded;

  console.log(inputName);

  const orderHandler = async () => {
    try {
      const data = {
        "orderNumber": "100000",
        userId,
        "consignee": inputName.current.value,
        "address": `(${inputZipcode.current.value}) ${inputAddress.current.value} ${inputAddress2.current.value}`,
        "phoneNumber": inputPhone.current.value
      }
      console.log(data);
      await axios.post("http://localhost:8001/api/order", data);
    } catch(err) {
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
                <input type="text" id="name" placeholder="Input your name" ref={inputName} />
              </div>
              <div>
                <label htmlFor="phone">PHONE</label>
                <input type="text" id="phone" placeholder='Input Phone Number' ref={inputPhone} />
              </div>
              <div>
                <label htmlFor="address">ADDRESS</label>
                <input type="text" id="address" placeholder='Your Address' ref={inputAddress} />
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
                  <span>{product} 외 {count-1}개</span>
                </li>
                <li>
                  상품 금액
                  <span>{total}원</span>
                </li>
                <li>
                  배송비
                  <span>3000원</span>
                </li>
              </ul>
              <p>총 결제금액 <span>{total + 3000}원</span></p>
            </div>
            <button onClick={orderHandler}>주문 하기</button>
          </PayInfo>
        </div>
      </OrderWrapper>
    </>
  );
};

export default Order;
