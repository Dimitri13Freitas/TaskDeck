import React from "react";
import { DotsThreeOutlineVertical, Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Board = ({ kanban, index, ...props }) => {
  return (
    <Link
      onClick={(e) => setTargetBoard(e.target.id)}
      draggable="true"
      to={`./boards/${kanban.id}`}
      id={kanban.id}
      className="rounded text-gray-100 bg-white transition-colors group border border-gray-900 hover:border-borderT bg-opacity-[.03] max-w-[245px] min-h-[128px] w-full relative"
      {...props}
    >
      <button
        id={kanban.id}
        className="flex w-full h-full pt-2 justify-between pl-4"
      >
        <h3 className="text-lg max-w-[185px] break-words text-left">
          {kanban.title}
        </h3>
        <div className="transition-color mr-2">
          <DotsThreeOutlineVertical
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              console.log("options");
            }}
            className="text-gray-400 hover:bg-gray-100 hover:bg-opacity-5 p-1 rounded group-hover:block hidden text-opacity-40"
            size={28}
            weight="fill"
          />
        </div>
      </button>
    </Link>
  );
};
