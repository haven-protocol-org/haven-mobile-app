// Library Imports
import React, { Component } from "react";
import { ScrollView } from "react-native";

// Relative Imports
import { Container, Button, Wrapper, Border } from "./styles";
import Asset from "../../components/asset/index.js";
import { Balance, Secondary } from "../../constants/type.js";
import Token from "../../components/token";
import assets from "../../constants/assets.js";
import SectionHeader from "../../components/section-header";
import PageWrapper from "../../components/page-wrapper";
import Balances from "../../components/balances";

class Assets extends Component {
  state = {
    balanceLabel: "Total Balance",
    totalBalance: "12345.67",
    balanceType: 0,
  };

  componentDidMount() {
    this.props.navigation.setOptions({ title: "Assets" });
  }
  renderTokens = () => {
    return assets.map((asset) => {
      const { token, ticker, price, change } = asset;
      return (
        <Token
          onPress={() =>
            this.props.navigation.navigate("Details", {
              ticker: ticker,
            })
          }
          key={ticker}
          token={token}
          ticker={ticker}
          price={price}
          change={change}
        />
      );
    });
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <Balances
            totalBalance={this.state.totalBalance}
            balanceLabel={this.state.balanceLabel}
          />

          <PageWrapper>
            <SectionHeader
              title="Available Assets"
              subtitle="Assets available within your Vault"
            />
            {this.renderTokens()}
          </PageWrapper>
        </Container>
      </ScrollView>
    );
  }
}

export default Assets;
