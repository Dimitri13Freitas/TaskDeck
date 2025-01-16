import React from "react";
import { DotsThreeOutlineVertical, Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

export const Board = ({ kanban, ...props }) => {
  const { setTargetBoard } = React.useContext(GlobalContext);

  const dragEvents = {
    onDragStart(e) {
      console.log(e);
    },
    onDrag(e) {
      console.log(e);
    },
    onDragEnd(e) {
      console.log(e);
    },
  };

  return (
    <Link
      {...dragEvents}
      onClick={(e) => setTargetBoard(e.target.id)}
      draggable="true"
      to={`./boards/${kanban.id}`}
      id={kanban.id}
      className="rounded text-gray-100 bg-white group border border-gray-900 hover:border-borderT bg-opacity-[.03] max-w-[245px] min-h-[128px] w-full relative"
      {...props}
    >
      <button
        id={kanban.id}
        className="flex w-full h-full pt-2 justify-between pl-4"
      >
        <h3 className="text-lg max-w-[185px] break-words text-left">
          {kanban.title}
        </h3>
        <div className="p-1 mr-1">
          <DotsThreeOutlineVertical
            className="text-gray-400 group-hover:block hidden text-opacity-40"
            size={24}
            weight="fill"
          />
        </div>
      </button>
      <button className="p-1 group-hover:block hidden absolute bottom-0 right-0  m-1">
        <Star size={24} className=" text-gray-400 text-opacity-40" />
      </button>
    </Link>
  );
};
