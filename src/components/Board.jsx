import React from "react";
import { DotsThreeOutlineVertical, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { deleteBoard } from "../../supabase";

export const Board = ({ kanban, index, deleteFunction, ...props }) => {
  const [options, setOptions] = React.useState({
    display: false,
    y: "",
    x: "",
  });

  function handleClick(e) {
    e.preventDefault();
    setOptions({
      display: !options.display,
      y: e.clientY + 5,
      x: e.clientX + 5,
    });
  }

  // async function optionsBoardDel({ target }) {
  //   const response = await deleteBoard(target.id);
  //   console.log(response);
  // }

  return (
    <Link
      // onClick={(e) => setTargetBoard(e.target.id)}
      draggable="true"
      to={`./boards/${kanban.slug}`}
      id={kanban.slug}
      className="rounded text-gray-100 bg-white transition-colors group border border-gray-900 hover:border-borderT bg-opacity-[.03] max-w-[245px] min-h-[128px] w-full"
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
            onClick={handleClick}
            className="text-gray-400 hover:bg-gray-100 hover:bg-opacity-5 p-1 rounded group-hover:block hidden text-opacity-40"
            size={28}
            weight="fill"
          />
          <Modal modalState={[options, setOptions]}>
            <div
              style={{ top: `${options.y}px`, left: `${options.x}px` }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bg-gray-800 z-50 max-w-40 w-full p-2 rounded border border-borderT"
            >
              <ul
                onClick={(e) => e.preventDefault()}
                className="text-sm flex flex-col gap-2 transition-colors"
              >
                <li className="flex flex-row p-1  hover:bg-yellow-500 transition-colors rounded items-center gap-1">
                  <Trash size={20} />
                  Settings
                </li>
                <li className="flex flex-row p-1  hover:bg-yellow-500 transition-colors  rounded items-center gap-1">
                  <Trash size={20} />
                  Add flag
                </li>
                <li
                  onClick={deleteFunction}
                  id={kanban.slug}
                  className="flex flex-row p-1  hover:bg-red-900 hover:text-gray-700 transition-colors  rounded items-center gap-1"
                >
                  <Trash size={20} />
                  Delete
                </li>
              </ul>
            </div>
          </Modal>
        </div>
      </button>
    </Link>
  );
};
