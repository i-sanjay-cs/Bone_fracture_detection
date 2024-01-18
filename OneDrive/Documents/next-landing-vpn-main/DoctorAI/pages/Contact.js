// pages/contact.js
import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 p-8 flex flex-col items-center" style={{ minHeight: "100vh" }}>
        <h1 className="text-4xl font-bold mb-8 text-green-800">Contact Page</h1>
        {/* Your Contact content goes here */}
        <p>This is the Contact page content.</p>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
