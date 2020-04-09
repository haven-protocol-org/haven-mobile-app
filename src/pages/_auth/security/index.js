// Library Imports
import React, { Component, Fragment } from "react";

// Relative Imports
import { Container, Button, Label, Microcopy, Footer, Link } from "./styles";
import Next from "../../../components/next";
import InputText from "../../../components/input-text";
import { Information } from "../../../constants/type.js";
import Border from "../../../components/border/index.js";
import Input_Information from "../../../components/_inputs/input_information";

class Security extends Component {
  state = {
    password: "",
    wallet: ""
  };
  routeUser = () => {
    this.props.navigation.navigate("Create");
  };
  render() {
    this.props.navigation.setOptions({
      title: "Create a Vault",
      headerBackTitleVisible: false,
      headerRight: () => (
        <Next
          label="Next"
          onPress={() => this.props.navigation.navigate("Seed")}
        />
      )
    });
    return (
      <Fragment>
        <Border />
        <Container>
          <InputText
            label="Wallet Name"
            placeholder="Enter wallet name"
            value={this.state.wallet}
            border={true}
            onChangeText={wallet => this.setState({ wallet })}
          />
          <InputText
            label="Wallet Password"
            placeholder="Enter wallet password"
            value={this.state.login}
            onChangeText={password => this.setState({ password })}
          />
          <Input_Information copy="A Vault Name, Password and Seed Phrase are stored on this phone and never sent to any server, providing a greater sense of security. " />
        </Container>
        <Border />
      </Fragment>
    );
  }
}

export default Security;
