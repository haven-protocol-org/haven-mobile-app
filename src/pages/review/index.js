// Library Imports
import React, { Component } from "react";
import { ScrollView } from "react-native";
import Charts from "../../components/charts/index.js";
import SectionHeader from "../../components/section-header/index.js";
import Transaction from "../../components/transactions/index.js";
import PageWrapper from "../../components/page-wrapper/index.js";
import { Primary } from "../../constants/type.js";
import TransactionDetail from "../../components/transaction-details/index.js";
import Button from "../../components/button/index.js";

// Relative Imports
import { Container } from "./styles";

class Review extends Component {
  state = { token: "XHV", tabBarVisible: false };

  componentDidMount() {
    this.props.navigation.setOptions({
      title: `${"Review " + this.state.token + " Transfer"}`,
      headerBackTitle: "Cancel"
    });

    this.props.navigation.setParams({
      tabBarVisible: this.state.tabBarVisible
    });
  }

  render() {
    return (
      <Container>
        <PageWrapper>
          <TransactionDetail />
        </PageWrapper>
      </Container>
    );
  }
}

export default Review;
