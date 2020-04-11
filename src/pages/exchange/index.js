// Library Imports
import React, { Component, Fragment } from "react";
import { SegmentedControlIOS, View, Text } from "react-native";
import SegmentedController from "../../components/segment_controller";
import Input from "../../components/input";
import Button from "../../components/button";
import Border from "../../components/border";
import FormContainer from "../../components/form-container";
import ExchangeSummary from "../../components/_summaries/exchange";
// Refactor
import InputLink from "../../components/_inputs/input-link";
import InputText from "../../components/_inputs/input-text";
import Input_Information from "../../components/_inputs/input_information";
import priorities from "../../constants/priorities.js";

// Relative Imports
import {
  Container,
  Label,
  Preview,
  Chevron,
  PreviewLabel,
  Scroll
} from "./styles";

class Exchange extends Component {
  state = {
    values: ["Basic", "Advanced"],
    selectedIndex: 1,

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
    conversion_rate: "1 XHV : 0.2127 xUSD",
    priority: { name: "Medium:", message: "Unlocks ~18 hours", prio: 2 }
  };

  changeTabs = selectedIndex => {
    this.setState({
      selectedIndex: selectedIndex
    });
  };

  handleReview = () => {
    const {
      from_ticker,
      from_value,
      from_token,
      from_amount,
      to_ticker,
      to_value,
      to_token,
      to_amount
    } = this.state;

    const valid = from_value && from_amount && to_value && to_amount;

    if (!valid) {
      this.setState({
        from_asset_error: !from_amount && "Enter from amount",
        from_amount_error: !from_amount && "Enter from asset",
        to_asset_error: !to_amount && "Enter to amount",
        to_amount_error: !to_amount && "Enter to asset"
      });
      setTimeout(() => {
        this.setState({
          from_asset_error: "",
          from_amount_error: "",
          to_asset_error: "",
          to_amount_error: ""
        });
      }, 2000);
    } else {
      this.props.navigation.navigate("Review", {
        from_ticker,
        from_value,
        from_token,
        from_amount,
        to_ticker,
        to_value,
        to_token,
        to_amount,
        type: "Exchange"
      });
    }
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
      <Scroll>
        <Container>
          <SegmentedController
            values={values}
            selectedIndex={selectedIndex}
            onPress={this.changeTabs}
          />

          {selectedIndex == 0 ? (
            <Fragment>
              <Border />
              <InputLink
                label="From Asset"
                placeholder={"Select Asset"}
                onPress={this.selectFromToken}
                chooseToken={this.chooseToken}
                value={from_value}
                border={true}
                error={this.state.from_asset_error}
              />
              <InputText
                label="From Amount"
                placeholder="Enter Amount"
                value={from_amount}
                onChangeText={from_amount => this.setState({ from_amount })}
                editable={!from_value ? false : true}
                keyboardType="numeric"
                returnKeyType="done"
                error={this.state.from_amount_error}
              />
              <Input_Information />
              <InputLink
                label="To Asset"
                onPress={this.selectToToken}
                value={to_value}
                placeholder="Select Asset"
                border={true}
                error={this.state.to_asset_error}
              />
              <InputText
                label="To Amount"
                placeholder="Enter Amount"
                value={to_amount}
                onChangeText={to_amount => this.setState({ to_amount })}
                editable={!to_value ? false : true}
                keyboardType="numeric"
                returnKeyType="done"
                error={this.state.to_amount_error}
              />
            </Fragment>
          ) : (
            <Fragment>
              <Border />
              <InputLink
                label="To Asset"
                onPress={this.selectToToken}
                value={to_value}
                placeholder="Select Asset"
                border={true}
                error={this.state.to_asset_error}
              />
              <InputText
                label="To Amount"
                placeholder="Enter Amount"
                value={to_amount}
                onChangeText={to_amount => this.setState({ to_amount })}
                editable={!to_value ? false : true}
                keyboardType="numeric"
                returnKeyType="done"
                error={this.state.to_amount_error}
              />
              <Input_Information />
              <InputLink
                label="From Asset"
                placeholder={"Select Asset"}
                onPress={this.selectFromToken}
                chooseToken={this.chooseToken}
                value={from_value}
                border={true}
                error={this.state.from_asset_error}
              />
              <InputText
                label="From Amount"
                placeholder="Enter Amount"
                value={from_amount}
                onChangeText={from_amount => this.setState({ from_amount })}
                editable={!from_value ? false : true}
                keyboardType="numeric"
                returnKeyType="done"
                error={this.state.from_amount_error}
              />
              <Input_Information />
              <InputLink
                label="Transaction Priority "
                onPress={this.selectToToken}
                value={this.state.priority.message}
                placeholder="Regular"
                border={true}
                error={this.state.to_asset_error}
              />
              <InputText
                label="To Address (Optional)"
                placeholder="Enter Recipient Address"
                value={to_amount}
                onChangeText={to_amount => this.setState({ to_amount })}
                editable={!to_value ? false : true}
                keyboardType="numeric"
                returnKeyType="done"
                error={this.state.to_amount_error}
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
          <Preview onPress={this.handleReview}>
            <PreviewLabel>Preview Exchange</PreviewLabel>
            <Chevron
              source={require("../../assets/icon/chevron/chevron.png")}
            />
          </Preview>
          <Border />
        </Container>
      </Scroll>
    );
  }
}

export default Exchange;
