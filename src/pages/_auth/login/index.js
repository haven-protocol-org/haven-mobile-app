// Library Imports
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "../../../actions";

// Relative Imports
import { Container, Button, Label, Footer, Link } from "./styles";
import InputText from "../../../components/input-text";
import InputLink from "../../../components/input-link";

import Border from "../../../components/border";
import Next from "../../../components/next";
import Input_Information from "../../../components/_inputs/input_information";

class Login extends Component {
  state = {
    login: "",
    wallet: ""
  };

  componentDidMount() {}

  handleAuth = () => {
    this.props.authenticateUser(true);
  };

  render() {
    return (
      <Fragment>
        <Border />
        <Container>
          <InputLink
            label="Need to Login?"
            value={"Open a Vault"}
            border={true}
            onPress={() => this.props.navigation.navigate("Login")}
          />
          <InputLink
            label="Want a vault?"
            value={"Create a vault"}
            border={true}
            onPress={() => this.props.navigation.navigate("Create")}
          />
          <InputLink
            label="Have a vault?"
            value={"Restore a Vault"}
            onPress={() => this.props.navigation.navigate("Restore")}
          />
          <Input_Information copy="To get started select an option from the list above." />
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
