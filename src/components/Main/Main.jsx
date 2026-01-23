import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const { askGemini } = useContext(Context);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const reply = await askGemini(input);

    const botMessage = {
      role: "bot",
      text: reply,
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="main">
      {/* NAVBAR */}
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User" />
      </div>

      <div className="main-container">
        {/* SHOW GREETING ONLY WHEN NO CHAT */}
        {messages.length === 0 && (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div
                className="card"
                onClick={() => setInput("Suggest beautiful places in the world")}
              >
                <p>Suggest beautiful places in the world</p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div
                className="card"
                onClick={() =>
                  setInput("Briefly summarize array in JavaScript")
                }
              >
                <p>Briefly summarize this topic : array</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div
                className="card"
                onClick={() => setInput("Improve my code readability")}
              >
                <p>Improve my code readability</p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div
                className="card"
                onClick={() => setInput("Suggest some places")}
              >
                <p>Suggest some places</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        )}

        {/* CHAT AREA */}
        <div className="chat-area">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.role === "user" ? "chat-user" : "chat-bot"
              }
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* INPUT AREA */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                alt="Send"
                onClick={handleSend}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <p className="bottom-info">
            Gemini can make mistakes, so double-check it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
