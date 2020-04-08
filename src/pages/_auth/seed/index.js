// Library Imports
import React, { Component, Fragment } from "react";

// Relative Imports
import { Container, Button, Label, Microcopy, Footer, Link } from "./styles";
import Next from "../../../components/next";
import InputMultiline from "../../../components/input-multiline";
import { Information } from "../../../constants/type.js";
import Border from "../../../components/border/index.js";

class Seed extends Component {
  state = {
    seed:
      "drying winter hockey ridges tender bulb popular uphill recipe adventure pastry neutral howls jerseys unlikely knee space apply jeers mirror bailed juvenile jazz lagoon juvenile"
  };
  routeUser = () => {
    this.props.navigation.navigate("Create");
  };
  render() {
    this.props.navigation.setOptions({
      title: "Seed Phrase",
      headerBackTitleVisible: false,
      headerRight: () => (
        <Next onPress={() => this.props.navigation.navigate("Validate")} />
      )
    });
    return (
      <Fragment>
        <Border />
        <Container>
          <InputMultiline
            label="Wallet Name"
            placeholder="Enter wallet name"
            value={this.state.seed}
            scrollEnabled={false}
            editable={false}
            onChangeText={wallet => this.setState({ wallet })}
          />

          <Microcopy>
            <Information>
              A Seed Phrase is a algorithmically generated password and provides
              full access to your account and assets. Store your seed in a safe
              location and do not share this with anyone.
            </Information>
          </Microcopy>
          <Border />
        </Container>
        <Border />
      </Fragment>
    );
  }
}

export default Seed;
