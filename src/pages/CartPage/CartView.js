import React from "react";
import { useState } from "react";
import Counter from "../ProductPage/ProductDetail/Counter";

const itemList = ({ carts, onComplete, onRemove, count, setCount }) => {
  // 제품 수량 카운팅
  const handleQuantity = (quantity) => {
    if (quantity === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  return (
    <div>
      <ol>
        {carts &&
          carts.map((item, index) => {
            return (
              <li key={item._id} className={item.isCompleted ? "complete" : ""}>
                <img src={item.imageUrl} alt="Product" />
                <div>
                  <p>{item.title}</p>
                  <p>₩{item.price}</p>
                  <p>{item.manufacturer}</p>
                </div>
                {/* <button
                type="button"
                onClick={() => {
                  onComplete(index);
                }}
              >
                선택
              </button> */}
                <button
                  type="button"
                  onClick={() => {
                    onRemove(index);
                  }}
                >
                  삭제
                </button>
                <button onClick={() => handleQuantity("plus")}>플러스</button>
                <span>수량: {count}</span>
                <button onClick={() => handleQuantity("minus")}>
                  마이너스
                </button>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default itemList;
