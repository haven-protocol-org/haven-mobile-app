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
  Scroll,
} from "./styles";

class Exchange extends Component {
  state = {
    values: ["Basic", "Advanced"],
    selectedIndex: 0,

    ///
    from_asset: "",
    from_value: "",
    from_ticker: "",
    from_token: "",
    from_balance: "",
    from_amount: "",
    to_value: "",
    to_asset: "",
    to_ticker: "",
    to_token: "",
    to_balance: "",
    to_amount: "",
    to_address: "",
    conversion_rate: "1 XHV : 0.2127 xUSD",
    priority: {},
  };

  componentDidMount() {
    this.setState({
      priority: priorities[0],
    });
  }

  changeTabs = (selectedIndex) => {
    this.setState({
      selectedIndex,
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
      to_amount,
      from_asset,
      to_asset,
      to_address,
      conversion_rate,
      selectedIndex,
      priority,
    } = this.state;

    const basicValid =
      from_asset && from_amount && to_asset && to_asset && selectedIndex === 0;

    const advancedValid =
      priority &&
      from_asset &&
      from_amount &&
      to_asset &&
      to_amount &&
      selectedIndex === 1;

    if (!basicValid) {
      this.setState({
        from_asset_error: !from_amount && "Enter from amount",
        from_amount_error: !from_amount && "Enter from asset",
        to_asset_error: !to_amount && "Enter to amount",
        to_amount_error: !to_amount && "Enter to asset",
      });
      setTimeout(() => {
        this.setState({
          from_asset_error: "",
          from_amount_error: "",
          to_asset_error: "",
          to_amount_error: "",
        });
      }, 2000);
    }
    if (basicValid) {
      console.log("from_asset", from_asset);
      this.props.navigation.navigate("Modal");
      this.props.navigation.navigate("Review", {
        from_ticker,
        from_value,
        from_token,
        from_amount,
        from_asset,
        to_ticker,
        to_value,
        to_token,
        to_amount,
        to_address,
        selectedIndex,
        priority,
        from_asset,
        to_asset,
        conversion_rate,
        type: "Exchange",
      });
    }
    if (!advancedValid) {
      this.setState({
        from_asset_error: !from_amount && "Enter from amount",
        from_amount_error: !from_amount && "Enter from asset",
        to_asset_error: !to_amount && "Enter to amount",
        to_amount_error: !to_amount && "Enter to asset",
        to_address_error: !to_address && "Enter to address",
      });
      setTimeout(() => {
        this.setState({
          from_asset_error: "",
          from_amount_error: "",
          to_asset_error: "",
          to_amount_error: "",
          to_address_error: "",
        });
      }, 2000);
    }
    if (advancedValid) {
      this.props.navigation.navigate("Review", {
        from_ticker,
        from_value,
        from_token,
        from_amount,
        to_ticker,
        to_value,
        to_token,
        to_amount,
        to_address,
        selectedIndex,
        priority,
        conversion_rate,
        from_asset,
        to_asset,
        type: "Exchange",
      });
    }
  };

  changeInput = (event) => {
    this.setState({
      value: value,
    });
  };

  selectFromToken = () => {
    this.props.navigation.navigate("Tokens", {
      type: "from",
      onPress: this.chooseToken,
    });
  };

  selectToToken = () => {
    this.props.navigation.navigate("Tokens", {
      type: "to",
      onPress: this.chooseToken,
    });
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value: string = event.target.value;

    this.setState({ [name]: value });
  };

  chooseToken = ({ ticker, token, type }) => {
    this.props.navigation.navigate("Exchange");
    if (type === "from") {
      this.setState({
        from_value: `${token}${" "}(${ticker})`,
        from_asset: token,
        from_ticker: ticker,
        from_token: token,
        from_balance: "10.00",
      });
    } else if (type === "to") {
      this.setState({
        to_value: `${token}${" "}(${ticker})`,
        to_ticker: ticker,
        to_asset: token,
        to_token: token,
        to_balance: "5.00",
      });
    }
  };

  handlePrioritySelect = ({ name, message, priority }) => {
    this.props.navigation.navigate("Exchange");
    this.setState({
      priority: {
        name: name,
        message: message,
        priority: priority,
      },
    });
  };

  priorityOptions = () => {
    this.props.navigation.navigate("Options", {
      title: "Priority Options",
      data: priorities,
      onPress: this.handlePrioritySelect,
    });
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
      from_asset,
      to_value,
      to_asset,
      to_ticker,
      to_token,
      to_balance,
      to_amount,
      to_address,
      conversion_rate,
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
                value={from_asset}
                border={true}
                error={this.state.from_asset_error}
              />
              <InputText
                label="From Amount"
                placeholder="Enter Amount"
                value={from_amount}
                onChangeText={(from_amount) => this.setState({ from_amount })}
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
                onChangeText={(to_amount) => this.setState({ to_amount })}
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
                label="From Asset"
                placeholder={"Select Asset"}
                onPress={this.selectFromToken}
                chooseToken={this.chooseToken}
                value={from_asset}
                border={true}
                error={this.state.from_asset_error}
              />
              <InputText
                label="From Amount"
                placeholder="Enter Amount"
                value={from_amount}
                onChangeText={(from_amount) => this.setState({ from_amount })}
                editable={!from_value ? false : true}
                keyboardType="numeric"
                returnKeyType="done"
                error={this.state.from_amount_error}
              />
              <Input_Information />
              <InputLink
                label="To Asset"
                onPress={this.selectToToken}
                value={to_asset}
                placeholder="Select Asset"
                border={true}
                error={this.state.to_asset_error}
              />
              <InputText
                label="To Amount"
                placeholder="Enter Amount"
                value={to_amount}
                onChangeText={(to_amount) => this.setState({ to_amount })}
                editable={!to_value ? false : true}
                keyboardType="numeric"
                returnKeyType="done"
                error={this.state.to_amount_error}
              />

              <Input_Information />
              <InputLink
                label={`Transaction Priority ${this.state.priority.name}`}
                onPress={this.priorityOptions}
                value={this.state.priority.message}
                placeholder="Regular"
                border={true}
              />
              <InputText
                label="To Address (Optional)"
                placeholder="Enter Recipient Address"
                value={to_address}
                onChangeText={(to_address) => this.setState({ to_address })}
                editable={!to_value ? false : true}
                keyboardType="numeric"
                returnKeyType="done"
                error={this.state.to_address_error}
              />
            </Fragment>
          )}
          <ExchangeSummary
            conversion_rate={conversion_rate}
            from_asset={from_asset}
            from_amount={from_amount}
            to_asset={to_asset}
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
