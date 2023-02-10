import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartWrapper, CartList, PayInfo } from "./styled";

import CartView from "./CartView";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Cart = ({ count, setCount }) => {
  const [carts, setCarts] = useState([]);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [delivery, setDelivery] = useState(0);
  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const setQuantity = (type, id, quantity) => {
    if (type === "plus") {
      console.log(quantity);
      const found = carts.filter((item) => item._id === id)[0];
      const idx = carts.indexOf(found);
      const cartItem = {
        _id: found._id,
        imageUrl: found.imageUrl,
        title: found.title,
        price: found.price,
        manufacturer: found.manufacturer,
        quantity: quantity,
      };
      setCarts([...carts.slice(0, idx), cartItem, ...carts.slice(idx + 1)]);
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...carts.slice(0, idx),
          cartItem,
          ...carts.slice(idx + 1),
        ])
      );
    } else {
      if (quantity === 0) return;
      const found = carts.filter((item) => item._id === id)[0];
      const idx = carts.indexOf(found);
      const cartItem = {
        _id: found._id,
        imageUrl: found.imageUrl,
        title: found.title,
        price: found.price,
        manufacturer: found.manufacturer,
        quantity: quantity,
      };
      setCarts([...carts.slice(0, idx), cartItem, ...carts.slice(idx - 1)]);
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...carts.slice(0, idx),
          cartItem,
          ...carts.slice(idx + 1),
        ])
      );
    }
  };

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

    carts && setTotal(getTotalPrice());
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

  function Component({ setDelivery, total, delivery }) {
    if (total < 200000) {
      setDelivery(3500);
      return <p>배송금액: {delivery} 원</p>;
    } else {
      setDelivery(0);

      return <p>배송금액: {delivery} 원</p>;
    }
  }

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
              setQuantity={setQuantity}
              carts={carts}
              setCarts={setCarts}
              // onComplete={handleComplete}
              onRemove={handleRemove}
            />
          </CartList>
          <PayInfo>
            <div>
              <p>결제정보</p>
              <ul>
                <li>총 상품개수 {Number(count).toLocaleString("ko-KR")} 개 </li>
                {/* <li>상품 금액 {Number(total).toLocaleString("ko-KR")}</li> */}
                <Component
                  setDelivery={setDelivery}
                  total={total}
                  delivery={delivery}
                />
              </ul>
              <p>
                총 결제금액 {Number(total + delivery).toLocaleString("ko-KR")}{" "}
                원
              </p>
            </div>

            <button
              className="btn btn-outline-primary mb-3"
              onClick={handleRemoveAll}
            >
              쇼핑백 비우기
            </button>
            <Button>
              <Link
                to="/order"
                state={{
                  total,
                  price,
                  count,
                }}
              >
                주문하기
              </Link>
            </Button>
          </PayInfo>
        </div>
      </CartWrapper>
    </>
  );
};

export default Cart;
