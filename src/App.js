import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      { name: "sachin", age: 23 ,gender : "male" },
      { name: "aman", age: 22  , gender :"male"},
      { name: "geela", age: 24 , gender : "female"}
    ],
    showPersons :false

  }
 
  deletePersonHandler =(personIndex) =>{
   // const persons =this.state.persons.slice();
   const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons :persons});

  }

 togglePersonhandler=  ()=>{
    const doesShowPerson = this.state.showPersons;
    this.setState({showPersons : !doesShowPerson});
 }
  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        { name: "sachin", age: 23  },
        { name: event.target.value, age: 22},
        { name: "geela", age: 23 }
      ]
   

    })
    
  }
  render() {
    const style ={
        backgroundColor : 'white',
        font : 'ariel',
        border : '1px solid blue',
        padding : '5px'

    };
    let personShow = null;
    if(this.state.showPersons){
      personShow = (
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person 
            click ={() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age} />
          })}
        
        </div>
      );
    } 

    return (
      <div className="App">
        <h1>Hii i am react </h1>
        <button 
               style = {style}
               onClick={this.togglePersonhandler}>Toggle Button</button>
        {personShow}
      </div>
    );
  }
}

export default App;
