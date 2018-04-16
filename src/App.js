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
  switchNameHandler = (myName) => {
  //  console.log('there you go button');
    this.setState({
      persons: [
        { name: myName, age: 23 },
        { name: "aman", age: 22 },
        { name: "geela", age: 23 }
      ]
       
    })
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
         <Person name={this.state.persons[0].name}
                gender={this.state.persons[0].gender}
                 age={this.state.persons[0].age} />  
         <Person 
               name={this.state.persons[1].name} 
               age={this.state.persons[1].age} 
               gender={this.state.persons[1].gender}
               change ={this.nameChangedHandler} />
         <Person 
              name={this.state.persons[2].name} 
              gender={this.state.persons[2].gender}
              age={this.state.persons[2].age} />
        </div>
      );
    } 

    return (
      <div className="App">
        <h1>Hii i am react </h1>
        <button 
               style = {style}
               onClick={()=> this.togglePersonhandler()}>Switch name</button>
        {personShow}
      </div>
    );
  }
}

export default App;
