import React, { Component } from 'react';

class PersonCardComponent extends Component {
    render(){
        return(
            <>
            <hr/>
                <h1>{ this.props.lname }, {this.props.fname}</h1>
                <h3>Age: {this.props.age}</h3>
                <h3>Hair Color: {this.props.haircolor}</h3>
            </>
        );

    }
}

export default PersonCardComponent;