// Library Imports
import React, { Component } from "react";
import {
  ScrollView,
  Dimensions,
  RefreshControl,
  useNavigation,
} from "react-native";

// Relative Imports
import { Container, Label, Wrapper } from "./styles";
import assets from "../../constants/assets.js";
import Token from "../../components/token";

class Tokens extends Component {
  state = {
    refreshing: false,
    screen_height: 0,
  };

  componentDidMount() {
    let ScreenHeight = Dimensions.get("window").height;
    this.setState({
      screen_height: ScreenHeight,
    });
  }

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

    const height = this.state.screen_height;

    return (
      <ScrollView>
        <Container>
          <Wrapper
            height={height}
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
