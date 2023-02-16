import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const Modal = ({ ...props }) => {
  return (
    <div className="relative flex flex-col items-center py-4 px-2 rounded justify-center bg-gray-800 max-w-[170px]">
      <div className="w-7 h-7 -top-2 rotate-45 left-4 bg-gray-800 absolute"></div>
      <Input
        classLabel="text-center text-gray-400 "
        label="Digite o nome do seu novo board."
        className="bg-gray-900 py-1 pl-1  lg:w-36"
      />
      <Button children="Criar" className="py-1 px-11" />
    </div>
  );
};
