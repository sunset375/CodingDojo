import React, { useState } from 'react';
const HookForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
        setFormState({
            ...formState,
            submitted: true,
            error: false
        })
    }

    // let message = <h1>You have NOT submitted the form</h1>
    // if(formState.submitted){
    //     message = <h1>You have submitted the form!</h1>
    


    return(
        <div>
            
            {/* 1.{message} */}
            {/* 2.{formState.submitted ? <h1>You have submitted the form</h1> :<h1>You have NOT submitted the form!</h1>}  */}
            {formState.submitted && <h1>You have submitted the form!</h1>}
            <form onSubmit={onSubmitHandler}>
                <fieldset style= {{backgroundColor:"lightskyblue", width:"300px"}}  >
                <label>First Name</label>
                <input type="text" style ={{float:"right", width: "200px"}} name="firstName" onChange={onChangeHandler} />
                <br/>
                {formState.firstName.length < 2 && formState.firstName.length != 0 ? <small style={{color: "red"}}>First name must be at least 2 characters</small> : <small>First name must be at least 2 characters</small>}
                </fieldset>
                <br/>     
                
                <fieldset style= {{backgroundColor:"lightskyblue", width:"300px"}} >
                <label>Last Name</label>
                <input type="text" style ={{float:"right", width: "200px"}} name="lastName" onChange={onChangeHandler}/>
                <br/>        
                {formState.lastName.length < 2 && formState.lastName.length != 0 ? <small style={{color: "red"}}>Last name must be at least 2 characters</small> : <small>Last name must be at least 2 characters</small>}
                </fieldset>   
                <br/>        

                <fieldset style= {{backgroundColor:"lightskyblue", width:"300px"}} >
                <label>Email</label>
                <input type="email" style ={{float:"right", width: "200px"}} name="email" onChange={onChangeHandler}/>
                <br/>        
                {formState.email.length < 2 && formState.email.length != 0 ? <small style={{color: "red"}}>Email must be at least 2 characters</small> : <small>Email must be at least 2 characters</small>}
                </fieldset>
                <br/>      

                <fieldset style= {{backgroundColor:"lightskyblue", width:"300px"}} >
                <label>Password</label>
                <input type="password" style ={{float:"right", width: "200px"}} name="password" onChange={onChangeHandler}/>
                <br/>        
                {formState.password.length < 8 && formState.password.length != 0 ? <small style={{color: "red"}}>Password must be at least 8 characters</small> : <small>Password must be at least 8 characters</small>}
                </fieldset>  
                <br/>        

                <fieldset style= {{backgroundColor:"lightskyblue", width:"300px"}} >
                <label>Confirm</label>
                <input type="password" style ={{float:"right", width: "200px"}} name="confirmPassword" onChange={onChangeHandler}/>
                <br/>        
                {formState.password == formState.confirmPassword ? <small>Password must match</small> : <small style={{color: "red"}}>Password must match</small>}
                </fieldset>
                <br/>   

                <input type="submit" />     
            </form>

            <p>First Name: {formState.firstName}</p>
            <p>Last Name:  {formState.lastName}</p>
            <p>Email: {formState.email}</p>
            <p>Password: {formState.password}</p>
            <p>Confirm Password: {formState.confirmPassword}</p>
        </div>
    );
}

export default HookForm