import React from "react";
import { Link } from "react-router-dom";
import { LogoHeader } from "../assets/LogoHeader";
import { SignOut, Gear, User } from "@phosphor-icons/react";
import { supabase } from "../../supabase";
import { GlobalContext } from "../GlobalContext";

export const Header = () => {
  const { userInfo } = React.useContext(GlobalContext);
  const [menu, setMenu] = React.useState(true);

  function handleClick() {
    setMenu(!menu);
  }

  async function out() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }

  return (
    <header className="flex py-7 justify-between gap-8 items-center px-20">
      <Link to="/">
        <LogoHeader />
      </Link>
      <button
        onClick={handleClick}
        className="bg-gray-800 w-12 h-12 rounded-full relative border border-gray-800 cursor-pointer"
      >
        <User size={24} className="m-auto" color="#7C7C8A" />
        <ul
          className={`absolute top-full  flex gap-4 items-end flex-col mt-4 right-0 ${
            menu ? "hidden" : null
          }`}
        >
          <li className="bg-gray-800 text-gray-400 flex gap-2 items-center animate-slideIn hover:text-gray-100 rounded py-1 px-2">
            <Gear size={16} />
            Configurações
          </li>
          <li
            onClick={out}
            style={{ animationDelay: "200ms" }}
            className="bg-gray-800 opacity-0 flex items-center text-red-900 gap-2 animate-slideIn hover:text-white rounded py-1 px-2 "
          >
            <SignOut size={16} />
            Sair
          </li>
        </ul>
      </button>
    </header>
  );
};
