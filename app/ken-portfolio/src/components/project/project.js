import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';

import './project.css';

const useStyles = makeStyles(theme => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  paper: {
      width: '80vw',
      marginTop: '12vh',
      height: '80vh',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      color: 'black',
  },
}));

function Project(props) {

    const classes = useStyles();

    let [popup, setPopup] = useState(false);
    let togglePopup = () => {
      setPopup(!popup);
    }

    const project = props.data;
    
    return(
        <div className="project-main" onClick={togglePopup}>
          <div className="project-text-div">
            <h5>{project.name}</h5>
            <p>{project.summary}</p>
            <div className="project-logo-div">
              <div className="project-frameworks-main-div">
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
              <div className="project-languages-main-div">
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
          </div>
          <div className="project-image-div">
            <img className="project-image" src={project.image} ></img>
          </div>
          <Modal 
            className={classes.modal}
            open={popup}
            onClose={togglePopup}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Fade in={popup}>
              <div className={classes.paper}>
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