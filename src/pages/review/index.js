// Library Imports
import React, { Component } from "react";

import {
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Charts from "../../components/charts/index.js";
import SectionHeader from "../../components/section-header/index.js";
import Transaction from "../../components/transactions/index.js";
import PageWrapper from "../../components/page-wrapper/index.js";
import { Primary } from "../../constants/type.js";
import TransactionDetail from "../../components/transaction-details/index.js";
import Button from "../../components/button/index.js";
import ExchangeConfirmation from "../../components/_summaries/exchange_confirmation";
import TransferConfirmation from "../../components/_summaries/transfer_confirmation";
import Border from "../../components/border/index.js";

// Relative Imports
import { Container, Overview, Amount, Cancel } from "./styles";

class Review extends Component {
  state = { title: "" };

  componentDidMount() {
    const { type } = this.props.route.params;

    this.setState({
      title: `${type} Transaction`,
      route: this.props.route.params.from_ticker,
    });
  }

  handleConfirmation = () => {
    this.setState(
      {
        loading: true,
      },
      () =>
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1000)
    );
    // This navigates the user to the correct page
    this.props.navigation.navigate("Assets", {
      screen: "Details",
      params: { ticker: this.state.route },
    });
  };

  render() {
    const {
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
      type,
      to_asset,
      recipient,
      conversion_rate,
    } = this.props.route.params;

    this.props.navigation.setOptions({
      title: `Review ${from_ticker} ${type}`,
      headerLeft: null,
      headerShown: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Cancel>Cancel</Cancel>
        </TouchableOpacity>
      ),
    });
    return (
      <Container>
        <Overview>
          <Amount>
            {type === "Exchange" && `${to_amount} ${to_ticker}`}
            {type === "Transfer" && `${from_amount} ${from_ticker}`}
          </Amount>
        </Overview>
        <Border />
        <PageWrapper>
          {type === "Exchange" && (
            <ExchangeConfirmation
              from_asset={from_asset}
              from_amount={from_amount}
              to_asset={to_asset}
              to_amount={to_amount}
              priority={priority.message}
              conversion_rate={conversion_rate}
              to_address={to_address}
            />
          )}
          {type === "Transfer" && (
            <TransferConfirmation
              from_asset={from_asset}
              from_amount={from_amount}
              recipient={recipient}
            />
          )}
        </PageWrapper>
        <Button
          onPress={this.handleConfirmation}
          text={`Confirm ${type}`}
          status={this.state.loading}
        />
      </Container>
    );
  }
}

export default Review;
