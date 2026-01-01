import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className={`sidebar ${extended ? "extended" : ""}`}>
      {/* TOP */}
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu"
          onClick={() => setExtended(!extended)}
        />

        <div className="new-chat">
          <img src={assets.plus_icon} alt="new chat" />
          <p className="text">New Chat</p>
        </div>

        <div className="recent">
          <p className="recent-title text">Recent</p>

          <div className="recent-entry">
            <img src={assets.message_icon} alt="message" />
            <p className="text">What is React ...</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="help" />
          <p className="text">Help</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="activity" />
          <p className="text">Activity</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="settings" />
          <p className="text">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
