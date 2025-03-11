import React from "react";

export default function Original_Flagbox(props) {
  const state = props.props.props.props.state;
  const updateInputLang = state.updateInputLang;

  return (
    <>
      {state.inputLang === "spanish" || state.inputLang === "Spanish" ? (
        <select className="dropdown flag-box home-input-flag spanish-flag" onChange={(event) => updateInputLang(event)}>
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
      ) : state.inputLang === "korean" || state.inputLang === "Korean" ? (
        <select className="dropdown flag-box home-input-flag korean-flag" onChange={(event) => updateInputLang(event)}>
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
      ) : state.inputLang === "french" || state.inputLang === "French" ? (
        <select className="dropdown flag-box home-input-flag french-flag" onChange={(event) => updateInputLang(event)}>
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
      ) : state.inputLang === "mandarin" || state.inputLang === "Mandarin" ? (
        <select className="dropdown flag-box home-input-flag chinese-flag" onChange={(event) => updateInputLang(event)}>
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
      ) : state.inputLang === "japanese" || state.inputLang === "Japanese" ? (
        <select className="dropdown flag-box home-input-flag japanese-flag" onChange={(event) => updateInputLang(event)}>
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
      ) : state.inputLang === "arabic" || state.inputLang === "Arabic" ? (
        <select className="dropdown flag-box home-input-flag arabic-flag" onChange={(event) => updateInputLang(event)}>
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
      ) : state.inputLang === "latin" || state.inputLang === "Latin" ? (
        <select className="dropdown flag-box home-input-flag roman-flag" onChange={(event) => updateInputLang(event)}>
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
      ) : state.inputLang === "italian" || state.inputLang === "Italian" ? (
        <select className="dropdown flag-box home-input-flag italy-flag" onChange={(event) => updateInputLang(event)}>
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
      ) : state.inputLang === "russian" || state.inputLang === "Russian" ? (
        <select className="dropdown flag-box home-input-flag russia-flag" onChange={(event) => updateInputLang(event)}>
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
        <select className="dropdown flag-box home-input-flag english-flag" onChange={(event) => updateInputLang(event)}>
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
