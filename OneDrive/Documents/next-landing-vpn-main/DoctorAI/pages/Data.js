// pages/data.js
import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const DataPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 p-8 flex flex-col items-center" style={{ minHeight: "100vh" }}>
        <h1 className="text-4xl font-bold mb-8 text-green-800">Data Page</h1>
        {/* Your Data content goes here */}
        <p>This is the Data page content.</p>
      </div>
      <Footer />
    </>
  );
};

export default DataPage;
