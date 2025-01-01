import { Password } from "@phosphor-icons/react";
import React from "react";

const types = {
  email: {
    regex: /\S+@\S+\.\S+/,
    errorMessage: "Este email é inválido, tente novamente!",
  },
  password: {
    regex: /^.{6,}$/,
    errorMessage: "A senha deve ter no minimo 6 caracteres",
  },
};

export const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validade(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha o campo, por favor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].errorMessage);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    const { value } = target;
    if (error) validade(value);
    setValue(value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validade(value),
    validate: () => validade(value),
  };
};
