import { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Person from "./components/Person";
import Pet from "./components/Pet";
class App extends Component {
  state = {
    persons: [
      { name: "Mark", age: 46 },
      { name: "James", age: 39 },
      { name: "Tim", age: 35 },
      { NAME: "kEVIN", AGE: 50 },
    ],
  };
  changeNameHandler = (leaderName) => {
    console.log("button is clicked");
    //this.state.persons[0].name = "Captain America"
    this.setState({
      persons: [
        { name: leaderName, age: 38 },
        { name: "Thor", age: 37 },
        { name: "Iron Man", age: 35 },
        { NAME: "Hawk", AGE: 50 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <Dashboard />
        <button onClick={this.changeNameHandler.bind(this, "Iron Man")}>
          Change
        </button>
        <Person
          clickCallback={this.changeNameHandler.bind(this, "Bat Man")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Pet name="King" specie="cat" />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          Team Leader
        </Person>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
      </div>
    );
  }
}

export default App;
