import "./Sidebar.css"
import {assets} from "../../assets/assets"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <img className="menu" src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">
                    Recent
                </p>
                <p className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is React ...</p>
                </p>
            </div>
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default Sidebar