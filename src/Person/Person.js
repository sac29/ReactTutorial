import React from 'react';
import './Person.css';
const person =(props)=>{

    return (
         <div className="Person">
            <p>This is {props.name}.</p>
            <p> My age is {props.age} years </p>
            <p> I am {props.gender}  </p>
            <p>{props.children}</p>
            <input type="text"  onChange={props.change} value={props.name} />
         </div>
)

}

export default person;
