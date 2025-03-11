import React from "react";
import Chat_Buttons from "../components/chat_components/Chat_Buttons";
import Chat_LangSelect from "../components/chat_components/Chat_LangSelect";
import Chat_Box from "../components/chat_components/Chat_Box";
import Chat_Send from "../components/chat_components/Chat_Send";

export default function Chat_Page(props) {
  const state = props.props.state;
  const setState = props.props.setState;
  return (
    <>
      <div className="col-12 col-md-7 mr-5 chat-large-left">
        <Chat_Box props={{ state }} />
        <Chat_Send props={{ setState }} />
      </div>
      <div className="col-12 col-md-5 mt-md-5 mr-5 chat-large-right">
        <div className="col-12 chat-lang-select">
          <Chat_LangSelect props={{ state }} />
        </div>
        <Chat_Buttons />
      </div>
    </>
  );
}
