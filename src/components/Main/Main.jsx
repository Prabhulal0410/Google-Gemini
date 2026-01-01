import React from 'react'
import { assets } from '../../assets/assets'
import "./Main.css"

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Dev</span></p>
            <p>How can i help you today ?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>hello suggest some beautiful places in world</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summrize this topic : array</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>improve my code readability</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>hello suggest some places</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>

          <div className="main-bottom">
            <div className="search-box">
              <input type='text' placeholder='Enter a Propmt Here.'/>
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className="bottom-info">
                Gemini can make mistakes, so double-check it
            </p>
          </div>
        </div>
    </div>
  )
}

export default Main