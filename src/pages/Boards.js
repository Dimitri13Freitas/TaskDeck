import React from "react";
import { Header } from "../components/Header";
import { Plus } from "phosphor-react";
import { Modal } from "../components/Modal";
import { Board } from "../components/Board";
import { GlobalContext } from "../GlobalContext";

export const Boards = () => {
  const { board } = React.useContext(GlobalContext);

  const modalRef = React.useRef();
  const [modal, setModal] = React.useState({
    istrue: false,
    x: "",
    y: "",
  });

  function handleClick({ nativeEvent }) {
    setModal({
      istrue: !modal.istrue,
      y: nativeEvent.clientY + 14,
      x: nativeEvent.clientX - 28,
    });
  }

  return (
    <div className="h-screen relative w-screen bg-gray-900">
      <Header />
      <div className="max-w-[1040px] m-auto">
        <h1 className="text-gray-400 text-2xl my-12">
          <span className="text-gray-100 font-bold">Usuário x</span>, Bem-vindo
          a sua central de tarefas.
        </h1>
        <div className="flex flex-wrap gap-5">
          <button
            onClick={handleClick}
            className="flex py-5 pr-14 pl-4 flex-col gap-8 group border rounded border-dashed border-yellow-300 hover:border-solid  hover:border-yellow-800 max-w-[245px] w-full"
          >
            <div className="group-hover:bg-yellow-800 bg-yellow-300 bg-opacity-20 rounded ease-in-out duration-200">
              <Plus
                className="text-yellow-800 group-hover:text-gray-900"
                size={26}
              />
            </div>
            <h3 className="text-lg text-gray-100">Create a new Board</h3>
          </button>
          {board.map((e) => (
            <Board key={e.id} id={e.id} title={e.title} />
          ))}
        </div>
      </div>
      <div
        onClick={() => setModal(!modal.istrue)}
        ref={modalRef}
        className={
          modal.istrue
            ? "bg-black transition-colors duration-150 ease-in-out bg-opacity-30 absolute w-full top-0 h-full"
            : null
        }
      >
        {modal.istrue && <Modal setModal={setModal} cordenates={modal} />}
      </div>
    </div>
  );
};
