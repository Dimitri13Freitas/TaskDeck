import React from "react";
import { Header } from "../components/Header";
import { GlobalContext } from "../GlobalContext";

export const Kanban = ({ id }) => {
  const { board, targetBoard } = React.useContext(GlobalContext);

  function handleClick() {
    console.log("teset");
  }

  // console.log(board[0].title);

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <Header />
      <div className="m-auto">
        <div className="bg-yellow-800 bg-opacity-5 block w-full h-10">
          <div className="max-w-[1240px] flex">
            <h2 className="text-gray-100">{targetBoard}</h2>
          </div>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="text-gray-100 inline hover:text-white"
          >
            Adionar lista
          </button>
        </div>
      </div>
    </div>
  );
};
