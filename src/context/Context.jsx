import { createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {

  const askGemini = async (prompt) => {
    try {
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      const data = await res.json();
      console.log("RAW RESPONSE:", data);

      const answer =
        data.candidates?.[0]?.content?.parts?.[0]?.text;

      console.log("AI:", answer);
    } catch (error) {
      console.error("Gemini error:", error);
    }
  };

  // test
  askGemini("what is react?");

  return (
    <Context.Provider value={{ askGemini }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
