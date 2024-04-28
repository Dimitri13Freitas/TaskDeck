import React from "react";
import { Header } from "../components/Header";
import { GlobalContext } from "../GlobalContext";
import { Star, DotsThreeOutlineVertical } from "phosphor-react";

export const Kanban = ({ id }) => {
  const { board, targetBoard } = React.useContext(GlobalContext);

  function handleClick() {
    console.log("teset");
  }

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <Header />
      <div className="m-auto">
        <div className="bg-yellow-800 bg-opacity-5 block w-full">
          <div className="max-w-[1240px] m-auto py-1 flex items-center justify-between">
            <div className="py-1 flex items-center gap-8">
              <h2 className="text-gray-100 font-bold">{targetBoard}</h2>
              <button className="p-1 hover:bg-yellow-300 hover:bg-opacity-10 rounded-md">
                <Star className="text-gray-100" size={24} />
              </button>
            </div>
            <div>
              <button className="hover:bg-yellow-300 hover:bg-opacity-10 p-1 rounded-md">
                <DotsThreeOutlineVertical
                  className="text-gray-100"
                  size={24}
                  weight="fill"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] pt-2 m-auto">
          <button
            className="text-gray-800 py-2 px-10 rounded font-bold bg-yellow-800"
            onClick={handleClick}
          >
            Adionar lista
          </button>
        </div>
      </div>
    </div>
  );
};
