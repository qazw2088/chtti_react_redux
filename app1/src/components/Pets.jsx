import React, { Component } from "react";

export default class Pets extends Component {
  render() {
    return (
      <div>
        I am a {this.props.specie}, named {this.props.name}
      </div>
    );
  }
}
