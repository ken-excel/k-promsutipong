import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import styled from 'styled-components'
import Project from '../project/project'

import './category.css';

function Category(props) {
    let theme = props.theme;
    let [expand, setExpand] = useState(false);
    let toggleExpand = () => {
      setExpand(!expand);
    }
    let CategoryButton = styled.button`
        color: ${theme.inverse_text};
        background-color: ${theme.color2};
        border-color: ${theme.inverse_hover_color};
        &:hover {
            background-color: ${theme.darkcolor2};
        }
    `;

    const category = props.data;

    return(
        <div className="category-main">
            <CategoryButton className="expand-button" onClick={toggleExpand}>{category.name}</CategoryButton>
            <Collapse className="exp-collapse" in={expand}> 
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