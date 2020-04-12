// Library Imports
import React, { Component } from "react";
import { ScrollView, WebView, Text } from "react-native";
import Charts from "../../components/charts/index.js";
import SectionHeader from "../../components/section-header/index.js";
import Transaction from "../../components/transactions/index.js";
import PageWrapper from "../../components/page-wrapper/index.js";
import BalanceStatistic from "../../components/balance-statistics/index.js";

// Relative Imports
import { Container } from "./styles";

class Explorer extends Component {
  render() {
    this.props.navigation.setOptions({
      title: "test",
      tabBarVisible: false
    });
    return (
      <Container>
        <Text>Text</Text>
      </Container>
    );
  }
}

export default Explorer;
