import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { ROUTE_ARR } from "./routes/route";
import { useUserDispatch } from "./context/UserContext";

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  const dispatch = useUserDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch({
        type: "LOGIN",
      });
    } else {
      dispatch({
        type: "LOGOUT",
      });
    }
  }, []);

  // 숫자에 콤마 추가(1,000)
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  return (
    <>
      <Reset />
      <Nav />
      <Header />
      <Routes>
        {ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element count={count} setCount={setCount} cart={cart} setCart={setCart} convertPrice={convertPrice} />} key={index} />
            // <Route path={route.path} element={<route.element />} key={index} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
