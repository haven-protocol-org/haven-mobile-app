// Library Imports
import React, { Component } from "react";
import { ScrollView } from "react-native";

// Relative Imports
import { Container, Label, Wrapper } from "./styles";
import assets from "../../constants/assets.js";
import Token from "../../components/token";

class Tokens extends Component {
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
        <Wrapper>{this.renderTokens()}</Wrapper>
      </Container>
    );
  }
}

export default Tokens;
