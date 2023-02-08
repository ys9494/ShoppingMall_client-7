import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {NavContainer, LinkStyle} from "./nav-styled";
const Nav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/categories");
        const category = response.data;
        setCategories(category);
      } catch(err) {
        console.log(err);
      }
    })();
  }, [])
  
  return (
    <>
      <NavContainer>
          <ul>
            {
              categories.map(category => {
                return (
                  <li key={category._id}>
                    <LinkStyle to={`/product/${category._id}`}>
                      {category.title}
                    </LinkStyle>
                  </li>
                )
              })
            }
          </ul>
      </NavContainer>
    </>
  );
};

export default Nav;
