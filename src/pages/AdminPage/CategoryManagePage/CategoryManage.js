import axios from "axios";
import React, { useEffect, useState, useRef } from 'react';
import { CategoryWrapper } from "./styled";
import * as API from "../../../utils/api";

const CategoryManage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [flag, setFlag] = useState(true);
  const [value, setValue] = useState('');
  const addInput = useRef();
  const anyInput = useRef([]);
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    (async () => {
      try {
        const response = await API.get("/categories");
        const category = response.data;
        setCategoryList(category.map(c => c[0]));
      } catch(err) {
        console.log(err);
      }
    })();
  }, []);

  const categoryAddHandler = async (e) => {
    e.preventDefault();
    let addValue = addInput.current.value;
    try {
      const response = await API.post("/categories",
        {title: addValue}
      );
      const category = response.data;
      setCategoryList(current => [...current, category]);
    } catch(err) {
      console.log(err);
      alert("해당 카테고리가 존재합니다.");
    }
  }
  const categoryUpdateHandler = async (id, idx) => {
    const current = anyInput.current;
    if(flag) {
      current[idx].disabled = false;
      current[idx].focus();
      setFlag(!flag);
    } else {
      try {
        await API.patch(`/categories/${id}`,
          {title: current[idx].value},
        );
        current[idx].disabled = true;
        setFlag(!flag);
      } catch(err) {
        console.log(err);
      }
    }
    console.log(current, flag);
    // const disabled = current.findIndex(ref => ref.disabled === false);
    // current[disabled].disabled = true;
    
    // console.log(disabled);
    
    
  }
  const categoryDeleteHandler = async (id) => {
    try {
      await API.delete(`/categories/${id}`);
      setCategoryList(current => current.filter(category => category._id !== id));
    } catch(err) {
      console.log(err);
      alert("해당 카테고리에 상품이 존재합니다.");
    }
  }

  const onChange = (e) => {
    setValue((prevState) => {
      return [...prevState, e.target.value];
    });
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
                  ref={addInput} />
                <button onClick={categoryAddHandler}>ADD</button>
              </div>
            </div>
          </div>
          <div>
            <ul>
              {
                categoryList.map((category, idx) => {
                  return (
                    <li key={idx}>
                      <input type="text" value={category.title} disabled ref={(e) => (anyInput.current[idx] = e)} onChange={onChange} />
                      <button onClick={(e) => {
                        e.preventDefault();
                        categoryUpdateHandler(category._id, idx);
                      }}>UPDATE</button>
                      <button onClick={(e) => {
                        e.preventDefault();
                        categoryDeleteHandler(category._id);
                      }}>DELETE</button>
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
