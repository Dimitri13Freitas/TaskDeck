import React from "react";

export const Input = ({ label, ...props }) => {
  return (
    <>
      <label className="mb-3 text-base text-gray-100 block">
        {label ? label : "Label Input"}
      </label>
      <input
        className="mb-4 block py-3 bg-gray-800 rounded"
        type="text"
        {...props}
      />
    </>
  );
};
