import { createContext, useEffect, useRef } from "react";
import { createChat } from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const chatRef = useRef(null);

  if (!chatRef.current) {
    chatRef.current = createChat();
  }

  const askGemini = async (prompt) => {
    try {
      const answer = await chatRef.current(prompt);
      console.log("AI:", answer);
      return answer;
    } catch (err) {
      console.error("Gemini error:", err);
    }
  };

  useEffect(() => {
    askGemini("What is React?");
  }, []);

  return (
    <Context.Provider value={{ askGemini }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
