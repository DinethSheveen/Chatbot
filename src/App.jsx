import './App.css'
import profileIcon from "./assets/profile-icon.svg" 
import botIcon from "./assets/chatbot.svg"

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

function App() {

  const messages = [
    {
      message : "Hello Chatbot",
      sender : "user"
    },
    {
      message : "Hello?  How can I help you?",
      sender : "bot"
    },
    {
      message : "Can you get me today's date",
      sender : "user"
    },
    {
      message : "Today is September 27",
      sender : "bot"
    }
  ];

  const messagesComponent = messages.map((message)=>{
    return (
      <ChatMessage message = {message.message} sender = {message.sender} />
    )
  }) 

  return (
    <>
      <ChatInput/>
      {messagesComponent}
    </>
  )
}

export default App
