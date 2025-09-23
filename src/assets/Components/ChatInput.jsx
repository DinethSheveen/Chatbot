import { useState } from "react";
import "https://unpkg.com/supersimpledev@8.6.4/chatbot.js"

function ChatInput(props){
  const{messages,setMessages} = props

  const [textInput,setTextInput] = useState("")

  function saveText(event){
    setTextInput(event.target.value);
  }
  
  function sendText(){
    let newMessage;
    if(!textInput){
        return
    }
    else{
        newMessage = [
        ...messages,
        {
          message : textInput,
          sender : "user",
          id : crypto.randomUUID() 
        }
      ]
    }
    
    setMessages(newMessage)

    let response = Chatbot.getResponse(textInput)

    setMessages([
      ...newMessage,
      {
          message : response,
          sender : "bot",
          id : crypto.randomUUID() 
        }
    ])
    setTextInput("")    
  }

  function sendTextOnKey(event){
    if(event.key==="Enter"){
      sendText()
    };
  }

  return (
    <div className='input-container'>
      <input type="search" className="text-input" placeholder='Send a message to Chatbot...' size="30" onChange={saveText} onKeyDown={sendTextOnKey} value={textInput}/>
      <button className='send-btn' onClick={sendText}>Send</button>
    </div>
  )
}

export default ChatInput