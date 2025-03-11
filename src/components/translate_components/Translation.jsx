import React, { useContext } from "react";
import Translation_Flagbox from "./Translation_Flagbox";

export default function Translation(props) {
  const output = props.props.props.state.translation;
  return (
    <>
      <div className="col-12 home-input flex-column">
        <div className="row home-input-row mt-2 ">
          <div className="col-12 d-flex col-lg-offset-3 mb-2 home-title">
            <div className="col-2 offset-1  pr-5 flagbox-div">
              <Translation_Flagbox props={props} />
            </div>
            <div className="col-9 col-md-12 mr-0 home-text">Translation</div>
          </div>
        </div>
        <div className="col-12 home-textarea-div">
          <div className="row d-flex justify-content-center  home-textarea-row">
            <div className="col-10 textarea-div mb-5 ">
              <textarea className="translation-textarea" readOnly value={output === "" ? "" : output ? output : "Translating..."}></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
