// Library Imports
import React, { Component } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import Charts from "../../components/charts/index.js";
import SectionHeader from "../../components/section-header/index.js";
import Transaction from "../../components/transactions/index.js";
import PageWrapper from "../../components/page-wrapper/index.js";
import BalanceStatistic from "../../components/balance-statistics/index.js";

// Relative Imports
import { Container, Cancel } from "./styles";

class Details extends Component {
  render() {
    const { ticker, type } = this.props.route.params;

    this.props.navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
    });
    return (
      <ScrollView>
        <Container>
          <Charts token={ticker} />
          <PageWrapper>
            <BalanceStatistic />
          </PageWrapper>
          <PageWrapper>
            <SectionHeader
              title="Transaction History"
              subtitle="Overview of your transaction history"
            />
            <Transaction />
            <Transaction />
            <Transaction />
          </PageWrapper>
        </Container>
      </ScrollView>
    );
  }
}

export default Details;
