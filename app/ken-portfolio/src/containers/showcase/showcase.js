import React from "react";
import { Fade } from "react-reveal";

import Category from '../../components/category/category';

import {showcase as showcase_en} from "../../text/en.js";
import {showcase as showcase_jp} from "../../text/jp.js";
import {showcase as showcase_th} from "../../text/th.js";

import './showcase.css';

function Showcase(props) {
    let showcase = showcase_en;
    switch(props.language){
    case "en": {
      showcase = showcase_en;
      break;
    }
    case "jp":{
      showcase = showcase_jp;
      break;
    }
    case "th":{
      showcase = showcase_th;
      break;
    }
    default:{
      showcase = showcase_en;
      break;
    }
  }
  
    return( 
      <Fade bottom duration={1000} distance="20px">
          <div className="showcase" id="showcase">
              <div className="showcase-main">
                  <div className="background-div">
                      <p className="background">{showcase.background}</p>
                  </div>
                  <div className="frameworks-main-div">
                    <ul className="dev-icons">
                      {showcase.frameworks.map(framework => {
                        return (
                          <li className="dev-icon" name={framework.name}>
                            <img src={framework.url}></img>
                            <p>{framework.name}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="languages-main-div">
                    <ul className="dev-icons">
                      {showcase.languages.map(language => {
                        return (
                          <li className="dev-icon" name={language.name}>
                            <img src={language.url}></img>
                            <p>{language.name}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="category-main-div">
                    <ul className="categories">
                      {showcase.categories.map(category => {
                        return (
                          <li className="category">
                            <Category data={category}/>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
              </div>
          </div>
      </Fade>
  );
}

export default Showcase;