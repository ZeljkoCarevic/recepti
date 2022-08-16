import React from "react";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cousine from "./Cousine";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Cousine" element={<Cousine></Cousine>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
