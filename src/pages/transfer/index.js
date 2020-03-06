// Library Imports
import React, { Component } from "react";
import { TextInput, SegmentedControlIOS, View, Text } from "react-native";
import SegmentedController from "../../components/segment_controller";
import Input from "../../components/input";
import Button from "../../components/button";
import Border from "../../components/border";

// Relative Imports
import { Container, Label } from "./styles";

class Transfer extends Component {
  state = {
    values: ["Send", "Receive"],
    selectedIndex: 0,
    fromAmount: "",
    placeholder: "Enter text",
    value: "",
    fromAsset: "Select From Asset",
    toAsset: "Select To Asset",
    token: ""
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

  selectToken = () => {
    this.props.navigation.navigate("Tokens");
  };

  chooseToken = () => {};

  render() {
    const {
      values,
      selectedIndex,
      value,
      text,
      amount,
      fromAsset,
      toAsset,
      fromAmount
    } = this.state;

    return (
      <Container>
        <SegmentedController
          values={values}
          selectedIndex={selectedIndex}
          onChange={this.changeTabs}
        />
        {selectedIndex == 0 ? (
          <>
            <Border />
            <Input
              label="From Asset"
              type="cell"
              onPress={this.selectToken}
              chooseToken={this.chooseToken}
              value={fromAsset}
              placeholder="Select Asset"
              onChangeText={fromAsset => this.setState({ fromAsset })}
            />
            <Input
              label="To Asset"
              type="cell"
              onPress={this.selectToken}
              value={toAsset}
              placeholder="Select Asset"
              onChangeText={amount => this.setState({ toAsset })}
            />
            <Input
              label="Amount"
              type="input"
              border="none"
              placeholder="Enter Amount"
              value={fromAmount}
              onChange={this.changeInput}
              onChangeText={fromAmount => this.setState({ fromAmount })}
            />

            <Button text="Transfer" />
          </>
        ) : (
          <>
            <Border />
            <Input
              label="Haven  Address"
              type="cell"
              border="none"
              onPress={this.selectToken}
              chooseToken={this.chooseToken}
              value={"hvxyAPCJe.....g51dzd7KV6G"}
              placeholder="Select Asset"
              onChangeText={fromAsset => this.setState({ fromAsset })}
            />
            <Button text="Copy Address" />
          </>
        )}
      </Container>
    );
  }
}

export default Transfer;
