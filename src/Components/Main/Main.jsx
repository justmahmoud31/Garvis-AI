import "./Main.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faLightbulb,
  faMessage,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo, faCode } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../../context/context";
const Main = () => {
  const { onSent, recentPrompt, result, loading, resultData, setinput, input } =
    useContext(Context);
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Garvis</p>
          <img src={assets.user_icon} alt="..."></img>
        </div>
        <div className="main-container">
        {!result?<> <div className="greet">
            <p>
              <span>Hello.....</span>
            </p>
            <p>How Can I help you today,sir?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Tell me How can I mange my time ?</p>
              <FontAwesomeIcon icon={faCompass} className="icon" />
            </div>
            <div className="card">
              <p>Tell me How can I mange my time ?</p>
              <FontAwesomeIcon icon={faLightbulb} className="icon" />
            </div>
            <div className="card">
              <p>Explain the gravity Lows of Isaac newten</p>
              <FontAwesomeIcon icon={faMessage} className="icon" />
            </div>
            <div className="card">
              <p>What is npm ?</p>
              <FontAwesomeIcon icon={faCode} className="icon" />
            </div>
          </div></>:<div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="..."></img>
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon}></img>
                {loading?<div className='loader'></div>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
               
            </div>
          </div>}
       
          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                onChange={(e) => {
                  setinput(e.target.value);
                }}
                value={input}
                placeholder="Enter a Prompt here"
              ></input>
              <div>
                {input?<button onClick={() => onSent()}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>:null}
              </div>
            </div>
            <p className="bottom-info">
              <FontAwesomeIcon icon={faCircleInfo} /> Garvis is an AI Model You
              can consider him as your personal assistant
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
