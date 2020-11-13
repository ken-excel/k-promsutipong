import React from "react";
import {Fade} from "react-reveal";
import { Logo } from "../../components/logo";
import styled from 'styled-components'

import {headertext as headertext_en} from "../../text/en.js";
import {headertext as headertext_jp} from "../../text/jp.js";
import {headertext as headertext_th} from "../../text/th.js";

import "./header.css"

function Header(props) {
    let headertext = headertext_en;
    let theme = props.theme;
    switch(props.language){
        case "en": {
            headertext = headertext_en;
            break;
        }
        case "jp":{
            headertext = headertext_jp;
            break;
        }
        case "th":{
            headertext = headertext_th;
            break;
        }
        default:{
            headertext = headertext_en;
        }
    }

    let ListElement = styled.li`
        &:hover {
            background-color: ${theme.inverse_hover_color};
            text-decoration: none
        }
    `;

    return (
        <Fade top duration={1000} distance="20px">
            <div className="navigation-main" style={{backgroundColor:theme.inverse_body, color:theme.inverse_text, borderColor:theme.color1} }>
                <div className="navigation-bar">
                    <div className="navigation-logo"> 
                        <Logo/>
                    </div>
                    <div className="navigation-text-div">
                        <span style={{color:theme.inverse_text}}>{headertext.upper}</span>
                        <span style={{color:theme.color2}}>{headertext.lower}</span>
                    </div>
                    <div className="navigation-nav-div">
                        <ul>
                            <ListElement><a style={{color:theme.inverse_text}} href="#">Home</a></ListElement>
                            <ListElement><a style={{color:theme.inverse_text}} href="#experience">Experience</a></ListElement>
                            <ListElement><a style={{color:theme.inverse_text}} href="#showcase">Showcase</a></ListElement>
                            <ListElement><a style={{color:theme.inverse_text}} href="#contact">Contact</a></ListElement>
                            <li>
                                <div className="navigation-language-div">
                                    <select
                                        className="navigation-language-select"
                                        value={props.language}
                                        onChange={e => props.handleSetLanguage(e.target.value)}
                                    >
                                        <option value="en">English</option>
                                        <option value="jp">Japanese</option>
                                        <option value="th">Thai</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fade>  
    );
}

export default Header;