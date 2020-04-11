// Library Imports
import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import Charts from "../../components/charts/index.js";
import SectionHeader from "../../components/section-header/index.js";
import Transaction from "../../components/transactions/index.js";
import PageWrapper from "../../components/page-wrapper/index.js";
import { Primary } from "../../constants/type.js";
import TransactionDetail from "../../components/transaction-details/index.js";
import Button from "../../components/button/index.js";
import ExchangeConfirmation from "../../components/_summaries/exchange_confirmation";
import Border from "../../components/border/index.js";

// Relative Imports
import { Container, Overview, Amount } from "./styles";

class Review extends Component {
  state = { token: "XHV", title: "" };

  componentDidMount() {
    const { type } = this.props.route.params;

    this.setState({
      title: `${type} Transaction`
    });
  }

  handleConfirmation = () => {
    console.log("CONFIRM & SUBMIT");
  };

  render() {
    const { type, to_amount, to_ticker } = this.props.route.params;
    this.props.navigation.setOptions({
      title: this.state.title,
      headerBackTitleVisible: false
    });
    return (
      <Container>
        <Overview>
          <Amount>
            {to_amount} {to_ticker}
          </Amount>
        </Overview>
        <Border />
        <PageWrapper>
          {type === "Exchange" && <ExchangeConfirmation />}
        </PageWrapper>
        <Button onPress={this.handleConfirmation} text="Confirm" />
      </Container>
    );
  }
}

export default Review;
