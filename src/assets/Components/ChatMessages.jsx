import { useRef,useEffect } from "react";
import ChatMessage from "./ChatMessage"

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

export default ChatMessages