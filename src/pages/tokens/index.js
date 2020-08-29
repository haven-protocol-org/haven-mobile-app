// Library Imports
import React, { Component } from "react";
import { ScrollView, RefreshControl, useNavigation } from "react-native";

// Relative Imports
import { Container, Label, Wrapper } from "./styles";
import assets from "../../constants/assets.js";
import Token from "../../components/token";

class Tokens extends Component {
  state = {
    refreshing: false,
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };

  renderTokens = () => {
    return assets.map((asset) => {
      const { token, ticker, price, change } = asset;
      const { type, onPress } = this.props.route.params;

      return (
        <Token
          key={ticker}
          token={token}
          ticker={ticker}
          price={price}
          change={change}
          onPress={() => onPress({ token, ticker, type })}
        />
      );
    });
  };

  render() {
    this.props.navigation.setOptions({
      headerBackTitleVisible: true,
    });
    return (
      <ScrollView>
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
      </ScrollView>
    );
  }
}

export default Tokens;
