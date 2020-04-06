// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Button, Label } from "./styles";

class Validate extends Component {
  routeUser = () => {
    this.props.navigation.navigate("Create");
  };
  render() {
    return (
      <Container>
        <Label>SEED</Label>
        <Button>
          <Label>Validate</Label>
        </Button>
        <Button>
          <Label onPress={this.routeUser}>Finish</Label>
        </Button>
      </Container>
    );
  }
}

export default Validate;
