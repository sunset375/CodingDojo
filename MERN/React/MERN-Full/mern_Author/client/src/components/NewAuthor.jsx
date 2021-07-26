import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewAuthor = props => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const addAuthor = e => {
        e.preventDefault();
        const Author = {firstName,lastName};
        axios.post("http://localhost:8000/api/authors", Author)
            .then( res => 
                console.log(res),
                navigate("/")
            )
            .catch( err => console.log(err));
    }

    return(
        <article className="message is-info" style={{padding:"40px"}}>
            <h1 className="title">New Activity</h1>
            <div className="message-header">
                <p>Add Activity</p>
            </div>
            <div className="message-body">
                <form onSubmit = { addAuthor }> 
                    <input type="text" className="input is-info" style={{marginBottom:"10px"}} placeholder="Enter First Name" onChange={e=> setFirstName(e.target.value)}/>
                    <input type="text" className="input is-info" style={{marginBottom:"10px"}} placeholder="Enter Last Name" onChange={e=> setLastName(e.target.value)}/>
                    <button type="submit" style={{width:"100%"}} className="button is-info">Add Author</button>
                </form>
            </div>
        </article>
    )
}

export default NewAuthor;