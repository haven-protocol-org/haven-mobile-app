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
    amount: "",
    placeholder: "Enter text",
    value: ""
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
    const { values, selectedIndex, value, text, amount } = this.state;

    return (
      <Container>
        <SegmentedController
          values={values}
          selectedIndex={selectedIndex}
          onChange={this.changeTabs}
        />
        <Border />
        <Input
          value={amount}
          onChangeText={amount => this.setState({ amount })}
          placeholder="Select"
        />
        <Input value={value} onChange={this.changeInput} border="none" />
        <Border />
      </Container>
    );
  }
}

export default Exchange;
