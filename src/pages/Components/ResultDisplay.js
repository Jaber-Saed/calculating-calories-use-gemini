// components/ResultDisplay.js
import React from "react";

const ResultDisplay = ({ results }) => {
  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Calorie Calculation Results:</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index} className="mb-2">{result.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultDisplay;
