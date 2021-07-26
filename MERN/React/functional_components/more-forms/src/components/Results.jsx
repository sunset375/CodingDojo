const Results = props => {
    const {state} = props;
    return(
        <div>
            <h2>New User</h2>
            <p>First Name: {state.firstName}</p>
            <p>Last Name:  {state.lastName}</p>
            <p>Email: {state.email}</p>
            <p>Password: {state.password}</p>
            <p>Confirm Password: {state.confirmPassword}</p>
        </div>
    )

}
export default Results;