import { createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const askGemini = async (prompt) => {
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) throw new Error("API Error");

      const data = await res.json();
      return data.reply;
    } catch (error) {
      console.error(error);
      return "⚠️ Gemini is unavailable right now.";
    }
  };

  return (
    <Context.Provider value={{ askGemini }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
