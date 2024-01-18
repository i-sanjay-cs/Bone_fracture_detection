import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const BoneFracture = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputBoneType, setOutputBoneType] = useState("");
  const [outputResult, setOutputResult] = useState("");
  const [outputStyle, setOutputStyle] = useState({});

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please choose a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setOutputBoneType(result.bone_type);
      setOutputResult(result.result);

      // Apply styles based on the result
      setOutputStyle({
        color: result.result === "Fractured" ? "Red" : "Green",
      });
    } catch (error) {
      console.error("Error detecting fracture:", error);
      setOutputBoneType("Error");
      setOutputResult("Error detecting fracture. Please try again.");
      setOutputStyle({
        color: "black",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 p-8 pt-24 flex flex-col items-center" style={{ minHeight: "100vh" }}>
        <h1 className="text-4xl font-bold mb-4 text-green-800">Bone Fracture Detection</h1>
        {/* Input Section */}
        <div style={{ backgroundColor: "#fff" }} className="p-8 mb-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
          <label htmlFor="fileInput" className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
            Choose File
          </label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
          />
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md ml-4" onClick={handleUpload}>
            Detect Fracture
          </button>
        </div>
        {/* Output Section */}
        <div style={{ backgroundColor: "#fff", width: "600px", height: "200px" }} className="p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            <strong>Bone Type:</strong> <span style={{ color: "black" }}>{outputBoneType}</span> <br />
            <strong>Condition:</strong> <span style={outputStyle}>{outputResult}</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BoneFracture;
