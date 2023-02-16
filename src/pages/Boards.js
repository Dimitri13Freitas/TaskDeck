import React from "react";
// import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Plus, DotsThreeOutlineVertical, Star } from "phosphor-react";

export const Boards = () => {
  function handleClick(e) {
    console.log(e);
  }

  return (
    <div className="h-screen w-screen bg-gray-900">
      <Header />
      <div className="max-w-5xl m-auto">
        <h1 className="text-gray-400 text-2xl my-12">
          <span className="text-gray-100 font-bold">Usuário x</span>, Bem-vindo
          a sua central de tarefas.
        </h1>
        <div className="flex gap-5">
          <div
            onClick={handleClick}
            className="group border rounded inline-block text-gray-100 border-dashed border-yellow-300 hover:border-solid hover:border-yellow-800 max-w-[243px]"
          >
            <button className="flex w-full h-full py-5 pr-14 pl-4 flex-col gap-8">
              <div className="group-hover:bg-yellow-800 bg-yellow-300 bg-opacity-20 rounded">
                <Plus
                  className="text-yellow-800 group-hover:text-gray-900"
                  size={26}
                />
              </div>
              <h3 className="text-lg">Create a new Board</h3>
            </button>
          </div>
          <div
            onClick={handleClick}
            className="group rounded inline-block text-gray-100 bg-white border border-gray-900 hover:border-borderT bg-opacity-[.03] max-w-[243px] w-full relative"
          >
            <button className="flex w-full h-full pt-2 justify-between pl-4">
              <h3 className="text-lg">Tarefas do dia</h3>
              <button className="p-1 mr-1">
                {/* Select component */}
                <DotsThreeOutlineVertical
                  className=" text-gray-400 text-opacity-40"
                  size={24}
                  weight="fill"
                />
              </button>
            </button>
            <button className="p-1 absolute bottom-0 right-0  m-1">
              {/* checkbox component */}
              <Star size={24} className=" text-gray-400 text-opacity-40" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
