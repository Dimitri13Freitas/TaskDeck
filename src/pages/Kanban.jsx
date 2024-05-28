import React from "react";
import { Header } from "../components/Header";
import { GlobalContext } from "../GlobalContext";
import { Star, DotsThreeOutlineVertical } from "@phosphor-icons/react";

export const Kanban = ({ id }) => {
  const { board, targetBoard } = React.useContext(GlobalContext);
  const [teste, setTeste] = React.useState(0);

  function handleClick() {}

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <Header />
      <div className="m-auto">
        <div className="bg-yellow-800 bg-opacity-5 block w-full">
          <div className="max-w-[1240px] m-auto py-1 px-3 flex items-center justify-between">
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
        <div className="flex overflow-x-auto w-full flex-grow">
          <div className="pt-2 px-3 flex gap-3 h-full">
            <div className="w-80 bg-white"></div>
            <div className="w-80 bg-white"></div>
            <div className="w-80 bg-white"></div>
            <div className="w-80">
              <button
                className="text-gray-800 py-2 w-full px-10 rounded font-bold bg-yellow-800"
                onClick={handleClick}
              >
                Adicionar lista
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
