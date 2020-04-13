// Library Imports
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "../../../actions";
import { ActivityIndicator } from "react-native";

// Relative Imports
import { Container, Button, Label, Footer, Link } from "./styles";
import InputText from "../../../components/_inputs/input-text";
import InputLink from "../../../components/_inputs/input-link";
import Input_Information from "../../../components/_inputs/input_information";
import Border from "../../../components/border";
import Next from "../../../components/next";

import vaults from "../../../constants/vaults.js";

class Login extends Component {
  state = {
    wallet: "",
    password: "",
    label: "Finish",
    vault: {
      name: vaults[0].name,
      address: vaults[0].address
    }
  };

  loginUser = () => {
    this.setState({
      label: "Loading"
    });

    setTimeout(() => {
      this.props.authenticateUser(true);
    }, 2000);
  };

  handleAuth = () => {
    this.props.authenticateUser(true);
  };

  selectWallet = ({ name, address }) => {
    this.props.navigation.navigate("Login");
    this.setState({
      vault: {
        name: name,
        address: address
      }
    });
  };

  render() {
    this.props.navigation.setOptions({
      headerBackTitleVisible: false,
      title: "Open a Vault",
      headerRight: () => (
        <Next
          label={
            this.state.label === "Loading" ? (
              <ActivityIndicator size="small" />
            ) : (
              this.state.label
            )
          }
          onPress={this.loginUser}
        />
      )
    });
    return (
      <Fragment>
        <Border />
        <Container>
          <InputLink
            label="Selected Vault"
            value={this.state.vault.name}
            border={true}
            onPress={() =>
              this.props.navigation.navigate("Vaults", {
                data: vaults,
                onPress: this.selectWallet
              })
            }
          />
          <InputText
            label="Vault Password"
            value={this.state.password}
            placeholder="Enter password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />

          <Input_Information copy="Select a wallet and enter the password. If you don't have a wallet go back and Create a Vault." />
        </Container>
        <Border />
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  authUser: state.authUser
});

export default connect(
  mapStateToProps,
  { authenticateUser }
)(Login);
