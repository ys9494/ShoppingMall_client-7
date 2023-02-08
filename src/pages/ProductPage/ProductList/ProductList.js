import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LinkStyle, ProductWrapper } from "./styled";

const Product = () => {
  const [productList, setProductList] = useState([]);
  const { category } = useParams();

  const imgError = (e) => e.target.src="https://kuku-keke.com/wp-content/uploads/2020/04/2491_6.png";

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/products");
        const products = response.data;
        const compare = products.filter(product => product.categoryId === category)
        setProductList(compare);
      } catch(err) {
        console.log(`ERROR: ${err}`);
      }
    })();
  }, [category]);

  return (
    <>
      <ProductWrapper>
        <ul>
          { 
            productList &&
            productList.map(item => {
              return (
                <li key={item._id}>
                  <LinkStyle to={`/product/detail/${item._id}`}>
                    { 
                      item.imageUrl &&
                      <img
                        src={item.imageUrl}
                        alt={`Product ${item.title}`}
                        onError={imgError}
                      />
                    }
                    <div>
                      <p>{item.title}</p>
                      <span>
                        ₩ {Number(item.price).toLocaleString("ko-KR")}
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
