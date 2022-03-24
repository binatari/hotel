import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div className="bg-white absolute w-full">
        <Nav />
      </div>

      {children}
      <div className="bg-black pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
