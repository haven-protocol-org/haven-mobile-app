// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Button, Label, Box, Inner, Row, Header } from "./styles";
import Input from "../../../components/input/index.js";
import Description from "../../../components/description/index.js";
import { Information } from "../../../constants/type.js";
import Border from "../../../components/border/index.js";

class Create extends Component {
  state = {
    count: 1,
    password: "1234",
    generated_seed:
      "rift oxidant edited atrium hydrogen height gather leopard demonstrate lectures kangaroo kisses relic happens coexist inmate needed evaluate cigar enlist aching tribal losing meant relic"
  };

  onComponentDidMount() {
    this.props.navigation.setOptions({
      headerBackTitle: "hi"
    });
  }

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
            <Inner>
              <Header>
                <Label>Seed Phrase</Label>
              </Header>
              <Border />
              <Input
                label="Create Password"
                value={this.state.password}
                placeholder="Enter seed"
                type="input"
                border="none"
              />
              <Description
                label="Enter Seed"
                value={this.state.generated_seed}
                placeholder="Enter seed"
              />
              <Row>
                <Information>
                  Upon clicking "Next" your Haven Vault Seed Phrase will be
                  revealed. Have a Password Manager ready, ensure you're not on
                  public or unsecured wifi
                </Information>
              </Row>
              <Row>
                <Button onPress={this.routeToLogin}>
                  <Label>Back</Label>
                </Button>
                <Button onPress={this.handleCreate}>
                  <Label>Next</Label>
                </Button>
              </Row>
            </Inner>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Inner>
              <Header>
                <Label>Seed Phrase</Label>
              </Header>
              <Border />
              <Description
                label="Enter Seed"
                value={this.state.generated_seed}
                placeholder="Enter seed"
              />
              <Row>
                <Information>
                  Upon clicking "Next" your Haven Vault Seed Phrase will be
                  revealed. Have a Password Manager ready, ensure you're not on
                  public or unsecured wifi
                </Information>
              </Row>
              <Row>
                <Button onPress={this.routeToLogin}>
                  <Label>Back</Label>
                </Button>
                <Button onPress={this.handleCreate}>
                  <Label>Next</Label>
                </Button>
              </Row>
            </Inner>
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
    this.props.navigation.setOptions({
      title: "Create a Vault",
      headerBackTitle: "Cancel"
    });
    return <Container>{this.renderBox()}</Container>;
  }
}

export default Create;
