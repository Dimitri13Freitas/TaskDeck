import React from "react";

export const Input = ({ className, classLabel, label, ...props }) => {
  return (
    <>
      <label
        className={classLabel + " mb-3 text-base text-gray-100 block z-10"}
      >
        {label ? label : "Label Input"}
      </label>
      <input
        className={
          className +
          " mb-4 lg:w-96 block bg-gray-800 rounded py-3 pl-3 outline-none focus-within:ring-2 ring-yellow-300 text-gray-100"
        }
        type="text"
        {...props}
      />
    </>
  );
};
