// Library Imports
import React, { Component, Fragment } from "react";
import { TextInput, SegmentedControlIOS, View, Text } from "react-native";
import SegmentedController from "../../components/segment_controller";
import Input from "../../components/input";
import Button from "../../components/button";
import Border from "../../components/border";
import FormContainer from "../../components/form-container";
import ExchangeSummary from "../../components/_summaries/exchange";

// Relative Imports
import { Container, Label, Preview, PreviewLabel } from "./styles";

class Exchange extends Component {
  state = {
    values: ["Basic", "Advanced"],
    selectedIndex: 0,
    fromAmount: "",
    placeholder: "Enter text",
    value: "",
    fromAsset: "Select From Asset",
    toAsset: "Select To Asset",
    token: "",
    ///
    from_value: "",
    from_ticker: "",
    from_token: "",
    from_balance: "",
    from_amount: "",
    to_value: "",
    to_ticker: "",
    to_token: "",
    to_balance: "",
    to_amount: "",
    conversion_rate: "1 XHV : 0.2127 xUSD"
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

  selectFromToken = () => {
    this.props.navigation.navigate("Tokens", {
      type: "from",
      onPress: this.chooseToken
    });
  };

  selectToToken = () => {
    this.props.navigation.navigate("Tokens", {
      type: "to",
      onPress: this.chooseToken
    });
  };

  handleChange = event => {
    const name = event.target.name;
    const value: string = event.target.value;

    this.setState({ [name]: value });
  };

  chooseToken = ({ ticker, token, type }) => {
    this.props.navigation.navigate("Exchange");
    if (type === "from") {
      this.setState({
        from_value: `${token}${" "}(${ticker})`,
        from_ticker: ticker,
        from_token: token,
        from_balance: "10.00"
      });
    } else if (type === "to") {
      this.setState({
        to_value: `${token}${" "}(${ticker})`,
        to_ticker: ticker,
        to_token: token,
        to_balance: "5.00"
      });
    }
  };

  render() {
    const {
      values,
      selectedIndex,
      from_value,
      from_ticker,
      from_token,
      from_balance,
      from_amount,
      to_value,
      to_ticker,
      to_token,
      to_balance,
      to_amount,
      conversion_rate
    } = this.state;

    return (
      <Container>
        <SegmentedController
          values={values}
          selectedIndex={selectedIndex}
          onPress={this.changeTabs}
        />
        {selectedIndex == 0 ? (
          <Fragment>
            <Border />

            <Input
              label="From Asset"
              type="cell"
              onPress={this.selectFromToken}
              chooseToken={this.chooseToken}
              value={from_value}
              placeholder="Select Asset"
            />
            <Input
              label="From Amount"
              type="input"
              placeholder="Enter Amount"
              value={from_amount}
              onChange={this.changeInput}
              onChangeText={from_amount => this.setState({ from_amount })}
            />

            <Input
              label="To Asset"
              type="cell"
              onPress={this.selectToToken}
              value={to_value}
              placeholder="Select Asset"
            />
            <Input
              label="To Amount"
              type="input"
              placeholder="Enter Amount"
              value={to_amount}
              onChange={this.changeInput}
              onChangeText={to_amount => this.setState({ to_amount })}
            />
          </Fragment>
        ) : (
          <Fragment>
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
          </Fragment>
        )}
        <ExchangeSummary
          conversion_rate={conversion_rate}
          from_asset={from_ticker}
          from_amount={from_amount}
          to_asset={to_ticker}
          to_amount={to_amount}
        />
        <Border />
        <Preview>
          <PreviewLabel>Preview Exchange</PreviewLabel>
        </Preview>
        <Border />
      </Container>
    );
  }
}

export default Exchange;
