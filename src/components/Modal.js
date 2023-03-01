import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { GlobalContext } from "../GlobalContext";

export const Modal = ({ setModal, cordenates }) => {
  const { board, setBoard } = React.useContext(GlobalContext);
  const [boardName, setBoardName] = React.useState("");

  function normalizeString(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
  }

  function handleClick() {
    if (boardName !== "") {
      setModal(!cordenates.istrue);
      setBoardName("");
      setBoard([
        ...board,
        { title: boardName, id: normalizeString(boardName) },
      ]);
    }
  }

  function comfirm({ keyCode }) {
    if (keyCode === 13) handleClick();
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{ top: `${cordenates.y}px`, left: `${cordenates.x}px` }}
      className="relative flex flex-col z-30 items-center py-4 px-2 rounded justify-center bg-gray-800 max-w-[180px]"
    >
      <div className="w-7 h-7 -top-2 rotate-45 left-4 bg-gray-800 absolute"></div>
      <Input
        onKeyDown={comfirm}
        onChange={({ target }) => setBoardName(target.value)}
        value={boardName}
        id="modal"
        classLabel="text-center text-gray-400 "
        label="Digite o nome do seu novo board."
        className="lg:w-40 py-1 pl-1 bg-gray-900"
        focus={cordenates.istrue}
      />
      <Button onClick={handleClick} children="Criar" className="py-1 px-11" />
    </div>
  );
};
