import React from 'react';
import Classes from './Person.css';

const person =(props)=>{
   
    return (
         <div className={Classes.Person}>
            <p onClick={props.click}>This is {props.name}.</p>
            <p> My age is {props.age} years </p>
            <p> I am {props.gender}  </p>
            <p>{props.children}</p>
            <input type="text"  onChange={props.changed} value={props.name} />
         </div>
)

}

export default person;
