import axios from 'axios';
import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom';
import Counter from "./Counter";
import {
  Button, ProductDetailWrapper,
  ProductImg,
  ProductInfo, LinkStyle
} from "./productDetail-styled";
import RadioBox from "./RadioBox";
import * as API from "../../../utils/api"

const Product = ({ cart, setCart, count, setCount }) => {

  const { id } = useParams();
  const [object, setObject] = useState(1)
  const [product, setProduct] = useState({})


  const getProductAPI = async () => {
    try {
      API.get("/products/").then((data) => {
        setProduct(
          data.data.find((product) => product._id == id)
        )
      })

    } catch (err) {
      console.log("Err", err);
    }
  }

  useEffect(() => {
    getProductAPI()
  }, [id])



  // 제품 수량 카운팅
  const handleQuantity = (quantity) => {
    if (quantity === "plus") {
      setCount(() => {
        setObject(object + 1)
      });
    } else {
      if (object === 1) {
        return;
      }
      setCount(() => { setObject(object - 1) });
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
    localStorage.setItem("cart", JSON.stringify([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]))

  }

  // cart에 추가
  const handleCart = () => {
    const cartItem = {
      _id: product._id,
      imageUrl: product.imageUrl,
      title: product.title,
      price: product.price,
      manufacturer: product.manufacturer,
      quantity: object,
    };


    // found가 있으면 중복된 물건
    const found = cart.find((el) => el._id === cartItem._id);

    // found.quantity+ count는 기존 db의 수량과 장바구니 클릭을 통해 추가된 수량
    if (found) setQuantity(cartItem._id, found.quantity + object)
    else if (!found) {
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
                <span>₩{Number(product.price).toLocaleString("ko-KR")}</span>
              </div>
              <div>
                <Counter handleQuantity={handleQuantity} object={object} product={product} />
                <RadioBox options={size} />
                <Button className="alert alert-primary" role="alert" onClick={() => {
                  handleCart()
                  alert("상품이 장바구니에 담겼습니다.")
                }

                }>쇼핑백 담기</Button>
                <LinkStyle to={"/order"} state={{
                  count,
                  total: product.price * object,
                  product: product.title
                }}>구매하기</LinkStyle>
              </div>

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
