// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Button, Label } from "./styles";

class Security extends Component {
  routeUser = () => {
    this.props.navigation.navigate("Create");
  };
  render() {
    return (
      <Container>
        <Label>Security</Label>
        <Button>
          <Label>Security</Label>
        </Button>
      </Container>
    );
  }
}

export default Security;
