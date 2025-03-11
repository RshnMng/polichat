import React from "react";

export default function Chat_Box(props) {
  const state = props.props.state.state;
  const chatComponents = state.chatComponents;
  let waiting = state.waiting;

  return (
    <>
      <div className="col-12 chatbox-container">
        <div className="col-12 chat-label">Type your text and hit 'Send' to begin chat</div>
        <div className="col-12 chat-container">
          <div className="text-display">
            {waiting && (
              <div className="waiting">
                <img width={20} src="https://w7.pngwing.com/pngs/150/578/png-transparent-traffic-light-computer-icons-red-red-light-color-light-traffic.png" alt="blinking light" />
                <div className="waiting-label">Chatbot waiting...</div>
              </div>
            )}
            {chatComponents}
          </div>
        </div>
      </div>
    </>
  );
}
