import React from "react";
import { DotsThreeOutlineVertical, Star } from "phosphor-react";

export const Board = ({ tittle }) => {
  return (
    <div className="group rounded inline-block text-gray-100 bg-white border border-gray-900 hover:border-borderT bg-opacity-[.03] max-w-[245px] w-full relative">
      <button className="flex w-full h-full pt-2 justify-between pl-4">
        <h3 className="text-lg">{tittle}</h3>
        <div className="p-1 mr-1">
          {/* Select component */}
          <DotsThreeOutlineVertical
            className=" text-gray-400 text-opacity-40"
            size={24}
            weight="fill"
          />
        </div>
      </button>
      <button className="p-1 absolute bottom-0 right-0  m-1">
        {/* checkbox component */}
        <Star size={24} className=" text-gray-400 text-opacity-40" />
      </button>
    </div>
  );
};
