import React from "react";
import { Header } from "../components/Header";
import { Plus } from "phosphor-react";
import { Modal } from "../components/Modal";

export const Boards = () => {
  const modalRef = React.useRef();
  const [modal, setModal] = React.useState({
    istrue: false,
    x: "",
    y: "",
  });

  function handleClick(e) {
    setModal({
      istrue: !modal.istrue,
      y: e.nativeEvent.clientY + 14,
      x: e.nativeEvent.clientX - 28,
    });
  }

  return (
    <div className="h-screen relative w-screen bg-gray-900">
      <Header />
      <div className="max-w-5xl m-auto">
        <h1 className="text-gray-400 text-2xl my-12">
          <span className="text-gray-100 font-bold">Usuário x</span>, Bem-vindo
          a sua central de tarefas.
        </h1>
        <div className="flex gap-5">
          <div>
            <button
              onClick={handleClick}
              className="flex py-5 absolute z-20 pr-14 pl-4 flex-col gap-8 group border rounded border-dashed border-yellow-300 hover:border-solid bg-gray-900 hover:border-yellow-800 max-w-[245px]"
            >
              <div className="group-hover:bg-yellow-800 bg-yellow-300 bg-opacity-20 rounded ease-in-out duration-200">
                <Plus
                  className="text-yellow-800 group-hover:text-gray-900"
                  size={26}
                />
              </div>
              <h3 className="text-lg text-gray-100">Create a new Board</h3>
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setModal(!modal.istrue)}
        ref={modalRef}
        className={
          modal.istrue
            ? "bg-black bg-opacity-30 absolute w-full top-0 h-full"
            : ""
        }
      >
        {modal.istrue && <Modal cordenates={modal} />}
      </div>
    </div>
  );
};
