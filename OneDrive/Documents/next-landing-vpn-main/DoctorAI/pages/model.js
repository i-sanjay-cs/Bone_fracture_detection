// pages/models.js

import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Link from "next/link";

const ModelCard = ({ modelName, description }) => (
  <div className="bg-white p-6 mb-4 rounded-md shadow-md hover:bg-red-500" style={{ width: "350px", height: "370px", backgroundColor: "rgba(245, 245, 245, 0.9)", position: "relative" }}>
    <h2 className="text-xl font-semibold mb-4 text-green-800">{modelName}</h2>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    <Link href={`/${modelName.toLowerCase()}`}>
      <a className="inline-block bg-green-500 text-white px-10 py-2 rounded-md absolute bottom-2 left-20 right-15 mb-4">
        Use {modelName}
      </a>
    </Link>
  </div>
);

const ModelsPage = () => {
  // Sample model data, replace with your actual data
  const models = [
    {
      modelName: "Bone",
      description: "Description for Model A. This is a sample description for Model A. It should stay within the card and not overflow.",
    },
    {
      modelName: "Model B",
      description: "Description for Model B. This is a sample description for Model B. It should stay within the card and not overflow.",
    },
    {
      modelName: "Model C",
      description: "Description for Model B. This is a sample description for Model B. It should stay within the card and not overflow.",
    },
    {
      modelName: "Model E",
      description: "Description for Model B. This is a sample description for Model B. It should stay within the card and not overflow.",
    },
    {
      modelName: "Model F",
      description: "Description for Model B. This is a sample description for Model B. It should stay within the card and not overflow.",
    },
    {
      modelName: "Model G",
      description: "Description for Model B. This is a sample description for Model B. It should stay within the card and not overflow.",
    },
    {
      modelName: "Model H",
      description: "Description for Model B. This is a sample description for Model B. It should stay within the card and not overflow.",
    },
    {
      modelName: "Model I",
      description: "Description for Model B. This is a sample description for Model B. It should stay within the card and not overflow.",
    },
    
    // Add more models as needed
  ];

  return (
    <>
      <Header />
      {/* Your Models Content Goes Here */}
      <div className="bg-gray-100 p-8 flex flex-col items-center" style={{ minHeight: "100vh" }}>
        <h1 className="text-4xl font-bold mb-8 text-green-800">Models Page</h1>
        {/* Render model cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {models.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ModelsPage;
