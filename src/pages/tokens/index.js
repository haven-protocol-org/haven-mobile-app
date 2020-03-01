// Library Imports
import React, { Component } from "react";
import { ScrollView, RefreshControl } from "react-native";

// Relative Imports
import { Container, Label, Wrapper } from "./styles";
import assets from "../../constants/assets.js";
import Token from "../../components/token";

class Tokens extends Component {
  state = {
    refreshing: false
  };
  _onRefresh = () => {
    this.setState({ refreshing: true });
    fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };
  renderTokens = () => {
    return assets.map(asset => {
      const { token, ticker, price, change } = asset;

      return (
        <Token
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
      <Container>
        <Wrapper
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          {this.renderTokens()}
        </Wrapper>
      </Container>
    );
  }
}

export default Tokens;
