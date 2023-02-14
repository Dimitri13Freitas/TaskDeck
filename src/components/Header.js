import React from "react";
import { Button } from "./Button";
import { ReactComponent } from "../img/logoHeader.svg";

export const Header = () => {
  return (
    <header className="bg-gray-800 flex">
      <Button children="Criar" className="" />
      <ReactComponent />
    </header>
  );
};
