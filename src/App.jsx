import './App.css'
import profileIcon from "./assets/profile-icon.svg" 
import botIcon from "./assets/chatbot.svg"
import { useEffect, useRef, useState } from 'react'
import "https://unpkg.com/supersimpledev@8.6.4/chatbot.js"

function ChatInput(props){
  const{messages,setMessages} = props

  const [textInput,setTextInput] = useState("")

  function saveText(event){
    setTextInput(event.target.value);
  }
  
  function sendText(){
    const newMessage = [
        ...messages,
        {
          message : textInput,
          sender : "user",
          id : crypto.randomUUID() 
        }
      ]
    
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

function ChatMessage(props){
  const {sender,message} = props
  
  return(
      <div className={sender==="user"?"user-msg":"bot-msg"}>
        {sender === "bot" && <img src= {botIcon} className="profile-icon" alt="msg-icon" />}
        <span className='msg'>{message}</span>
        {sender === "user" && <img src= {profileIcon} className="profile-icon" alt="msg-icon" />}
      </div>
  )
}

function ChatMessages(props){
  const {messages} = props

  const messageRef = useRef(null)

  useEffect(()=>{
    const currentMsgElement = messageRef.current;
    if(currentMsgElement){
      currentMsgElement.scrollTop = currentMsgElement.scrollHeight
    }
  },[messages])

  return(
    <div className='msg-container' ref={messageRef}>
      {
        messages.map((message)=>{
          return (
            <ChatMessage message = {message.message} sender = {message.sender} key={message.id} />
          )
        }) 
      }
    </div >
  )
}

function App() {
  const [messages,setMessages] = useState([
    {
      message : "Hello Chatbot",
      sender : "user",
      id:"id1"
    },
    {
      message : "Hello?  How can I help you?",
      sender : "bot",
      id:"id2"
    },
    {
      message : "Can you get me today's date",
      sender : "user",
      id:"id3"
    },
    {
      message : "Today is September 27",
      sender : "bot",
      id:"id4"
    }
  ])

  return (
    <div className='app-container'>
      <ChatMessages messages = {messages} setMessages={setMessages}/>
      <ChatInput messages = {messages} setMessages={setMessages}/>
    </div>
  )
}

export default App
