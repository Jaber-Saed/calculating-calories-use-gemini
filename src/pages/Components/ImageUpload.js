// components/ImageUpload.js
import React, { useState } from "react";

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = () => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result.split(",")[1];
        onImageUpload(imageData);
      };
      reader.readAsDataURL(image);
    }
  };

  return (
    <div className="mb-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <label className="block text-xl font-bold mb-4">Upload Image</label>
      <input
        type="file"
        onChange={handleImageChange}
        className="mb-2 p-2 border rounded"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageUpload;
