import profileIcon from "../profile-icon.svg" 
import botIcon from "../chatbot.svg"

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

export default ChatMessage