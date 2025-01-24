import React from "react";
import { Header } from "../components/Header";
import { Plus } from "@phosphor-icons/react";
import { Modal } from "../components/Modal";
import { Board } from "../components/Board";
import { GlobalContext } from "../GlobalContext";
import { supabase, getBoards } from "../../supabase";
import { Load } from "../components/Load";

export const Boards = () => {
  const [load, setLoad] = React.useState(true);
  const { board, userInfo } = React.useContext(GlobalContext);
  const [boardt, setBoardt] = React.useState();

  async function getDataBoards() {
    const { data, error } = await getBoards();
    if (!error) {
      console.log(data);
      setBoardt(data);
    }
  }

  React.useEffect(() => {
    getDataBoards();
  }, []);

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
    <div className="h-screen w-screen bg-gray-900">
      <Header />
      <div className="max-w-[1040px] m-auto">
        <h1 className="text-gray-400 text-2xl my-12">
          <span className="text-gray-100 font-bold">
            {userInfo
              ? userInfo.data.session.user.user_metadata.first_name
              : null}
          </span>
          , Bem-vindo a sua central de tarefas.
        </h1>
        <div className="flex flex-wrap gap-5 ">
          {boardt ? (
            <>
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

              {boardt.map((e, i) => (
                <Board key={e.id} kanban={e} index={i} />
              ))}
            </>
          ) : (
            <>
              <div className="rounded animate-pulse bg-gray-800 max-w-[245px] min-h-[128px] w-full relative"></div>
              <div className="rounded animate-pulse bg-gray-800 max-w-[245px] min-h-[128px] w-full relative"></div>
              <div className="rounded animate-pulse bg-gray-800 max-w-[245px] min-h-[128px] w-full relative"></div>
            </>
          )}
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
