// Library Imports
import React, { Component, Fragment } from "react";

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

import Next from "../../../components/next";

class Validate extends Component {
  state = {
    seed: ""
  };
  routeUser = () => {
    this.props.navigation.navigate("Create");
  };
  render() {
    this.props.navigation.setOptions({
      headerBackTitleVisible: false,
      headerRight: () => (
        <Next label={"Finish"} onPress={() => alert("Login Now")} />
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
          />

          <Microcopy>
            <Information>
              Please verify your Seed Phrase this will ensure that your Seed
              Phrase has been correctly backed up. Store your seed in a safe
              location and do not share this with anyone
            </Information>
          </Microcopy>
        </Container>
      </Fragment>
    );
  }
}

export default Validate;
