// Library Imports
import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
// Relative Imports
import {
  Container,
  Button,
  Label,
  Box,
  Inner,
  Row,
  Header,
  Image,
  ImageWrapper,
  ButtonLabel
} from "./styles";
import Input from "../../../components/input";
import Description from "../../../components/description";
import { Information } from "../../../constants/type.js";
import Border from "../../../components/border";
import Next from "../../../components/next";

class Create extends Component {
  state = {
    count: 1,
    password: "1234",
    generated_seed:
      "rift oxidant edited atrium hydrogen height gather leopard demonstrate lectures kangaroo kisses relic happens coexist inmate needed evaluate cigar enlist aching tribal losing meant relic"
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
            <Inner>
              <ImageWrapper>
                <Image
                  source={require("../../../assets/illustration/vault/vault.png")}
                />
              </ImageWrapper>
              <Row>
                <Information>
                  Upon clicking "Next" your Haven Vault Seed Phrase will be
                  revealed. Have a Password Manager ready, ensure you're not on
                  public or unsecured wifi
                </Information>
              </Row>
            </Inner>
          </Box>
        );
      case 2:
        return (
          <Box>
            {this.props.navigation.setOptions({
              title: "Vault Security"
            })}
            <Inner>
              <Input
                label="Create a Password"
                type="input"
                value={"password"}
                border="none"
                placeholder="Enter seed"
              />
              <Input
                label="Vault Name"
                type="input"
                value={"name"}
                border="none"
                placeholder="Enter seed"
              />
              <Row>
                <Information>
                  Creating a new wallet with a name and password means you'll be
                  able to login without entering your seed phrase. This makes
                  your experience more secure, safe and efficient.
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
            {this.props.navigation.setOptions({
              title: "Seed Phrase"
            })}
            <Inner>
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
      case 4:
        return (
          <Box>
            {this.props.navigation.setOptions({
              title: "Validate Seed"
            })}
            <Inner>
              <Description
                label="Enter seed"
                value={""}
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

        break;
      default:
    }
  };

  render() {
    this.props.navigation.setOptions({
      headerBackTitle: "Back",
      headerBackTitleVisible: false,
      headerRight: () => (
        <Next onPress={() => this.props.navigation.navigate("Security")} />
      )
    });
    return <Container>{this.renderBox()}</Container>;
  }
}

export default Create;
