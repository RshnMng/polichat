import React from "react";
import { Link } from "react-router-dom";

export default function Translation_Buttons(props) {
  const state = props.props;
  const fetchResponse = state.fetchResponse;
  const switchLangs = state.switchLangs;
  let lang1 = state.inputLang;
  let lang2 = state.language;
  let resetLangs = state.resetLangs;

  const messages = [
    {
      role: "system",
      content: `translate ${state.userInput} from ${state.inputLang} into ${state.language} - do not add any other comment besides the translation itself. Please also add romanization in parenthesis for translation if translation not in english, spanish, french, latin or italian `,
    },
    {
      role: "user",
      content: state.userInput,
    },
  ];

  return (
    <>
      <div className="col-12  mb-auto mt-5 translation-buttons">
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
          <Link
            to="/"
            className="home-btn col-10 col-lg-10 col-xs-6"
            onClick={() => {
              resetLangs();
              state.clearInput();
            }}
          >
            Go Home
          </Link>
          <button
            to="/translation"
            className="home-btn col-10 col-lg-10 col-xs-6"
            onClick={() => {
              resetLangs();
              switchLangs(lang1, lang2);
            }}
          >
            Switch
          </button>
          <button to="/translation" className="home-btn col-10 col-lg-10 col-xs-6" onClick={state.clearInput}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
