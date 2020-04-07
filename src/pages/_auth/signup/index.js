// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Button, Label } from "./styles";

class Login extends Component {
  routeUser = () => {
    this.props.navigation.navigate("Create");
  };
  render() {
    return (
      <Container>
        <Button>
          <Label>Password</Label>
        </Button>
        <Button>
          <Label onPress={this.routeUser}>Create a Vault</Label>
        </Button>
      </Container>
    );
  }
}

export default Login;
