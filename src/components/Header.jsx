import React from "react";
import { Link } from "react-router-dom";
import { LogoHeader } from "../assets/LogoHeader";

export const Header = () => {
  return (
    <header className="flex py-7 gap-8 items-center px-20">
      <Link to="/">
        <LogoHeader />
      </Link>
    </header>
  );
};
