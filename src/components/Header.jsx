import React from "react";
import { Link } from "react-router-dom";
import { LogoHeader } from "../assets/LogoHeader";
import { SignOut, Gear, User, MagnifyingGlass } from "@phosphor-icons/react";
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
    location.reload();
  }

  return (
    <header className="flex py-7 justify-between gap-8 items-center px-20">
      <Link to="/">
        <LogoHeader />
      </Link>
      <label className="relative block w-96">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <MagnifyingGlass className="text-gray-400" size={20} />
        </span>
        <input
          className="placeholder:text-slate-400 text-gray-100 block bg-gray-800 w-full rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-yellow-300 focus:ring-1 sm:text-sm"
          placeholder="Procure por seu kanban..."
          type="text"
          name="search"
        />
      </label>
      <button
        onClick={handleClick}
        className="bg-gray-800 w-12 h-12 rounded-full hover:border-gray-400 transition-colors relative border border-gray-800 cursor-pointer"
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
