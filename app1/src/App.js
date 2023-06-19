import { Component } from "react";
import "./App.css";
import Banner from "./components/Banner";
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
    title: "Hello React",
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

  titleChangeListener = (event) => {
    this.setState({ title: event.target.value });
  };

  render() {
    const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "1px solid red",
      padding: "4px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <Banner
          inputCallback={this.titleChangeListener}
          value={this.state.title}
        />
        <p>{this.state.title}</p>
        <Dashboard />
        <button
          onClick={() => {
            this.changeNameHandler("Iron Man");
          }}
          style={this.style}
        >
          Change
        </button>
        <Person
          clickCallback={() => this.changeNameHandler("Bat Man")}
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
