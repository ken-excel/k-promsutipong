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
            <VerticalTimeline>
              {experience.records.map(record => {
                  return (
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date={record.date}
                      iconStyle={{ background: record.background, color: record.iconcolor }}
                      icon={record.iconurl ? record.iconurl : ( record.icon === "school" ? <SchoolIcon/> : <WorkIcon/> )}
                    >
                      <div className="experience-textbox">
                        <h3 className="vertical-timeline-element-title">{record.title}</h3>
                        <h5 className="vertical-timeline-element-subtitle">{record.subtitle}</h5>
                        <p className="vertical-timeline-element-context">
                          {record.content.map(record => {
                            return(
                                <span>
                                {record}<br/>
                                </span>
                            );
                          })}
                        </p>
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