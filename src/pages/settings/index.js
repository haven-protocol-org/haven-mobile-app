// Library Imports
import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { authenticateUser, switchTheme } from "../../actions";
import { connect } from "react-redux";
import Next from "../../components/next/index.js";

// Relative Imports
import { Container, Form, Spacer } from "./styles";
import SectionHeader from "../../components/section-header";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/input";

import InputLink from "../../components/_inputs/input-link";
import InputText from "../../components/_inputs/input-text";
import Input_Information from "../../components/_inputs/input_information";

class Settings extends Component {
  state = { theme: "Dark Theme", toggle: true, label: "Sign Out" };

  changeTheme = theme => {
    this.setState(
      {
        toggle: !this.state.toggle
      },
      () => this.props.switchTheme(theme)
    );
  };

  logoutUser = () => {
    this.setState({
      label: "Loading"
    });

    setTimeout(() => {
      this.props.authenticateUser(false);
      this.props.switchTheme("dark");
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
          <SectionHeader
            title="Theme"
            subtitle="Choose between light and dark themes"
          />
          <InputLink
            label="Dark Theme"
            value="Dark"
            border="true"
            onPress={() => this.changeTheme("dark")}
          />
          <InputLink
            label="Light Theme"
            value="Light"
            onPress={() => this.changeTheme("light")}
          />

          <Spacer />
          <SectionHeader
            title="Address"
            subtitle="Choose between light and dark themes"
          />
          <InputLink label="Manage Address" value="Dark" />
          <Spacer />
          <SectionHeader
            title="Private Keys"
            subtitle="Manage your wallets private keys"
          />

          <InputText
            value="************************"
            type="input"
            secureTextEntry={true}
            value="input"
            label="Seed Phrase"
            onPress={this.changeTheme}
            border="true"
          />
          <InputText
            value="************************"
            type="input"
            secureTextEntry={true}
            value="input"
            label="Public View Key"
            onPress={this.changeTheme}
            border="true"
          />
          <InputText
            value="************************"
            type="input"
            secureTextEntry={true}
            value="input"
            label="Private View Key"
            onPress={this.changeTheme}
            border="true"
          />
          <InputText
            value="************************"
            type="input"
            secureTextEntry={true}
            value="input"
            label="Private Spend Key"
            onPress={this.changeTheme}
            border="true"
          />
          <InputText
            value="************************"
            type="input"
            secureTextEntry={true}
            value="input"
            label="Public View Key"
            onPress={this.changeTheme}
          />
          <Input_Information copy="To view your private keys please click on the cell to reveal it" />
          <Spacer />
        </Container>
      </ScrollView>
    );
  }
}

export const mapStateToProps = state => ({
  authUser: state.authUser,
  currentTheme: state.theme
});

export default connect(
  mapStateToProps,
  { authenticateUser, switchTheme }
)(Settings);
