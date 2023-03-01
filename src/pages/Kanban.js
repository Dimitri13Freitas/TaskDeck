import React from "react";
import { Header } from "../components/Header";
import { GlobalContext } from "../GlobalContext";

export const Kanban = ({ id }) => {
  const { board, targetBoard } = React.useContext(GlobalContext);
  const contentData = board.filter((e) => e.id === targetBoard);

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <Header />
      <div className="max-w-[1240px] m-auto">
        <div className="my-3 flex">
          <h1 className="text-white font-bold text-xl">
            {contentData[0].title}
          </h1>
          <p>{contentData[0].id}</p>
        </div>
        <button>Adionar lista</button>
      </div>
    </div>
  );
};
