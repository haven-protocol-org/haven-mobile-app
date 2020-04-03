// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Button, Label, Box } from "./styles";
import Input from "../../../components/input/index.js";

class Create extends Component {
  state = {
    count: 1
  };

  routeToLogin = () => {
    this.props.navigation.goBack();
  };

  handleCreate = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1
    });
  };

  renderBox = () => {
    const { count } = this.state;

    switch (count) {
      case 1:
        return (
          <Box>
            <Input label="Enter Seed" type="description" />
          </Box>
        );
      case 2:
        return (
          <Box>
            <Label>BOX TWO</Label>
          </Box>
        );
      case 3:
        return (
          <Box>
            <Label>BOX THREE</Label>
          </Box>
        );

        break;
      default:
    }
  };

  render() {
    return (
      <Container>
        <Label>State is {this.state.count}</Label>
        <Button onPress={this.routeToLogin}>
          <Label>Back</Label>
        </Button>
        <Button onPress={this.handleCreate}>
          <Label>Next</Label>
        </Button>
        {this.renderBox()}
      </Container>
    );
  }
}

export default Create;
