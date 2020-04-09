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
import { Information } from "../../../constants/type.js";
import Input_Information from "../../../components/_inputs/input_information";

import Next from "../../../components/next";

class Restore extends Component {
  state = {
    seed: "",
    label: "Next",
    clipboardLabel: "Paste Seed Phrase"
  };

  routeUser = () => {
    this.props.navigation.navigate("Security", {
      title: "Vault Security",
      type: "restore"
    });
  };

  copySeed = () => {
    this.setState({
      clipboardLabel: "Seed Pasted"
    });

    setTimeout(() => {
      this.setState({
        clipboardLabel: "Paste Seed Phrase"
      });
    }, 2000);
  };

  render() {
    this.props.navigation.setOptions({
      title: "Restore Vault",
      headerBackTitleVisible: false,
      headerRight: () => (
        <Next label={this.state.label} onPress={this.routeUser} />
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
              "Please enter the Seed Phrase of the vault you wish to restore."
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
)(Restore);
