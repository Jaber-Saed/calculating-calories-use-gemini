import React, { useState } from "react";
import ImageUpload from "./Components/ImageUpload";
import DescriptionInput from "./Components/DescriptionInput";
import ResultDisplay from "./Components/ResultDisplay";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv').config()
const fs = require("fs");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

const Home = () => {
  const [imageData, setImageData] = useState(null);
  const [description, setDescription] = useState("");
  const [results, setResults] = useState([]);

  const handleImageUpload = async (image) => {
    setImageData(image);
  };

  const handleDescriptionSubmit = async (desc) => {
    setDescription(desc);
    run();
  };

  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const prompt = `As an expert in calculating calories, give the number of calories in the dish he described ${description}`;
    const imageParts = [fileToGenerativePart(imageData, "image/jpeg")];
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    setResults(text);
    console.log(text);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-6">Calorie Calculator App</h1>
        <ImageUpload onImageUpload={handleImageUpload} />
        <DescriptionInput onDescriptionSubmit={handleDescriptionSubmit} />
        <ResultDisplay results={results} />
      </div>
    </div>
  );
};

export default Home;
