import React from 'react';
import './Person.css';
const person =(props)=>{

    return (
         <div className="Person">
            <p onClick={props.click}>This is {props.name}.</p>
            <p> My age is {props.age} years </p>
            <p> I am {props.gender}  </p>
            <p>{props.children}</p>
            <input type="text"  onChange={props.changed} value={props.name} />
         </div>
)

}

export default person;
