import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const Modal = ({ cordenates }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{ top: `${cordenates.y}px`, left: `${cordenates.x}px` }}
      className="relative flex flex-col z-30 items-center py-4 px-2 rounded justify-center bg-gray-800 max-w-[180px]"
    >
      <div className="w-7 h-7 -top-2 rotate-45 left-4 bg-gray-800 absolute"></div>
      <Input
        id="modal"
        classLabel="text-center text-gray-400 "
        label="Digite o nome do seu novo board."
        className="lg:w-40 py-1 pl-1 bg-gray-900"
        focus={cordenates.istrue}
      />
      <Button children="Criar" className="py-1 px-11" />
    </div>
  );
};
