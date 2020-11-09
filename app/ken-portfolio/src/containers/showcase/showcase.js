import React, { useState } from "react";
import { Fade } from "react-reveal"
import Collapse from '@material-ui/core/Collapse';
import Button from 'react-bootstrap/Button';

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
    let [expand, setExpand] = useState(false);
    let toggleExpand = () => {
      setExpand(!expand);
    }
    return( 
      <Fade bottom duration={1000} distance="20px">
          <div className="showcase" id="showcase">
              <div className="showcase-main">
                  <div className="dummy-div">
                      <h1>h1</h1>
                      <h2>h2</h2>
                      <h3>h3</h3>
                      <h4>h4</h4>
                      <h5>h5</h5>
                      <p>p</p>
                      <p className="dummy">{showcase.dummy}</p>
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
                  <div className="showcases-main-div">
                    <ul className="categories">
                      <li className="category">
                        <Category name="Robotic Engineer"/>
                      </li>
                      <li className="category">
                        <Category name="Web App Developer"/>
                      </li>
                    </ul>
                  </div>
              </div>
          </div>
      </Fade>
  );
}

export default Showcase;