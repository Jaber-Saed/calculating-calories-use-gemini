// components/DescriptionInput.js
import React, { useState } from "react";

const DescriptionInput = ({ onDescriptionSubmit }) => {
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    onDescriptionSubmit(description);
  };

  return (
    <div className="mb-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <label className="block text-xl font-bold mb-4">Description</label>
      <textarea
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Submit Description
      </button>
    </div>
  );
};

export default DescriptionInput;
