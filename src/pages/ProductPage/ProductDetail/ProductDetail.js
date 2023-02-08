import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {
  ProductDetailWrapper,
  ProductImg,
  ProductInfo, Button,
} from "./productDetail-styled";
import RadioBox from "./RadioBox";

const Product = ({ cart, setCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({})
  const [count, setCount] = useState(1);
  useEffect(() => {
    axios.get("http://localhost:8001/api/products/").then((data) => {
      setProduct(
        data.data.find((product) => product._id === (id))
      );

    });
  }, [id]);

  // 숫자에 콤마 추가(1,000)
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  }

  // 제품 수량 카운팅
  const handleQuantity = (quantity) => {
    if (quantity === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };


  // 장바구니 중복 체크

  const setQuantity = (id, quantity) => {
    const found = cart.filter((el) => el._id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
      _id: product._id,
      imageUrl: product.imageUrl,
      title: product.title,
      price: product.price,
      manufacturer: product.manufacturer,
      quantity: quantity,
    };
    // 값만 수정된 새로운 배열 리턴
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  }

  // cart에 추가
  const handleCart = () => {
    const cartItem = {
      _id: product._id,
      imageUrl: product.imageUrl,
      title: product.title,
      price: product.price,
      manufacturer: product.manufacturer,
      quantity: count,


    };


    // found가 있으면 중복된 물건
    const found = cart.find((el) => el._id === cartItem._id);

    // found.quantity+ count는 기존 db의 수량과 장바구니 클릭을 통해 추가된 수량
    if (found) setQuantity(cartItem._id, found.quantity + count);
    else {
      setCart([...cart, cartItem]);
      localStorage.setItem("cart", JSON.stringify([...cart, cartItem]))
    }
    //기존 카트는 유지하고 카트 item 추가

    console.log(cart)
  }

  const size = { type: "size", option: ["small", "medium", "large", "xlarge", "xxlarge"] };

  return (
    product && (
      <>
        <ProductDetailWrapper>
          <div>
            <ProductImg>
              <img
                src={product.imageUrl}
                alt="image"
              />
            </ProductImg>
            <ProductInfo>
              <div>
                <p>{product.title}</p>
                <span>₩{convertPrice(product.price + "")}</span>
              </div>
              <div>
                {/* <RadioBox options={size} /> */}
                <RadioBox options={size} />
                <button onClick={() => handleCart()}>쇼핑백 담기</button>
                <button>구매하기</button>
              </div>
              <button onClick={() => handleQuantity("plus")}>플러스</button>
              <br />
              <span>총 수량 {convertPrice(count)}</span>
              <br />
              <span>총 가격 {convertPrice(product.price * count)}</span>
              <button onClick={() => handleQuantity("minus")}>마이너스</button>
              <div>
                <p>
                  오후 2시 이전 주문 시 오늘출발 / 오늘도착
                  <br />
                  공식 홈페이지 전용 서비스입니다.
                  <br />
                  추가 배송비는 발생하지 않습니다.
                </p>
              </div>
            </ProductInfo>
          </div>
        </ProductDetailWrapper>
      </>
    ));
};

export default Product;
