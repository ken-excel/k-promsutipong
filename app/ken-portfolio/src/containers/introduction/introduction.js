import React from "react";
import {Fade} from "react-reveal";
import {introduction as introduction_en} from "../../text/en.js";
import {introduction as introduction_jp} from "../../text/jp.js";
import {introduction as introduction_th} from "../../text/th.js";

import "./introduction.css";

function Introduction(props) {
  let introduction = introduction_en;
  switch(props.language){
    case "en": {
      introduction = introduction_en;
      break;
    }
    case "jp":{
      introduction = introduction_jp;
      break;
    }
    case "th":{
      introduction = introduction_th;
      break;
    }
    default:{
      introduction = introduction_en;
      break;
    }
  }

  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="introduction" id="introduction">
      <div className="introduction-main">
        <div className="greeting-div">
          <div className="greeting-title-div">
            <h1 className="greeting-title">
                {introduction.title}
            </h1>
          </div>
          <div className="greeting-paragraph-div">
            <h1 className="greeting-paragraph">
                {introduction.paragraph}
            </h1>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
}

export default Introduction;