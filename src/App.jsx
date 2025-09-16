import './App.css'
import profileIcon from "./assets/profile-icon.svg" 
import botIcon from "./assets/chatbot.svg"
import { useState } from 'react'

function ChatInput(){
  return (
    <>
      <input type="search" placeholder='Send a message to Chatbot...' size="30"/>
      <button>Send</button>
    </>
  )
}

function ChatMessage(props){
  const {sender,message} = props
  
  return(
      <div className='msg'>
        {sender === "bot" && <img src= {botIcon} className="profile-icon" alt="msg-icon" />}
        <span className='text'>{message}</span>
        {sender === "user" && <img src= {profileIcon} className="profile-icon" alt="msg-icon" />}
      </div>
  )
}

function ChatMessages(){
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

  function SendMessage(){
    setMessages([
        ...messages,
        {
          message : "testing message",
          sender : "user",
          id : crypto.randomUUID() 
        }
      ]
    )
  }

  return(
    <>
    <button onClick={SendMessage}>Send Message</button>
      {
        messages.map((message)=>{
          return (
            <ChatMessage message = {message.message} sender = {message.sender} key={message.id} />
          )
        }) 
      }
    </>
  )

}

function App() {
  return (
    <>
      <ChatInput/>
      <ChatMessages />
    </>
  )
}

export default App
