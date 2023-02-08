import React, { useEffect, useState } from 'react';
import { CartWrapper, CartList, PayInfo } from "./styled";
import CartItem from "./CartItem"
const Cart = ({ cart, setCart }) => {
  const [carts, setCarts] = useState("");

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("cart")));
    console.log(carts)
  }, [])

  console.log(cart)

  return (
    <>
      <CartWrapper>


        <div>
          <p>
            <span>장바구니</span> &#62; 주문결제 &#62; 주문완료{" "}
          </p>
        </div>
        <div>
          <CartList>
            <form>
              <input type="checkbox" id="allcheck" />
              <label htmlFor="allcheck">ALL</label>
              <ul>
                {carts && carts.map((item) =>
                  (<CartItem key={item._id} {...item} />)
                )}
              </ul>
            </form>
          </CartList>
          <PayInfo>
            <div>
              <p>결제정보</p>
              <ul>
                <li>상품수</li>
                <li>상품금액</li>
                <li>배송비</li>
              </ul>
              <p>총 결제금액</p>
            </div>
            {/* <button onClick={removeAll}>쇼핑백 비우기</button> */}
            <button>주문 하기</button>
          </PayInfo>
        </div>
      </CartWrapper>
    </>
  );
};

export default Cart;
