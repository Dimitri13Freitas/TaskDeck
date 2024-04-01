import React from "react";
import { Header } from "../components/Header";
import { GlobalContext } from "../GlobalContext";

export const Kanban = ({ id }) => {
  const { board, targetBoard } = React.useContext(GlobalContext);

  // console.log(contentData);

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <Header />
      <div className="max-w-[1240px] m-auto">
        <div className="my-3 flex"></div>
        <button>Adionar lista</button>
      </div>
    </div>
  );
};
