import { useState } from 'react'
import './App.css'
import ChatMessages from  "./assets/Components/ChatMessages"
import ChatInput from './assets/Components/ChatInput'

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
