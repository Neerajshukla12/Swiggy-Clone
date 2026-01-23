import imageGridCards from "../Utils/FoodData";
import React from "react";
import FoodCard from "./FoodCard";

const FoodOption = () => {
  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Order our best food options
      </h2>

      {/* Horizontal scroll container */}
      <div className="flex  gap-6 overflow-x-auto scrollbar-hide ">
        {imageGridCards.map((itemData) => (
          <FoodCard key={itemData.id} itemData={itemData} />
        ))}
      </div>
    </div>
  );
};

export default FoodOption;
