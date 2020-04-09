// Library Imports
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "../../../actions";
import { ActivityIndicator } from "react-native";

// Relative Imports
import { Container, Button, Label, Footer, Link } from "./styles";
import InputText from "../../../components/input-text";
import InputLink from "../../../components/input-link";

import Border from "../../../components/border";
import Next from "../../../components/next";
import Input_Information from "../../../components/_inputs/input_information";

class Login extends Component {
  state = {
    wallet: "",
    password: "",
    label: "Finish"
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

  render() {
    this.props.navigation.setOptions({
      headerBackTitleVisible: false,
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
            value={"Haven Wallet"}
            border={true}
            onPress={() => this.props.navigation.navigate("Login")}
          />
          <InputText
            label="Vault Password"
            value={this.state.password}
            placeholder="Enter password"
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
