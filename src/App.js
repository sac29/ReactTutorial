import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      { name: "sachin", age: 23 },
      { name: "aman", age: 22 },
      { name: "geela", age: 24 }
    ]

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

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        { name: "sachin", age: 23 , gender : "male" },
        { name: event.target.value, age: 22 , gender :"male"},
        { name: "geela", age: 23 , gender : "female"}
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
    return (
      <div className="App">
        <h1>Hii i am react </h1>
        <button 
               style = {style}
               onClick={()=> this.switchNameHandler("sachin vishwakarma")}>Switch name</button>
        <Person name={this.state.persons[0].name}
                gender={this.state.persons[0].gender}
                 age={this.state.persons[0].age} >  Playing counter strike</Person>
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
}

export default App;
