import React from "react";

export const Input = ({
  id,
  className,
  label,
  value,
  type,
  onBlur,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className={" mb-1 text-base text-gray-100 block z-10"}
      >
        {label ? label : "Label Input"}
      </label>
      <input
        id={id}
        className={
          className +
          " bg-gray-800 m-0 block rounded outline-none focus-within:ring-2 ring-yellow-300 text-gray-100"
        }
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <p className="text-red-900 text-xs mb-4 mt-1">{error}</p>
    </>
  );
};
