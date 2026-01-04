import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export function createChat() {
  const history = [];

  return async function sendMessage(prompt) {
    history.push({
      role: "user",
      parts: [{ text: prompt }],
    });

    const result = await model.generateContent({
      contents: history,
    });

    const text = result.response.text();

    history.push({
      role: "model",
      parts: [{ text }],
    });

    return text;
  };
}
