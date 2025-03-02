import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
