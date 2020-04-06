// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Button, Label } from "./styles";
import Next from "../../../components/next";

class Validate extends Component {
  routeUser = () => {
    this.props.navigation.navigate("Create");
  };
  render() {
    this.props.navigation.setOptions({
      headerBackTitleVisible: false,
      headerRight: () => (
        <Next label={"Finish"} onPress={() => alert("Login Now")} />
      )
    });
    return (
      <Container>
        <Label>Validate Seed</Label>
      </Container>
    );
  }
}

export default Validate;
