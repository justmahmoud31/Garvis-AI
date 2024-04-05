import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompt,setRecentPrompt,newChat } = useContext(Context);
   const loadPrompt = async(prompt)=>{
   setRecentPrompt(prompt)
    await onSent(prompt)
   }
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => {
            setExtended((prev) => !prev);
          }}
          className="menu"
          src={assets.menu_icon}
          alt=".."
        />
        <div onClick={()=>{newChat()}} className="new-chat">
          <img src={assets.plus_icon} alt="..." />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => (
              <div onClick={()=>{loadPrompt(item)}} className="recent-entry" key={index}>
                <img src={assets.message_icon} alt="..." />
                <p>{item.slice(0,18)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="buttom-icon recent-entry">
          <img src={assets.question_icon} alt="..." />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="buttom-icon recent-entry">
          <img src={assets.history_icon} alt="..." />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="buttom-icon recent-entry">
          <img src={assets.setting_icon} alt="..." />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
