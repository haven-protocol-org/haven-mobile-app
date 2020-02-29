// Library Imports
import React, { Component } from "react";
import { TextInput, SegmentedControlIOS, View, Text } from "react-native";
import SegmentedController from "../../components/segment_controller";
import Input from "../../components/input";

// Relative Imports
import { Container, Label, Button, Border } from "./styles";

class Exchange extends Component {
  state = {
    values: ["Basic", "Advanced"],
    selectedIndex: 0,
    value: "hello",
    placeholder: "Enter text"
  };

  changeTabs = event => {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex
    });
  };

  changeInput = event => {
    this.setState({
      value: value
    });
  };

  render() {
    const { values, selectedIndex, value } = this.state;

    return (
      <Container>
        <SegmentedController
          values={values}
          selectedIndex={selectedIndex}
          onChange={this.changeTabs}
        />
        <Border />
        <Input value={value} onChange={this.changeInput} />
        <Input value={value} onChange={this.changeInput} border="none" />
        <Border />
      </Container>
    );
  }
}

export default Exchange;
