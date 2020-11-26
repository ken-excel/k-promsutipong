import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Button from 'react-bootstrap/Button';
import Project from '../project/project'

import './category.css';

function Category(props) {
    let [expand, setExpand] = useState(false);
    let toggleExpand = () => {
      setExpand(!expand);
    }

    const category = props.data;
    
    return(
        <div className="category-main">
            <Button className="expand-button" variant="primary" onClick={toggleExpand}>{category.name}</Button>
            <Collapse className="expand-collapse" in={expand}> 
                <Paper className="expand-div">
                    <p>{category.background}</p>
                    <div className="category-projects-div">
                    <ul className="projects-ul">
                      {category.projects.map(project => {
                        return (
                          <li className="project-li" >
                              <Project data={project}/>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Paper>
            </Collapse>
        </div>
    );
}

export default Category;