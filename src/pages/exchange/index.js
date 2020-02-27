// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Label, Button } from "./styles";

class Exchange extends Component {
  render() {
    return (
      <Container>
        <Button onPress={() => this.props.navigation.navigate("Details")}>
          <Label>Exchange</Label>
        </Button>
      </Container>
    );
  }
}

export default Exchange;
