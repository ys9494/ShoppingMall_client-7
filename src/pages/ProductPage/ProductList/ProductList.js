import axios from "axios";
import React, { useEffect, useState } from 'react';
import { ProductWrapper, LinkStyle } from "./styled";

const Product = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/products");
        const products = response.data;
        setProductList(products);
      } catch(err) {
        console.log(`ERROR: ${err}`);
      }
    })();
  }, []);

  return (
    <>
      <ProductWrapper>
        <ul>
          { 
            productList.map(item => {
              return (
                <li key={item._id}>
                  <LinkStyle to={`/product/detail?title=${item.title}&imgurl=${item.imageUrl}&price=${item.price}`}>
                    <img
                      src={item.imageUrl}
                      alt={`Product ${item.title}`}
                    />
                    <div>
                      <p>{item.title}</p>
                      <span>
                        ₩
                        {
                          item.price
                        }
                        </span>
                    </div>
                  </LinkStyle>
                </li>
              )
            })
          }
        </ul>
      </ProductWrapper>
    </>
  );
};

export default Product;
