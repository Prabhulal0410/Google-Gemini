import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const model = "gemini-1.5-flash";

export function createChat() {
  const contents = [];

  return async function sendMessage(prompt) {
    contents.push({
      role: "user",
      parts: [{ text: prompt }],
    });

    const response = await ai.models.generateContent({
      model,
      contents,
    });

    const text = response.text;

    contents.push({
      role: "model",
      parts: [{ text }],
    });

    return text;
  };
}
