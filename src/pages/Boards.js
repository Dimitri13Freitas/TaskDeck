import React from "react";
import { Header } from "../components/Header";
import { Plus } from "phosphor-react";
import { Modal } from "../components/Modal";

export const Boards = () => {
  const [modal, setModal] = React.useState(false);
  const modalRef = React.useRef();

  React.useEffect(() => {
    console.log(modalRef.current);
  }, []);

  function handleClick(e) {
    e.stopPropagation();
    setModal(!modal);
    modalRef.current.style.top = `${e.nativeEvent.layerY + 14}px`;
    modalRef.current.style.left = `${e.nativeEvent.layerX - 28}px`;
  }

  function clickOutside(e) {
    e.stopPropagation();
    const element = e.target.offsetParent;
    if (element.offsetParent !== modalRef.current && modal) {
      setModal(false);
    }
  }

  return (
    <div
      onClick={clickOutside}
      className="h-screen relative w-screen bg-gray-900"
    >
      <Header />
      <div className="max-w-5xl m-auto">
        <h1 className="text-gray-400 text-2xl my-12">
          <span className="text-gray-100 font-bold">Usuário x</span>, Bem-vindo
          a sua central de tarefas.
        </h1>
        <div className="flex gap-5">
          <div className="relative">
            <button
              onClick={handleClick}
              className="flex py-5 pr-14 pl-4 flex-col gap-8 group border rounded border-dashed border-yellow-300 hover:border-solid hover:border-yellow-800 max-w-[245px]"
            >
              <div className="group-hover:bg-yellow-800 bg-yellow-300 bg-opacity-20 rounded ease-in-out duration-200">
                <Plus
                  className="text-yellow-800 group-hover:text-gray-900"
                  size={26}
                />
              </div>
              <h3 className="text-lg text-gray-100">Create a new Board</h3>
            </button>
            <div ref={modalRef} className="absolute">
              {modal && <Modal />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
