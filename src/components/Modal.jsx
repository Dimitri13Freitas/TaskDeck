import React from "react";

export const Modal = ({ children, modalState }) => {
  const [modal, setModal] = modalState;

  function closeModal(e) {
    e.preventDefault();
    e.stopPropagation();
    setModal((modal) => ({ ...modal, display: !modal.display }));
  }

  if (modal.display) {
    return (
      <div
        className="bg-black transition-colors duration-150 ease-in-out bg-opacity-5 absolute w-full top-0 left-0 h-full"
        onClick={closeModal}
      >
        {!children.length ? children : null}
      </div>
    );
  }
  return null;
};
