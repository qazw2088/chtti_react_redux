import { Component } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import Person from "./components/Person";
// import styled from "styled-components";
// import Radium, { StyleRoot } from "radium";
// import Pet from "./components/Pet";
import styles from "./App.module.css";

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
    console.log("toggleDisplayHander");
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
    let buttonClass = [styles.Button];
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
      buttonClass.push(styles.Green);
    }
    // const classes = ["blue", "bold"].join(" ");
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.Blue);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.Bold);
    }
    return (
      <div className={styles.App}>
        <p className={classes.join(" ")}>This is my firt react style app</p>
        <button
          className={buttonClass.join(" ")}
          alt={this.state.showPerson ? "true" : "false"}
          key={"first_button"}
          onClick={() => {
            this.toggleDisplayHander();
          }}
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
          className={styles.Button}
          key={"second_button"}
          onClick={() => {
            this.changeNameHandler("Iron Man");
          }}
        >
          Change
        </button>
        {this.state.showPerson === true ? persons : null}
      </div>
    );
  }
}

export default App;
