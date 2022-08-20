import React from 'react';
import "../components-css/Card.css";

export const Card = (props) => {
    const classes = ' cards ' + props.className; 
  return (
    <div className= {classes}>
        {props.children}
    </div>
  )
}
