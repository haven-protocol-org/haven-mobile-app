// Library Imports
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "../../../actions";

// Relative Imports
import { Container, Button, Label, Microcopy, Footer, Link } from "./styles";
import InputText from "../../../components/input-text";
import InputLink from "../../../components/input-link";
import { Information } from "../../../constants/type.js";
import Border from "../../../components/border";
import Next from "../../../components/next";

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
    this.props.navigation.setOptions({
      headerRight: () => (
        <Next
          label="Sign In"
          onPress={() => this.props.authenticateUser(true)}
        />
      )
    });
    return (
      <Fragment>
        <Border />
        <Container>
          <InputText
            label="Select Wallet"
            placeholder="Enter password"
            value={this.state.wallet}
            border={true}
            onChangeText={wallet => this.setState({ wallet })}
          />
          <InputText
            label="Wallet Password"
            placeholder="Enter seed"
            value={this.state.login}
            onChangeText={password => this.setState({ password })}
          />
          <Microcopy>
            <Information>
              Select your wallet and enter the password. If you don't see a
              wallet, or forgot your password, then please click the Create a
              Vault link Below
            </Information>
          </Microcopy>

          <InputLink
            label="Select Wallet"
            placeholder="Don't have a vault?"
            value={"Create a vault"}
            onPress={() => this.props.navigation.navigate("Security")}
          />
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
