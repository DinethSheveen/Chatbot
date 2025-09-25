import { useState } from 'react'
import './App.css'
import ChatMessages from  "./assets/Components/ChatMessages"
import ChatInput from './assets/Components/ChatInput'

function App() {
  const [messages,setMessages] = useState([])
  
  
  return  (
      <div className='app-container'>
        {messages.length===0?
          <>
            <div className='default-msg'>yours friendly youth chatbot. i could only flip a coin, tell you the date and roll a dice...</div>
            <ChatMessages messages = {messages} setMessages={setMessages}/>
            <ChatInput messages = {messages} setMessages={setMessages}/>
          </>
        :
          <>
            <ChatMessages messages = {messages} setMessages={setMessages}/>
            <ChatInput messages = {messages} setMessages={setMessages}/>
          </>
        }
    </div> 
  )
}

export default App
