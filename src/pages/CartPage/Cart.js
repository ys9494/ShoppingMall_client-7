import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CartWrapper, CartList, PayInfo } from "./styled";
import CartItem from "./CartItem"
import jwt_decode from "jwt-decode";
const Cart = ({ cart, setCart }) => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const { userId } = decoded;
  const [carts, setCarts] = useState("");
  let [price, setPrice] = useState(0);
  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(0);
  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("cart")));
  }, [])


  // 총 가격
  const getTotalPrice = () => {
    return carts.reduce((tot, el) =>
      tot + (el.price * el.quantity)
      , 0)
  }
  const getTotalCount = () => {
    return carts.reduce((tot, el) =>
      tot + (el.quantity)
      , 0)
  }

  // 상품 수

  useEffect(() => {

    carts && setPrice(getTotalPrice());
    carts && setCount(getTotalCount());
    carts && setTotal(getTotalCount());

    // console.log(count)
  }, [carts])
  // const countAll = () => {
  //   carts.forEach((el) => setCount(count += el.price))
  // }

  // { carts.forEach(function (el) { setCount(count += el.price) }) }


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
                {/* {carts && carts.map((item) =>
                  console.log(item.price)
                )} */}
              </ul>
            </form>
          </CartList>
          <PayInfo>
            <div>
              <p>결제정보</p>
              <ul>
                <li>상품수 {count} </li>
                <li>상품 금액 {price}</li>
                <li>배송비 3,000</li>
              </ul>
              <p>총 결제금액{total}</p>
            </div>
            {/* <button onClick={removeAll}>쇼핑백 비우기</button> */}
            <Link to={`http://localhost:3000/order/${userId}`} state={{
              total,
              price,
              count,
            }}>주문하기</Link>
          </PayInfo>
        </div>
      </CartWrapper>
    </>
  );
};

export default Cart;
