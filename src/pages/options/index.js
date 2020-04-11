// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container } from "./styles";
import TextLink from "../../components/_inputs/input-link";

class Options extends Component {
  renderOptions = () => {
    console.log("IN OPTIONS");
  };

  render() {
    return <Container>{this.renderOptions}</Container>;
  }
}

export default Options;
