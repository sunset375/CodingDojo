import React, {useState} from 'react';
import './style.css';

const Form = () => {
    // const {state, setState} = props;
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const onChangeHandler = e => {
        console.log(state)
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }
    return(
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={onChangeHandler} type="text" name="firstName" value={state.firstName} />
                </div>
                {(state.firstName.length !== 0 && state.firstName.length < 2) && <p className="error">First Name must be 2 Characters long</p>}
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={onChangeHandler} type="text" name="lastName" />
                </div>
                {(state.lastName.length !== 0 && state.lastName.length < 2) && <p className="error">Last Name must be 2 Characters long</p>}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={onChangeHandler} type="email" name="email" />
                </div>
                {(state.email.length !== 0 && state.email.length < 5) && <p className="error">Email must be 5 Characters long</p>}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={onChangeHandler} type="password" name="password" />
                </div>
                {(state.password.length !== 0 && state.password.length < 8) && <p className="error">Password must be 8 Characters long</p>}
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={onChangeHandler} type="password" name="confirmPassword" />
                </div>
                {(state.confirmPassword !== state.password) && <p className="error">Confirm Password must match Password</p>}
                {/* <div className="error">
                    
                    {(state.lastName.length !== 0 && state.lastName.length < 2) && <p>Last Name must be 2 Characters long</p>}
                    {(state.email.length !== 0 && state.email.length < 5) && <p>Email must be 5 Characters long</p>}
                    {(state.password.length !== 0 && state.password.length < 8) && <p>Password must be 8 Characters long</p>}
                    {(state.confirmPassword !== state.password) && <p>Confirm Password must match Password</p>}
                </div> */}
            </form>

            <h2>New User</h2>
            <p>First Name: {state.firstName}</p>
            <p>Last Name:  {state.lastName}</p>
            <p>Email: {state.email}</p>
            <p>Password: {state.password}</p>
            <p>Confirm Password: {state.confirmPassword}</p>
        </div>



    );
}

export default Form;