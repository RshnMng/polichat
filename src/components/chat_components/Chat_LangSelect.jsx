import React from "react";

export default function Chat_LangSelect(props) {
  const state = props.props.state.state;
  const updateLanguage = state.updateLanguage;
  const addSelected = state.addSelected;
  return (
    <>
      <div className="change-lang-div col-12 d-flex justify-content-around">
        <div
          id="french"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag french-flag"
        ></div>
        <div
          id="korean"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag korean-flag"
        ></div>
        <div
          id="spanish"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag spanish-flag"
        ></div>
        <div
          id="english"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag english-flag"
        ></div>
        <div
          id="mandarin"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag chinese-flag"
        ></div>
        <div
          id="japanese"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag japanese-flag"
        ></div>
        <div
          id="russian"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag russia-flag"
        ></div>
        <div
          id="arabic"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag arabic-flag"
        ></div>
        <div
          id="italian"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag italy-flag"
        ></div>
        <div
          id="latin"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag roman-flag"
        ></div>
      </div>
    </>
  );
}
