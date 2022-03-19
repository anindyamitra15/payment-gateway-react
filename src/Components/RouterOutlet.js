import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donate from "./Pages/Donate";
import Home from "./Pages/Home";
import Navbar from "./Partials/Navbar";

const RouterOutlet = ({children}) => {
  return (
    <BrowserRouter>
      <div className="RouterOutlet">
      {children}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="donate" element={<Donate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouterOutlet;
