// Library Imports
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "../../../actions";
import { ActivityIndicator } from "react-native";

// Relative Imports
import {
  Container,
  Button,
  Label,
  Microcopy,
  Footer,
  Link,
  Border
} from "./styles";
import InputMultiline from "../../../components/input-multiline";

import Input_Information from "../../../components/_inputs/input_information";

import Next from "../../../components/next";

class Validate extends Component {
  state = {
    seed: "",
    label: "Finish",
    clipboardLabel: "Paste Seed"
  };

  loginUser = () => {
    this.setState({
      label: "Loading"
    });

    setTimeout(() => {
      this.props.authenticateUser(true);
    }, 2000);
  };

  render() {
    this.props.navigation.setOptions({
      title: "Validate Seed",
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
        <Container>
          <InputMultiline
            label="Seed Phrase"
            placeholder="Enter seed name"
            value={this.state.seed}
            scrollEnabled={false}
            editable={true}
            placeholderTextColor={"#999"}
            onChangeText={seed => this.setState({ seed })}
            numberOfLines={5}
            clipboard={true}
            clipboardLabel={this.state.clipboardLabel}
            onChangeText={wallet => this.setState({ wallet })}
            onPress={this.copySeed}
          />

          <Input_Information
            copy={
              "Please verify your Seed Phrase this will ensure that your Seed Phrase has been correctly backed up. Store your seed in a safe location and do not share this with anyone"
            }
          />
        </Container>
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
)(Validate);
