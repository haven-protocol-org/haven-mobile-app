// Library Imports
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "../../../actions";

// Relative Imports
import { Container, Button, Label, Microcopy, Footer, Link } from "./styles";
import InputText from "../../../components/input-text";
import { Information } from "../../../constants/type.js";
import Border from "../../../components/border/index.js";

class Login extends Component {
  state = {
    login: "",
    wallet: ""
  };

  componentDidMount() {}

  routeUser = () => {
    this.props.navigation.navigate("Security");
  };

  handleAuth = () => {
    this.props.authenticateUser(true);
  };

  render() {
    return (
      <Fragment>
        <Border />
        <Container>
          <InputText
            label="Select Wallet"
            placeholder="Enter password"
            value={this.state.wallet}
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
          <Border />
          <Footer onPress={this.handleAuth}>
            <Label>Login </Label>
          </Footer>
          <Footer onPress={this.routeUser}>
            <Label>Don't have a vault? </Label>
            <Link>Create a Vault</Link>
          </Footer>
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
