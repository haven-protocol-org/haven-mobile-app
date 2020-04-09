// Library Imports
import React, { Component, Fragment } from "react";

// Relative Imports
import { Container, Button, Label, Microcopy, Footer, Link } from "./styles";
import Next from "../../../components/next";
import InputMultiline from "../../../components/_inputs/input-multiline";
import { Information } from "../../../constants/type.js";
import Border from "../../../components/border/index.js";
import Input_Information from "../../../components/_inputs/input_information";

class Seed extends Component {
  state = {
    clipboardLabel: "Copy Seed Phrase",
    seed:
      "drying winter hockey ridges tender bulb popular uphill recipe adventure pastry neutral howls jerseys unlikely knee space apply jeers mirror bailed juvenile jazz lagoon juvenile"
  };

  routeUser = () => {
    this.props.navigation.navigate("Create");
  };

  copySeed = () => {
    this.setState({
      clipboardLabel: "Seed Copied"
    });

    setTimeout(() => {
      this.setState({
        clipboardLabel: "Copy Seed Phrase"
      });
    }, 2000);
  };

  render() {
    this.props.navigation.setOptions({
      title: "Seed Phrase",
      headerBackTitleVisible: false,
      headerRight: () => (
        <Next
          label="Next"
          onPress={() => this.props.navigation.navigate("Validate")}
        />
      )
    });
    return (
      <Container>
        <InputMultiline
          label="Wallet Name"
          placeholder="Enter wallet name"
          value={this.state.seed}
          scrollEnabled={false}
          editable={false}
          border={false}
          clipboard={true}
          clipboardLabel={this.state.clipboardLabel}
          onChangeText={wallet => this.setState({ wallet })}
          onPress={this.copySeed}
        />
        <Input_Information copy="A Vault Name, Password and Seed Phrase are stored on this phone and never sent to any server, providing a greater sense of security. " />
      </Container>
    );
  }
}

export default Seed;
