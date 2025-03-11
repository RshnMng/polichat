import React from 'react';

export default function Chat_Message ({ role, content }){
    
   return (
    <>
      <div className="message-container">
        <div className={role === "user" ? "message-div sent-by-user" : "message-div sent-by-ai"}>{content}</div>
      </div>
    </>
  );
}