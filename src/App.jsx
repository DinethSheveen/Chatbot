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

  
  if(sender === "user"){
    return(
      <div className='msg'>
        <span className='text'>{message}</span>
        <img src= {profileIcon} className="profile-icon" alt="msg-icon" />
      </div>
    )
  }
  else{
    return(
      <div className='msg'>
        <img src= {botIcon} className="profile-icon" alt="msg-icon" />
        <span className='text'>{message}</span>
      </div>
    )
  }
}

function App() {
  return (
    <>
      <ChatInput/>
      <ChatMessage sender="user" message="Hello Chatbot"/>
      <ChatMessage sender="bot" message="Hello?  How can I help you?"/>
      <ChatMessage sender="user" message="Can you get me today's date"/>
      <ChatMessage sender="bot" message="Today is September 27"/>
    </>
  )
}

export default App
