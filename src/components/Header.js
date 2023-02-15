import React from "react";
import { ReactComponent } from "../img/logoHeader.svg";

export const Header = () => {
  return (
    <header className="bg-gray-800 flex py-3 gap-8 items-center px-20">
      <ReactComponent />
    </header>
  );
};
