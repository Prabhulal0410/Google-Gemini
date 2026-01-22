import { createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const askGemini = async (prompt) => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    return data.reply;
  };

  return (
    <Context.Provider value={{ askGemini }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
