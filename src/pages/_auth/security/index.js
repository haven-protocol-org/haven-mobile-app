// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Button, Label } from "./styles";
import Next from "../../../components/next";

class Security extends Component {
  routeUser = () => {
    this.props.navigation.navigate("Create");
  };
  render() {
    this.props.navigation.setOptions({
      headerBackTitleVisible: false,
      headerRight: () => (
        <Next onPress={() => this.props.navigation.navigate("Seed")} />
      )
    });
    return (
      <Container>
        <Label>Password & Name</Label>
      </Container>
    );
  }
}

export default Security;
