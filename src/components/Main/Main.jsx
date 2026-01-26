import React, { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Main = () => {
  const { askGemini } = useContext(Context);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const reply = await askGemini(input);

      const botMessage = {
        role: "bot",
        text: reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong 😕 Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
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

        {/* 🔥 MOBILE HAMBURGER (ADDED) */}
        <img
          src={assets.menu_icon}
          alt="menu"
          className="mobile-menu"
          onClick={() =>
            document.querySelector(".sidebar")?.classList.toggle("extended")
          }
        />

        <p>Gemini</p>
        <img src={assets.user_icon} alt="User" />
      </div>

      <div className="container-wrapper">
        <div className="main-container">

          {/* GREETING */}
          {messages.length === 0 && (
            <>
              <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I help you today?</p>
              </div>

              <div className="cards">
                <div className="card" onClick={() => setInput("Suggest beautiful places in the world")}>
                  <p>Suggest beautiful places in the world</p>
                  <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card" onClick={() => setInput("Briefly summarize array in JavaScript")}>
                  <p>Briefly summarize this topic : array</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card" onClick={() => setInput("Improve my code readability")}>
                  <p>Improve my code readability</p>
                  <img src={assets.message_icon} alt="" />
                </div>

                <div className="card" onClick={() => setInput("Suggest some places")}>
                  <p>Suggest some places</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          )}

          {/* CHAT */}
          <div className="chat-area">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.role === "user" ? "chat-user" : "chat-bot"}
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.text}
                </ReactMarkdown>
              </div>
            ))}

            {loading && (
              <div className="chat-bot skeleton">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line short"></div>
              </div>
            )}

            <div ref={chatEndRef}></div>
          </div>

          {/* INPUT */}
          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                placeholder="Enter a prompt here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img
                  src={assets.send_icon}
                  alt="Send"
                  onClick={handleSend}
                  style={{
                    opacity: loading ? 0.5 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                />
              </div>
            </div>

            <p className="bottom-info">
              Gemini can make mistakes, so double-check it
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
