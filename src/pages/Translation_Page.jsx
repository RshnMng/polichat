import React from "react";
import Translation_Buttons from "../components/translate_components/Translation_Buttons";
import Original_Text from "../components/translate_components/Original_Text";
import Translation from "../components/translate_components/Translation";

export default function Translation_Page(props) {
  return (
    <>
      <div className="col-12 col-md-7">
        <Original_Text props={props} />
        <Translation props={props} />
      </div>
      <div className="col-12 col-md-5">
        <Translation_Buttons props={props} />
      </div>
    </>
  );
}
