import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="min-h-screen container mx-auto p-4 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
