import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const Form = ({ setForm, buttonLabel, options, ...props }) => {
  function handleChange({ target }) {
    const { id, value } = target;
    setForm((form) => {
      return { ...form, [id]: value };
    });
  }

  if (options) {
    return (
      <form {...props}>
        {options.map(({ id, label, type, placeholder }) => (
          <Input
            key={id}
            onChange={handleChange}
            id={id}
            className="py-3 pl-3 mb-4 lg:w-96"
            label={label}
            type={type}
            placeholder={placeholder}
          />
        ))}
        <Button className="w-full py-3" children={buttonLabel} />
      </form>
    );
  } else {
    return null;
  }
};
