import React from "react";
import Translation_Buttons from "../components/translate_components/Translation_Buttons";
import Original_Text from "../components/translate_components/Original_Text";
import Translation from "../components/translate_components/Translation";


export default function Translation_Page (props){
  const setState = props.props.setState;
   return (
    <>
      <div className="col-12 col-md-7">
        <Original_Text />
        <Translation props={{setState}}/>
      </div>
      <div className="col-12 col-md-5">
        <Translation_Buttons props={{setState}}/>
      </div>
    </>
  );
}