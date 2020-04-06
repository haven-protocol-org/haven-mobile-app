// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Button, Label } from "./styles";

class Seed extends Component {
  routeUser = () => {
    this.props.navigation.navigate("Create");
  };
  render() {
    return (
      <Container>
        <Label>SEED</Label>
        <Button>
          <Label>Seed</Label>
        </Button>
        <Button>
          <Label onPress={this.routeUser}>Create</Label>
        </Button>
      </Container>
    );
  }
}

export default Seed;
