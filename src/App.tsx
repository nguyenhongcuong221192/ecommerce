import React from "react";
import { Home, Products } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
