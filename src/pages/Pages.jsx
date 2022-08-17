import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cousine from "./Cousine";
import Searched from "./Searched";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Cousine/:type" element={<Cousine></Cousine>}></Route>
      <Route path="/searched/:search" element={<Searched />}></Route>
    </Routes>
  );
}

export default Pages;
