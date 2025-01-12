import React from "react";

export const Input = ({ id, label, error, setForm, ...props }) => {
  function handleChange({ target }) {
    const { id, value } = target;
    setForm((form) => {
      return { ...form, [id]: value };
    });
  }
  return (
    <>
      <label
        htmlFor={id}
        className={" mb-1 text-base text-gray-100 block z-10"}
      >
        {label ? label : "Label Input"}
      </label>
      <input
        onChange={handleChange}
        id={id}
        className="bg-gray-800 m-0 block rounded outline-none focus-within:ring-2 ring-yellow-300 text-gray-100 py-3 pl-3 lg:w-96"
        {...props}
      />
      <p
        style={{ opacity: error[id + "Error"].length != 0 ? 1 : 0 }}
        className={"text-red-900 text-xs mb-2 mt-1"}
      >
        {error[id + "Error"].length != 0 ? error[id + "Error"] : "."}
      </p>
    </>
  );
};
