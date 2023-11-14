import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <Sidebar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Layout;
