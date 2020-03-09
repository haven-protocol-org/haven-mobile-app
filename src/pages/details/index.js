// Library Imports
import React, { Component } from "react";
import { ScrollView } from "react-native";
import Charts from "../../components/charts/index.js";
import SectionHeader from "../../components/section-header/index.js";
import Transaction from "../../components/transactions/index.js";
import PageWrapper from "../../components/page-wrapper/index.js";
import BalanceStatistic from "../../components/balance-statistics/index.js";

// Relative Imports
import { Container } from "./styles";

class Details extends Component {
  render() {
    const { ticker } = this.props.route.params;
    return (
      <ScrollView>
        <Container>
          <Charts token={"x" + ticker} />
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
