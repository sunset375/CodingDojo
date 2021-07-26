import React, { Component } from 'react';

class PersonCardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickAge: props.age
        }
    }
    clickHandler = () => {
        this.setState({
            clickAge: this.state.clickAge + 1
        })
    }


    render(){
        const {fname, lname, haircolor} = this.props;

        return(
            <>
            <hr/>
                <h1>{ this.props.lname }, {this.props.fname}</h1>
                <h3>Age: {this.state.clickAge}</h3>
                <h3>Hair Color: {this.props.haircolor}</h3>
                <button onClick={this.clickHandler}> Birthday button for {fname} {lname}</button>
            </>
        );

    }
}

export default PersonCardComponent;