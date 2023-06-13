import { Component } from "react";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Person from "./components/Person";
import Pets from "./components/Pets";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Person name="Mark" age="46" />
        <Pets name="King" specie="cat"></Pets>
        <Person name="James" age="39" />
        <Person name="Tim" age="35">
          Team Leader
        </Person>
        <Person name="Kevin" age="50" />
      </div>
    );
  }
}

export default App;
