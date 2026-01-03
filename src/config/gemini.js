// geminiChat.js
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const model = "gemini-3-pro-preview";

// Create chat session
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

    const answer = response.text;

    contents.push({
      role: "model",
      parts: [{ text: answer }],
    });

    return answer;
  };
}
