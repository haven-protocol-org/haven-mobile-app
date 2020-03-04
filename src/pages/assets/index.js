// Library Imports
import React, { Component } from "react";
import { ScrollView } from "react-native";

// Relative Imports
import { Container, Button, Balances, Wrapper } from "./styles";
import Asset from "../../components/asset/index.js";
import { Balance, Secondary } from "../../constants/type.js";
import Token from "../../components/token";
import assets from "../../constants/assets.js";

class Assets extends Component {
  state = {
    balanceLabel: "Total Balance",
    totalBalance: "12345.67",
    balanceType: 0
  };

  renderTokens = () => {
    return assets.map(asset => {
      const { token, ticker, price, change } = asset;
      return (
        <Token
          onPress={() => this.props.navigation.navigate("Details")}
          key={ticker}
          token={token}
          ticker={"x" + ticker}
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
          <Balances>
            <Button>
              <Balance>{this.state.totalBalance}</Balance>
              <Secondary>{this.state.balanceLabel}</Secondary>
            </Button>
          </Balances>
          <Wrapper>{this.renderTokens()}</Wrapper>
        </Container>
      </ScrollView>
    );
  }
}

export default Assets;
