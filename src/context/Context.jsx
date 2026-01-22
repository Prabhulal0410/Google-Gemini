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

      // Handle API errors safely
      if (!res.ok) {
        const errorText = await res.text();
        console.error("API Error:", res.status, errorText);
        throw new Error("Gemini API failed");
      }

      const data = await res.json();
      return data.reply;
    } catch (error) {
      console.error("askGemini error:", error);
      return "⚠️ Unable to get response from Gemini right now.";
    }
  };

  return (
    <Context.Provider value={{ askGemini }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
