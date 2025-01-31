import React from "react";
import { Header } from "../components/Header";
import { Plus } from "@phosphor-icons/react";
import { Board } from "../components/Board";
import { GlobalContext } from "../GlobalContext";
import { getBoards, setBoards, supabase } from "../../supabase";
import { Modal } from "../components/Modal";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const Boards = () => {
  const { userInfo } = React.useContext(GlobalContext);
  const [boardt, setBoardt] = React.useState();
  const [boardName, setBoardName] = React.useState("");

  async function getDataBoards() {
    const { data, error } = await getBoards();
    if (!error) {
      setBoardt(data);
      let seila = boardt.filter((e, i) => e.slug != "coisas");
      console.log(seila);
    } else {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getDataBoards();
  }, []);

  React.useEffect(() => {
    const subscription = supabase
      .channel("board")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "board" },
        (payload) => {
          // console.log("Realtime update:", payload);
          if (payload.eventType === "INSERT") {
            setBoardt((prevBoards) => [...prevBoards, payload.new]);
          } else if (payload.eventType === "DELETE") {
            console.log("deu certo", payload);
            setBoardt((prevBoards) =>
              prevBoards.filter((e, i) => e.id != payload.old.id),
            );
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const [modal, setModal] = React.useState({
    display: false,
    x: "",
    y: "",
  });

  function handleClick({ clientX, clientY }) {
    setModal({
      display: !modal.istrue,
      y: clientY + 14,
      x: clientX - 28,
    });
  }

  function normalizeString(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
  }

  async function addBoard() {
    if (boardName !== "") {
      setModal(!modal.display);
      setBoardName("");
      const response = await setBoards({
        title: boardName,
        slug: normalizeString(boardName),
      });
      console.log(response);
    }
  }

  function confirm({ keyCode }) {
    if (keyCode === 13) addBoard();
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

          {boardt ? (
            <>
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

      <Modal modalState={[modal, setModal]}>
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ top: `${modal.y}px`, left: `${modal.x}px` }}
          className="absolute flex flex-col z-30 items-center py-4 px-2 rounded justify-center bg-gray-800 max-w-[180px]"
        >
          <div className="w-7 h-7 -top-2 rotate-45 left-4 bg-gray-800 absolute"></div>
          <Input
            onKeyDown={confirm}
            onChange={({ target }) => setBoardName(target.value)}
            value={boardName}
            id="modal"
            label="Digite o nome do seu novo board."
            className="lg:w-40 mb-3 rounded outline-none py-1 pl-1 bg-gray-900 focus-within:ring-2 ring-yellow-300 text-gray-100"
            focus={modal.display}
            error=""
          />
          <Button onClick={addBoard} children="Criar" className="py-1 px-11" />
        </div>
      </Modal>
    </div>
  );
};
