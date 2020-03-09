// Library Imports
import React, { Component } from "react";
import { ScrollView, WebView } from "react-native";
import Charts from "../../components/charts/index.js";
import SectionHeader from "../../components/section-header/index.js";
import Transaction from "../../components/transactions/index.js";
import PageWrapper from "../../components/page-wrapper/index.js";
import BalanceStatistic from "../../components/balance-statistics/index.js";

// Relative Imports
import { Container } from "./styles";

class Review extends Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <PageWrapper>
            <BalanceStatistic />
          </PageWrapper>
        </Container>
      </ScrollView>
    );
  }
}

export default Review;
