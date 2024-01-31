// ImageProcessor.js
import React, { useState } from "react";
import client from "../api";

const ImageProcessor = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    const response = await client.calculateCalories(formData);
    setCalories(response.data.calories);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageUpload} />
      <input
        type="text"
        placeholder="Meal Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button type="submit">Calculate Calories</button>
      {calories && <p>Total Calories: {calories}</p>}
    </form>
  );
};

export default ImageProcessor;
