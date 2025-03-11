import React, { useRef, useEffect } from "react";

export default function Chat_Send(props) {
  const state = props.props.state.state;
  const addToChatLog = state.addToChatLog;
  const userInput = state.userInput;
  const userInputObj = { role: "user", content: userInput };
  const chatResponse = state.chatResponse;
  const resetInputs = state.resetInputs;
  const chatLog = state.chatLog;
  const language = state.language;
  const updateInput = state.updateInput;
  const chatComponents = state.chatComponents;
  const createChatComponents = state.createChatComponents;
  const changeWaiting = state.changeWaiting;

  let dummyDiv = useRef();
  let chatPrompt = "";

  chatLog === "" || chatLog === null
    ? (chatPrompt = [
        {
          role: "assistant",
          content: `answer in ${state.language}`,
        },
        {
          role: "user",
          content: state.userInput,
        },
      ])
    : (chatPrompt = [
        {
          role: "assistant",
          content: ` answer in ${state.language}`,
        },

        ...chatLog.map((message) => {
          return message;
        }),

        {
          role: "user",
          content: state.userInput,
        },
      ]);

  function getAIresponse() {
    addToChatLog(userInputObj, chatLog, createChatComponents);
    chatResponse(chatPrompt, addToChatLog, chatLog, createChatComponents);
    resetInputs();
  }

  useEffect(() => {
    if (dummyDiv.current) {
      dummyDiv.current.scrollIntoView();
    }
  }, [chatComponents]);

  useEffect(() => {}, [language]);

  return (
    <>
      <div className="col-12 text-input-div">
        <input
          id="text-input"
          className="text-input"
          type="text"
          value={state.userInput}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addToChatLog(userInputObj, chatLog, createChatComponents);
              chatResponse(chatPrompt, addToChatLog, chatLog, createChatComponents);
              resetInputs();
            }
          }}
          onChange={(event) => {
            updateInput(event);
            changeWaiting(false);
          }}
        />
        {state.userInput === null || state.userInput === "" ? null : (
          <img
            className="send-button"
            src="https://cdn3.iconfinder.com/data/icons/pure-lines-color/100/sqi2016_bg1-go-17-512.png"
            alt="send-button"
            onClick={() => {
              addToChatLog(userInputObj, chatLog, createChatComponents);
              chatResponse(chatPrompt, addToChatLog, chatLog, createChatComponents);
              resetInputs();
            }}
          />
        )}
      </div>
    </>
  );
}
