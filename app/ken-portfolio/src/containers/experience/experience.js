import React from "react";
import { Fade } from "react-reveal"

import {experience as experience_en} from "../../text/en.js";
import {experience as experience_jp} from "../../text/jp.js";
import {experience as experience_th} from "../../text/th.js";

import './experience.css';

function Experience(props) {
    let experience = experience_en;
    switch(props.language){
    case "en": {
      experience = experience_en;
      break;
    }
    case "jp":{
      experience = experience_jp;
      break;
    }
    case "th":{
      experience = experience_th;
      break;
    }
    default:{
      experience = experience_en;
      break;
    }
  }

    return(
        <Fade bottom duration={1000} distance="20px">
            <div className="experience" id="experience">
                <div className="experience-main">
                    <div className="dummy-div">
                        <h1>h1</h1>
                        <h2>h2</h2>
                        <h3>h3</h3>
                        <h4>h4</h4>
                        <h5>h5</h5>
                        <p>p</p>
                        <p className="dummy">{experience.dummy}</p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Experience;