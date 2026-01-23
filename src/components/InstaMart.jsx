import React from "react";
import instamart from "../Utils/InstaMart";
import InstaMartCard from "./InstaMartCard";

const InstaMart = () => {
  return (
    <div className="mt-20 bg-gray-50 py-6">
      <div className="w-[80%] mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">
          Shop groceries on Instamart
        </h1>

        <div className="flex gap-6 mt-6 overflow-x-auto scrollbar-hide">
          {instamart.map((item) => (
            <InstaMartCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstaMart;
