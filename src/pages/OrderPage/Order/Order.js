import React from 'react';
import { OrderInfo, OrderWrapper, PayInfo } from "./styled";

const Order = () => {

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
                <input type="text" id="name" />
              </div>
              <div>
                <label htmlFor="phone">PHONE</label>
                <input type="text" id="phone" />
              </div>
              <div>
                <label htmlFor="address">ADDRESS</label>
                <input type="text" id="address" />
              </div>
              <div>
                <label htmlFor="address2">ADDRESS2</label>
                <input type="text" id="address2" />
              </div>
              <div>
                <label htmlFor="zipcode">ZIPCODE</label>
                <input type="text" id="zipcode" />
              </div>
            </form>
          </OrderInfo>
          <PayInfo>
            <div>
              <p>결제정보</p>
              <ul>
                <li>주문 상품</li>
                <li>상품 금액</li>
                <li>배송비</li>
              </ul>
              <p>총 결제금액</p>
            </div>
            <button>쇼핑백 비우기</button>
            <button>주문 하기</button>
          </PayInfo>
        </div>
      </OrderWrapper>
    </>
  );
};

export default Order;
