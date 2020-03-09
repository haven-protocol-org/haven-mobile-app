// Library Imports
import React, { Component } from "react";
import { TextInput, SegmentedControlIOS, View, Text } from "react-native";
import SegmentedController from "../../components/segment_controller";
import Input from "../../components/input";
import Button from "../../components/button/index.js";
import Border from "../../components/border/index.js";

// Relative Imports
import { Container, Label } from "./styles";

class Exchange extends Component {
  state = {
    values: ["Basic", "Advanced"],
    selectedIndex: 0,
    fromAmount: "",
    placeholder: "Enter text",
    value: "",
    fromAsset: "Select From Asset",
    toAsset: "Select To Asset",
    token: ""
  };

  changeTabs = selectedIndex => {
    this.setState({
      selectedIndex: selectedIndex
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

  chooseToken = () => {
    console.log("ticker");
  };

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
          onPress={this.changeTabs}
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
          </>
        ) : (
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
              placeholder="Enter Amount"
              value={fromAmount}
              onChange={this.changeInput}
              onChangeText={fromAmount => this.setState({ fromAmount })}
            />
            <Input
              label="To Address"
              type="input"
              placeholder="Enter Amount"
              value={fromAmount}
              onChange={this.changeInput}
              onChangeText={fromAmount => this.setState({ fromAmount })}
            />
            <Input
              label="Payment ID"
              type="input"
              border="none"
              placeholder="Enter Amount"
              value={fromAmount}
              onChange={this.changeInput}
              onChangeText={fromAmount => this.setState({ fromAmount })}
            />
          </>
        )}
        <Button text="Review Exchange" />
      </Container>
    );
  }
}

export default Exchange;
