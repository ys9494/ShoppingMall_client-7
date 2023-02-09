import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartWrapper, CartList, PayInfo } from "./styled";
import CartView from "./CartView";
import { getUserId } from "../../utils/utils";

const Cart = ({ count, setCount }) => {
  const [carts, setCarts] = useState([]);
  let [price, setPrice] = useState(0);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("cart")));
  }, []);

  // 총 가격
  const getTotalPrice = () => {
    return carts.reduce((tot, el) => tot + el.price * el.quantity, 0);
  };
  // 상품 수
  const getTotalCount = () => {
    return carts.reduce((tot, el) => tot + el.quantity, 0);
  };

  useEffect(() => {
    carts && setPrice(getTotalPrice());
    carts && setCount(getTotalCount());
    carts && setTotal(getTotalPrice() + 3500);
  }, [carts]);

  const handleComplete = (index) => {
    setCarts((current) => {
      const newList = [...current];

      newList[index].isCompleted = true;

      return newList;
    });
  };
  const handleRemove = (index) => {
    setCarts((current) => {
      const newList = [...current];
      newList.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(newList));
      return newList;
    });
  };
  const handleRemoveAll = (index) => {
    setCarts((current) => {
      const newList = [];

      localStorage.setItem("cart", JSON.stringify(newList));
      return newList;
    });
  };

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
            <CartView
              carts={carts}
              count={count}
              setCount={setCount}
              // onComplete={handleComplete}
              onRemove={handleRemove}
            />
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
            <button onClick={handleRemoveAll}>쇼핑백 비우기</button>
            <Link
              to={`http://localhost:3000/order`}
              state={{
                total,
                price,
                count,
              }}
            >
              주문하기
            </Link>
          </PayInfo>
        </div>
      </CartWrapper>
    </>
  );
};

export default Cart;
