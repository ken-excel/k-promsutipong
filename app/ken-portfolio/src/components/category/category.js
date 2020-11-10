import React, { Component, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Button from 'react-bootstrap/Button';

import './category.css';

function Category(props) {
    let [expand, setExpand] = useState(false);
    let toggleExpand = () => {
      setExpand(!expand);
    }
    
    return(
        <div className="category-main">
            <Button className="expand-button" variant="primary" onClick={toggleExpand}>{props.name}</Button>
            <Collapse in={expand}> 
                <Paper className="expand-div" elevation={4}>
                    <p>contain child components: showcase</p>
                </Paper>
            </Collapse>
        </div>
    );
}

export default Category;