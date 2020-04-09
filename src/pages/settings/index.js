// Library Imports
import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { authenticateUser } from "../../actions/index.js";
import { connect } from "react-redux";
import Next from "../../components/next/index.js";

// Relative Imports
import { Container, Form } from "./styles";
import SectionHeader from "../../components/section-header";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/input";

class Settings extends Component {
  state = { theme: "Dark Theme", toggle: true, label: "Sign Out" };

  changeTheme = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  logoutUser = () => {
    this.setState({
      label: "Loading"
    });

    setTimeout(() => {
      this.props.authenticateUser(false);
    }, 2000);
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
          onPress={this.logoutUser}
        />
      )
    });
    return (
      <ScrollView>
        <Container>
          <PageWrapper>
            <Form>
              <SectionHeader
                title="Theme"
                subtitle="Choose between light and dark themes"
              />
              <Input
                type="toggle"
                value={this.state.toggle ? "Dark Theme" : "Light Theme"}
                label="Select Theme"
                toggle={this.state.toggle}
                onPress={this.changeTheme}
              />
            </Form>

            <Form>
              <SectionHeader
                title="Private Keys"
                subtitle="Manage your wallets private keys"
              />
              <Input
                value="************************"
                type="input"
                secureTextEntry={true}
                value="input"
                label="Seed Phrase"
                onPress={this.changeTheme}
              />
              <Input
                value="************************"
                type="input"
                secureTextEntry={true}
                value="input"
                label="Public View Key"
                onPress={this.changeTheme}
              />
              <Input
                value="************************"
                type="input"
                secureTextEntry={true}
                value="input"
                label="Private View Key"
                onPress={this.changeTheme}
              />
              <Input
                value="************************"
                type="input"
                secureTextEntry={true}
                value="input"
                label="Private Spend Key"
                onPress={this.changeTheme}
              />
              <Input
                value="************************"
                type="input"
                secureTextEntry={true}
                value="input"
                label="Public View Key"
                onPress={this.changeTheme}
              />
            </Form>
          </PageWrapper>
        </Container>
      </ScrollView>
    );
  }
}

export const mapStateToProps = state => ({
  authUser: state.authUser
});

export default connect(
  mapStateToProps,
  { authenticateUser }
)(Settings);
