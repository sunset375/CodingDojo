import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCardComponent'

function App() {
  return (
    <div className="App">
      <h1>Prop it up</h1>
      <PersonCard lname="Doe" fname="Jane" age="45" haircolor="Black" />
      <PersonCard lname="Smith" fname="John" age="88" haircolor="Brown" />
      <PersonCard lname="Fillmore" fname="Millard" age="50" haircolor="Brown" />
      <PersonCard lname="Smith" fname="Maria" age="62" haircolor="Brown" />


    </div>
  );
}

export default App;
