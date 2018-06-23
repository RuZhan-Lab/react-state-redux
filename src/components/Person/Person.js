import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div onClick={props.clicked}>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    )
};

export default person;