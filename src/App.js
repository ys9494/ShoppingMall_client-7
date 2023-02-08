import React from "react";
import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { ROUTE_ARR } from "./routes/route";

function App() {
  return (
    <>
      <Reset />
      <Nav />
      <Header />
      <Routes>
        {ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
