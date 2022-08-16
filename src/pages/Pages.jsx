import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cousine from "./Cousine";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Cousine/:type" element={<Cousine></Cousine>}></Route>
    </Routes>
  );
}

export default Pages;
