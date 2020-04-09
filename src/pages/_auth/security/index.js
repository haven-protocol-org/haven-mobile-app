// Library Imports
import React, { Component, Fragment } from "react";
import { ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { authenticateUser } from "../../../actions";

// Relative Imports
import { Container, Button, Label, Microcopy, Footer, Link } from "./styles";
import Next from "../../../components/next";
import InputText from "../../../components/_inputs/input-text";
import { Information } from "../../../constants/type.js";
import Border from "../../../components/border/index.js";
import Input_Information from "../../../components/_inputs/input_information";

class Security extends Component {
  state = {
    password: "",
    wallet: "",
    type: "",
    label: ""
  };

  componentDidMount() {
    const { type } = this.props.route.params;
    if (type === "restore") {
      this.setState({
        label: "Finish",
        type: "restore"
      });
    } else if (type === "create") {
      this.setState({
        label: "Next",
        type: "create"
      });
    }
  }

  handleNavigation = () => {
    const { type } = this.state;
    if (type === "restore") {
      this.setState({
        label: "loading"
      });

      setTimeout(() => {
        this.props.authenticateUser(true);
      }, 2000);
    } else {
      this.props.navigation.navigate("Seed");
    }
  };

  routeUser = () => {
    this.props.navigation.navigate("Create");
  };

  render() {
    this.props.navigation.setOptions({
      title: "Vault Security",
      headerBackTitleVisible: false,
      headerRight: () => (
        <Next
          label={
            this.state.label === "loading" ? (
              <ActivityIndicator size="small" />
            ) : (
              this.state.label
            )
          }
          onPress={this.handleNavigation}
        />
      )
    });

    console.log("VAULT NAME", this.state.wallet);
    console.log("VAULT PASSWORD", this.state.password);
    return (
      <Fragment>
        <Border />
        <Container>
          <InputText
            label="Vault Name"
            placeholder="Enter vault name"
            value={this.state.wallet}
            border={true}
            onChangeText={wallet => this.setState({ wallet })}
          />
          <InputText
            label="Vault Password"
            placeholder="Enter vault password"
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

export const mapStateToProps = state => ({
  authUser: state.authUser
});

export default connect(
  mapStateToProps,
  { authenticateUser }
)(Security);
