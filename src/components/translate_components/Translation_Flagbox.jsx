import React from "react";

export default function Translation_Flagbox(props) {
  const state = props.props.props.props.state;

  const updateOutputLang = state.updateOutputLang;
  const setState = props.props.setState;

  function clearTranslation() {
    return setState((prevState) => {
      return { ...prevState, translation: "" };
    });
  }

  return (
    <>
      {state.language === "spanish" || state.language === "Spanish" ? (
        <select
          className="dropdown flag-box home-input-flag spanish-flag"
          onChange={(event) => {
            clearTranslation();
            updateOutputLang(event);
          }}
        >
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Korean</option>
          <option>Mandarin</option>
          <option>Japanese</option>
          <option>French</option>
          <option>Arabic</option>
          <option>Italian</option>
          <option>Russian</option>
          <option>Latin</option>
        </select>
      ) : state.language === "korean" || state.language === "Korean" ? (
        <select
          className="dropdown flag-box home-input-flag korean-flag"
          onChange={(event) => {
            clearTranslation();
            updateOutputLang(event);
          }}
        >
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Korean</option>
          <option>Mandarin</option>
          <option>Japanese</option>
          <option>French</option>
          <option>Arabic</option>
          <option>Italian</option>
          <option>Russian</option>
          <option>Latin</option>
        </select>
      ) : state.language === "french" || state.language === "French" ? (
        <select
          className="dropdown flag-box home-input-flag french-flag"
          onChange={(event) => {
            clearTranslation();
            updateOutputLang(event);
          }}
        >
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Korean</option>
          <option>Mandarin</option>
          <option>Japanese</option>
          <option>French</option>
          <option>Arabic</option>
          <option>Italian</option>
          <option>Russian</option>
          <option>Latin</option>
        </select>
      ) : state.language === "mandarin" || state.language === "Mandarin" ? (
        <select
          className="dropdown flag-box home-input-flag chinese-flag"
          onChange={(event) => {
            clearTranslation();
            updateOutputLang(event);
          }}
        >
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Korean</option>
          <option>Mandarin</option>
          <option>Japanese</option>
          <option>French</option>
          <option>Arabic</option>
          <option>Italian</option>
          <option>Russian</option>
          <option>Latin</option>
        </select>
      ) : state.language === "japanese" || state.language === "Japanese" ? (
        <select
          className="dropdown flag-box home-input-flag japanese-flag"
          onChange={(event) => {
            clearTranslation();
            updateOutputLang(event);
          }}
        >
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Korean</option>
          <option>Mandarin</option>
          <option>Japanese</option>
          <option>French</option>
          <option>Arabic</option>
          <option>Italian</option>
          <option>Russian</option>
          <option>Latin</option>
        </select>
      ) : state.language === "arabic" || state.language === "Arabic" ? (
        <select
          className="dropdown flag-box home-input-flag arabic-flag"
          onChange={(event) => {
            clearTranslation();
            updateOutputLang(event);
          }}
        >
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Korean</option>
          <option>Mandarin</option>
          <option>Japanese</option>
          <option>French</option>
          <option>Arabic</option>
          <option>Italian</option>
          <option>Russian</option>
          <option>Latin</option>
        </select>
      ) : state.language === "latin" || state.language === "Latin" ? (
        <select
          className="dropdown flag-box home-input-flag roman-flag"
          onChange={(event) => {
            clearTranslation();
            updateOutputLang(event);
          }}
        >
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Korean</option>
          <option>Mandarin</option>
          <option>Japanese</option>
          <option>French</option>
          <option>Arabic</option>
          <option>Italian</option>
          <option>Russian</option>
          <option>Latin</option>
        </select>
      ) : state.language === "italian" || state.language === "Italian" ? (
        <select
          className="dropdown flag-box home-input-flag italy-flag"
          onChange={(event) => {
            clearTranslation();
            updateOutputLang(event);
          }}
        >
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Korean</option>
          <option>Mandarin</option>
          <option>Japanese</option>
          <option>French</option>
          <option>Arabic</option>
          <option>Italian</option>
          <option>Russian</option>
          <option>Latin</option>
        </select>
      ) : state.language === "russian" || state.language === "Russian" ? (
        <select
          className="dropdown flag-box home-input-flag russia-flag"
          onChange={(event) => {
            clearTranslation();
            updateOutputLang(event);
          }}
        >
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Korean</option>
          <option>Mandarin</option>
          <option>Japanese</option>
          <option>French</option>
          <option>Arabic</option>
          <option>Italian</option>
          <option>Russian</option>
          <option>Latin</option>
        </select>
      ) : (
        <select
          className="dropdown flag-box home-input-flag english-flag"
          onChange={(event) => {
            clearTranslation();
            updateOutputLang(event);
          }}
        >
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Korean</option>
          <option>Mandarin</option>
          <option>Japanese</option>
          <option>French</option>
          <option>Arabic</option>
          <option>Italian</option>
          <option>Russian</option>
          <option>Latin</option>
        </select>
      )}
    </>
  );
}
