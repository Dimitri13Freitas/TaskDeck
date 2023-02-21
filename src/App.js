import React from "react";
import "./index.css";
import { Rotas } from "./components/Rotas";
import { GlobalStorage } from "./GlobalContext";

// export const GlobalContext = React.createContext();

// const GlobalStorage = ({ children }) => {
//   const [targetBoard, setTargetBoard] = React.useState(null);
//   const [board, setBoard] = React.useState([
//     { tittle: "Tarefas do dia", id: "tarefas-do-dia" },
//   ]);

//   return (
//     <GlobalContext.Provider
//       value={{ board, setBoard, setTargetBoard, targetBoard }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };

export function App() {
  return (
    <GlobalStorage>
      <Rotas />
    </GlobalStorage>
  );
}
