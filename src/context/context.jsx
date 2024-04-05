/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import runChat from '../Config/Garvis';

export const Context = createContext();

const ContextProvider = (props) => {
    const [input,setinput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompt,setPrevPrompt] = useState([]);
    const [result,setresult] = useState(false);
    const [loading,setloading] = useState(false);
    const [resultData,setresultData] = useState("");
    const delaypara = (index,nextword)=>{
        setTimeout(function(){
            setresultData(prev=>prev+nextword)
        },75*index)
    }
    const newChat = ()=>{
        setloading(false)
        setresult(false)
    }
         // eslint-disable-next-line no-unused-vars
         const onSent = async (prompt) => {
            setresultData("");
            setloading(true);
            setresult(true);
            let response;
            if(prompt!==undefined){
                response = await runChat(prompt);
                setRecentPrompt(prompt);
            }
            else {
                setPrevPrompt(prev=>[...prev,input])
                setRecentPrompt(input)
                response = await runChat(input)
            }
          let responseArray = response.split("**");
          let newResponse ="";
          for(let i =0;i<responseArray.length;i++)
          {
            if(i===0 || i%2 !==1){
                newResponse+=responseArray[i];
            }
            else{
                newResponse+=`<b>${responseArray[i]}</b>`;
            }
          }
          let newResponse2 = newResponse.split("*").join(`</br>`)
           let newResponseArray = newResponse2.split(" ");
           for(let i=0;i<newResponseArray.length;i++){
            let nextword = newResponseArray[i];
            delaypara(i,nextword+" ");
           }
          setloading(false)
          setinput("")
            
        };
        
    const contextValue = {
       prevPrompt,
       setPrevPrompt,
       onSent,
       setRecentPrompt,
       recentPrompt,
       result,
       loading,
       resultData,
       input,
       setinput,
       newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children} {/* Corrected typo here */}
        </Context.Provider>
    );
};

export default ContextProvider;
