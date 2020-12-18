// Library Imports
import React, { Component } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import Charts from "../../components/charts/index.js";
import SectionHeader from "../../components/section-header/index.js";
import Transaction from "../../components/transactions/index.js";
import PageWrapper from "../../components/page-wrapper/index.js";
import BalanceStatistic from "../../components/balance-statistics/index.js";
import axios from "axios";

// Relative Imports
import { Container, Cancel } from "./styles";

class Details extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    const url = `https://network-api.havenprotocol.org/api/circulationSupply`;
    axios.get(url).then((response) => {
      // console.log("DATA", response.data);
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    const { ticker, type } = this.props.route.params;

    this.props.navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
    });

    return (
      <ScrollView>
        <Container>
          <Charts token={ticker} data={this.state.data} />
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
