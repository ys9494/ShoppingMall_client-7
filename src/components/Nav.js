import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavContainer, LinkStyle } from "./nav-styled";
const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://kdt-ai6-team07.elicecoding.com/api/categories"
        );
        const category = response.data;
        setCategories(category);
        // console.log("category", category);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <NavContainer>
        <ul>
          <li>
            <LinkStyle to="/product/all">전체 상품</LinkStyle>
          </li>
          {categories &&
            categories.map((category, index) => {
              return (
                <li key={index}>
                  <LinkStyle to={`/product/${category._id}`}>
                    {category.title}
                  </LinkStyle>
                </li>
              );
            })}
        </ul>
      </NavContainer>
    </>
  );
};

export default Nav;
