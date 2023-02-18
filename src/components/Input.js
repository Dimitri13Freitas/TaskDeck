import React from "react";

export const Input = ({ id, className, classLabel, label, ...props }) => {
  return (
    <>
      <label
        htmlFor={id}
        className={classLabel + " mb-3 text-base text-gray-100 block z-10"}
      >
        {label ? label : "Label Input"}
      </label>
      <input
        id={id}
        className={
          className +
          " bg-gray-800 block mb-4 rounded outline-none focus-within:ring-2 ring-yellow-300 text-gray-100"
        }
        {...props}
      />
    </>
  );
};
