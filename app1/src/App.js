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
    showPerson: false,
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
  toggleDisplayHander = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    // persons.splice(personIndex, 1);
    // this.setState({ persons: persons });
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const myStyle = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid red",
      padding: "4px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPerson === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                clickCallback={() => this.deletePersonHandler(index)}
                key={index}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
      myStyle.backgroundColor = "red";
      myStyle.color = "black";
    }

    return (
      <div className="App">
        <button
          onClick={() => {
            this.toggleDisplayHander();
          }}
          style={myStyle}
        >
          Hide/Show
        </button>
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
          style={myStyle}
        >
          Change
        </button>
        {this.state.showPerson === true ? persons : null}
      </div>
    );
  }
}

export default App;
