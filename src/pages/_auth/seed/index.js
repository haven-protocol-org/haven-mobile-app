// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Button, Label } from "./styles";
import Next from "../../../components/next";

class Seed extends Component {
  routeUser = () => {
    this.props.navigation.navigate("Create");
  };
  render() {
    this.props.navigation.setOptions({
      headerBackTitleVisible: false,
      headerRight: () => (
        <Next onPress={() => this.props.navigation.navigate("Validate")} />
      )
    });
    return (
      <Container>
        <Label>Display Seed</Label>
      </Container>
    );
  }
}

export default Seed;
