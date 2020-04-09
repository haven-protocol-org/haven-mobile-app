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
    setCopiedText: "",
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
          label="Vault Seed"
          placeholder="Enter wallet name"
          value={this.state.seed}
          scrollEnabled={false}
          editable={false}
          border={false}
          clipboard={true}
          clipboardLabel={this.state.clipboardLabel}
          onPress={this.copySeed}
        />
        <Input_Information copy="A Seed Phrase provides complete and total access to your funds. Do not share your Seed Phrase with anyone." />
      </Container>
    );
  }
}

export default Seed;
