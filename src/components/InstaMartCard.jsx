import React from "react";

const InstaMartCard = ({ item }) => {
  return (
    <a
      href={item?.action?.link}
      className="min-w-[160px] bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <img
        className="w-full h-28 object-contain mx-auto"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
        alt={item.accessibility?.altText || item?.action?.text}
        loading="lazy"
      />
      <p className="mt-2 text-sm font-semibold text-gray-800 text-center">
        {item?.action?.text}
      </p>
    </a>
  );
};

export default InstaMartCard;
