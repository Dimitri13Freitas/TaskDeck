import React from "react";

export const Input = ({ label, ...props }) => {
  return (
    <>
      <label className="mb-3 text-base text-gray-100 block">
        {label ? label : "Label Input"}
      </label>
      <input
        className="lg:w-96 text-gray-100 mb-4 block py-3 pl-3 bg-gray-800 rounded outline-none focus-within:ring-2 ring-cyan-300"
        type="text"
        {...props}
      />
    </>
  );
};
