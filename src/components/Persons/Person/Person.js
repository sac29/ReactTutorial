import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import {AuthContext} from '../../../containers/App';

class Person extends Component {
   componentDidMount(){
  
            this.inputElement.focus();
     
   }


    render() {
        return (
            <div className={classes.Person}>
            <AuthContext.Consumer>
               {auth => auth ? <p>I am authenticated!!!</p> : null}
               </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp)=>{this.inputElement=inp}}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </div>
        )
    }
}



Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default Person;