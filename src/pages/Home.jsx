import React from "react";
import Home_Buttons from "../components/home_components/Home_Buttons";
import Home_Flagbox from "../components/home_components/Home_Flagbox";
import Home_LangSelect from "../components/home_components/Home_LangSelect";

export default function (props) {
  const stateObj = props.props;

  const updateInput = stateObj.state.updateInput;

  return (
    <>
      <div className="col-12 home-input flex-column">
        <div className="row home-input-row mt-2">
          <div className="col-12 col-md-9 col-lg-offset-3 mb-2 home-title d-flex">
            <div className="col-2 offset-1  pr-5 flagbox-div">
              <Home_Flagbox props={stateObj} />
            </div>
            <div className="col-9 mr-0 home-text">Text to Translate</div>
          </div>
          <div className="col-12 col-md-7 home-textarea-div">
            <div className="row d-flex justify-content-center  home-textarea-row">
              <div className="col-10 textarea-div mb-5 ">
                <textarea className="main-textarea" onChange={updateInput}></textarea>
              </div>
              <Home_LangSelect props={props} />
            </div>
          </div>
          <Home_Buttons props={props} />
        </div>
      </div>
    </>
  );
}
