// Library Imports
import React, { Component } from "react";
import { TextInput, SegmentedControlIOS, View, Text } from "react-native";
import SegmentedController from "../../components/segment_controller/index.js";

// Relative Imports
import { Container, Label, Button } from "./styles";

class Exchange extends Component {
  state = {
    values: ["Basic", "Advanced"],
    selectedIndex: 0
  };

  changeTabs = event => {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex
    });
  };

  render() {
    const { values, selectedIndex } = this.state;

    return (
      <Container>
        <SegmentedController
          values={values}
          selectedIndex={selectedIndex}
          onChange={this.changeTabs}
        />
      </Container>
    );
  }
}

export default Exchange;
