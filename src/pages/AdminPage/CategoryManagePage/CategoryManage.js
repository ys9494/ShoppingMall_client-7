import axios from "axios";
import React, { useEffect, useState } from 'react';
import { CategoryWrapper } from "./styled";

const CategoryManage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [addTitle, setAddTitle] = useState('');
  const [anyTitle, setAnyTitle] = useState('');
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/categories");
        const category = response.data;
        setCategoryList(category);
      } catch(err) {
        console.log(err);
      }
    })();
  }, []);

  const categoryAddHandler = async (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { 
        title: addTitle
      }
    }

    console.log(addTitle);
    try {
      await axios.post("http://localhost:8001/api/categories", config);
    } catch(err) {
      console.log(err);
    }
  }
  const categoryUpdateHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8001/api/categories/${anyTitle}`, config);
    } catch(err) {
      console.log(err);
    }
  }
  const categoryDeleteHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8001/api/categories/${anyTitle}`);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <CategoryWrapper>
        <form>
          <div>
            <p>CATEGORY MANAGE</p>
            <div>
              <label htmlFor="create">CATEGORY</label>
              <div>
                <input 
                  type="text"
                  id="create"
                  placeholder="CATEGORY NAME"
                  onChange={(e) => setAddTitle(e.target.value)} />
                <button onClick={categoryAddHandler}>ADD</button>
              </div>
            </div>
          </div>
          <div>
            <ul>
              {
                categoryList.map(category => {
                  return (
                    <li key={category._id}>
                      <input type="text" value={category.title} disabled onChange={(e) => setAnyTitle(e.target.value)} />
                      <button onClick={categoryUpdateHandler}>UPDATE</button>
                      <button onClick={categoryDeleteHandler}>DELETE</button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </form>
      </CategoryWrapper>
    </>
  );
};

export default CategoryManage;
