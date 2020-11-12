import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

import './project.css';

function Project(props) {
    let [popup, setPopup] = useState(false);
    let togglePopup = () => {
      setPopup(!popup);
    }

    const project = props.data;
    
    return(
        <div className="project-main">
          <p>{project.name}</p>
          <img src={project.image} onClick={togglePopup}></img>
          <Modal 
            className="modal" 
            open={popup}
            onClose={togglePopup}>
            <Fade in={popup}>
              <div className="popup-main">
                  <p>{project.name}</p>
                  <div className="frameworks-main-div">
                    <ul className="dev-icons">
                      {project.frameworks.map(framework => {
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
                      {project.languages.map(language => {
                        return (
                          <li className="dev-icon" name={language.name}>
                            <img src={language.url}></img>
                            <p>{language.name}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
            </Fade>
          </Modal>
        </div>
    );
}

export default Project;