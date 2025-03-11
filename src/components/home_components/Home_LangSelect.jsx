import React, { useContext } from "react";

export default function Home_LangSelect(props) {
  const state = props.props.props.state;
  const updateLanguage = state.updateLanguage;
  const addSelected = state.addSelected;

  return (
    <>
      <div className="col col-md-11 col-sm-10 mx-auto my-auto  mb-3 home-lang-select">
        <div className="row home-lang-select-row d-flex justify-content-around">
          {state.inputLang === "french" || state.inputLang === "French" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag french-flag"
                id="french"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}

          {state.inputLang === "spanish" || state.inputLang === "Spanish" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag spanish-flag"
                id="spanish"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}

          {state.inputLang === "korean" || state.inputLang === "Korean" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag korean-flag"
                id="korean"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}

          {state.inputLang === "Mandarin" || state.inputLang === "mandarin" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag chinese-flag"
                id="mandarin"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}

          {state.inputLang === "japanese" || state.inputLang === "Japanese" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag japanese-flag"
                id="japanese"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}

          {state.inputLang === "arabic" || state.inputLang === "Arabic" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag arabic-flag"
                id="arabic"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}

          {state.inputLang === "latin" || state.inputLang === "Latin" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag roman-flag"
                id="latin"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}
          {state.inputLang === "italian" || state.inputLang === "Italian" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag italy-flag"
                id="italian"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}

          {state.inputLang === "russian" || state.inputLang === "Russian" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag russia-flag"
                id="russian"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
