import React, { Component } from "react";

import "./App.css";
class App extends Component {
  render() {
    console.log("App render called");
    return (
      <div className="App">
        <h1>Hi</h1>
        <h1>I am Mark</h1>
      </div>
      // React.createElement('div',{className:'App'},React.createElement('h1', null,'Hi'),
      // React.createElement('h1',null,'I am Mark'))
    );
  }
}

export default App;
