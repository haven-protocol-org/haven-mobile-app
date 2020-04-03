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

// Relative Imports
import { Container } from "./styles";

class Review extends Component {
  state = { token: "XHV", title: "" };

  componentDidMount() {
    const { type } = this.props.route.params;

    this.setState({
      title: `${type} Transaction`
    });
    // this.props.navigation.setOptions({
    //   title: `${"Review " + this.state.token + " Exchange"}`,
    //   headerBackTitle: "Cancel",
    //   tabBarVisible: this.props.route.params.tabBarVisible
    // });
  }

  handleConfirmation = () => {
    console.log("CONFIRM & SUBMIT");
  };

  render() {
    const { type } = this.props.route.params;
    this.props.navigation.setOptions({
      title: this.state.title,
      headerBackTitle: ""
      // callback: this.props.navigation.navigate("Exchange")
    });
    return (
      <Container>
        <PageWrapper>
          {type === "Exchange" && <ExchangeConfirmation />}
        </PageWrapper>
        <Button onPress={this.handleConfirmation} text="Confirm" />
      </Container>
    );
  }
}

export default Review;
