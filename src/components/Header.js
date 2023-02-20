import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent } from "../img/logoHeader.svg";

export const Header = () => {
  return (
    <header className="bg-gray-800 flex py-3 gap-8 items-center px-20">
      <Link to="/">
        <ReactComponent />
      </Link>
    </header>
  );
};
