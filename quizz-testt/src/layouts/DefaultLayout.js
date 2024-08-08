import React from "react";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";

const DefaultLayout = () => {
  return (
    <div>
      <Navigation />
      <Sidebar />
      Content
    </div>
  );
};

export default DefaultLayout;
