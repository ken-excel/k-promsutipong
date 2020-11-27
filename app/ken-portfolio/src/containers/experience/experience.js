import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

import {experience as experience_en} from "../../text/en.js";
import {experience as experience_jp} from "../../text/jp.js";
import {experience as experience_th} from "../../text/th.js";

import './experience.css';

function Experience(props) {
    let theme = props.theme;
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
        <div className="experience" id="experience">
            <div className="experience-main">
            <p className="experience-title">{experience.title}</p>
            <VerticalTimeline>
              {experience.records.map(record => {
                  return (
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date={record.date}
                      iconStyle={{ background: (record.background == "1") ? theme.color1 : theme.color2, color: "white"}}
                      icon={record.iconurl ? record.iconurl : ( record.icon === "school" ? <SchoolIcon/> : <WorkIcon/> )}
                    >
                      <div className="experience-textbox">
                        <h4 className="experience-textbox-title">{record.title}</h4>
                        <h5 className="experience-textbox-subtitle">{record.subtitle}</h5>

                        <ul className="experience-textbox-context">
                          {record.content.map(record => {
                            return (
                              <li className="experience-textbox-paragraph">
                                  {record}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
            </div>
        </div>
    );
}

export default Experience;