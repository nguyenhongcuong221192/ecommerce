import React from "react";
import { About, Home, Products } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
