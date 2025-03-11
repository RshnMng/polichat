import React from "react";
import { Link } from "react-router-dom";

export default function Home_Buttons(props) {
  const state = props.props.props.state;
  const fetchResponse = state.fetchResponse;
  const resetLangs = state.resetLangs;

  const messages = [
    {
      role: "system",
      content: `translate ${state.userInput} from ${state.inputLang} into ${state.language} `,
    },
    {
      role: "user",
      content: state.userInput,
    },
  ];

  return (
    <>
      <div className="col-12 col-md-5  mb-auto home-buttons">
        <div className="row home-btn-row mb-3">
          <Link to="/chat" className="home-btn col-10 col-lg-10 col-xs-6" onClick={resetLangs}>
            Start A Chat
          </Link>
          {state.userInput === "" || state.userInput === null || state.language === "" || state.language === null ? (
            <Link className="home-btn col-10 col-lg-10 col-xs-6" disabled>
              Add Text, Choose Lang. to Translate
            </Link>
          ) : (
            <Link to="/translation" className="home-btn col-10 col-lg-10 col-xs-6" onClick={() => fetchResponse(messages)}>
              Translate
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
