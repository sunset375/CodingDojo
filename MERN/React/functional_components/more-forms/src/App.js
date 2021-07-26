import React, {useState} from 'react';
import Form from './components/Form';
import './App.css';
import Results from './components/Results';

function App() {
    // const [state, setState] = useState({
    //   firstName: "",
    //   lastName: "asdf",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // });


    return (
      <div className="App">
        {/* <Form state={state} setState={setState} /> */}
        <Form/>
        {/* <Results state={state}/> */}

      </div>
    );
}

export default App;