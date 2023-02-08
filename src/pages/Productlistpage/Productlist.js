import React, { useState, useEffect } from "react";
import {
  ProductlistWrapper,
  ProductlistTitle,
  ProductlistItems,
  ProductlistTable,
} from "./Productlist-styled";
import { LayoutWrapper } from "../../components/common-styled";

const Productlist = () => {
  const dummyList = [
    {
      name: "하얀티셔츠",
      inventory: 10,
      status: "상품 준비중",
      price: 10000,
    },
    {
      name: "까만티셔츠",
      inventory: 12,
      status: "판매중",
      price: 15000,
    },
  ];
  const [productName, setproductName] = useState("제품명");
  const [productInventory, setproductInventory] = useState("주문정보");
  const [productStatus, setproductStatus] = useState("상태");
  const [productPrice, setproductPrice] = useState("가격");
  const [productList, setProuctList] = useState(dummyList);

  useEffect(() => {}, [productList]);
  const add = ({ name, inventory, status, price }) => {
    setProuctList([...productList, { name, inventory, status, price }]);
  };
  return (
    <LayoutWrapper>
      <ProductlistWrapper>
        <h1>제품내역</h1>

        <ProductlistTable>
          <ul>
            <ProductlistTitle>
              <div>제품명</div>
              <div>주문정보</div>
              <div>상태</div>
              <div>가격</div>
              <div></div>
            </ProductlistTitle>

            {productList.map((item, index) => {
              return (
                <ProductlistItems key={index} className="key">
                  <div>{item.name}</div>
                  <div>{item.inventory}</div>
                  <div>{item.status}</div>
                  <div>{item.price}</div>
                  <div>
                    <button>수정</button>
                    <button>삭제</button>
                  </div>
                </ProductlistItems>
              );
            })}
          </ul>
        </ProductlistTable>
      </ProductlistWrapper>
    </LayoutWrapper>
  );
};

export default Productlist;
