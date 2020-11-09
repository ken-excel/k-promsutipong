import React from "react";
import { Fade } from "react-reveal"
import { Logo } from "../../components/logo";
import SocialMedia from "../../components/socialMedia/socialMedia"; 

import {contact as contact_en} from "../../text/en.js";
import {contact as contact_jp} from "../../text/jp.js";
import {contact as contact_th} from "../../text/th.js";

import './contact.css';

function Contact(props) {
    let contact = contact_en;
    switch(props.language){
    case "en": {
      contact = contact_en;
      break;
    }
    case "jp":{
      contact = contact_jp;
      break;
    }
    case "th":{
      contact = contact_th;
      break;
    }
    default:{
      contact = contact_en;
      break;
    }
  }

    return(
        <Fade bottom duration={1000} distance="20px">
            <div className="contact" id="contact">
                <div className="contact-main">
                    <div className="contact-div">
                        <h1 className="contact-title">{contact.title}</h1>

                        <div className="contact-detail-div">
                            <a className="contact-detail" href={contact.number}>{contact.number}</a>
                            <br/><br/>
                            <a className="contact-detail-email"
                            href={contact.email_address}>{contact.email_address}</a>
                            <br/><br/>
                            <SocialMedia/>
                        </div>
                    </div>
                    <div className="contact-image-div">
                        <Logo />
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Contact;