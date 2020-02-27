// Library Imports
import React, { Component } from "react";
import { ScrollView } from "react-native";

// Relative Imports
import { Container, Label, Button, Balances, Balance, Wrapper } from "./styles";
import Asset from "../../components/asset/index.js";

class Assets extends Component {
  render() {
    return (
      <ScrollView>
        <Button onPress={() => this.props.navigation.navigate("Details")} />
        <Container>
          <Balances>
            <Balance>12345.67</Balance>
          </Balances>

          <Wrapper>
            <Asset onPress={() => this.props.navigation.navigate("Details")} />
            <Asset />
            <Asset />
            <Asset />
            <Asset />
            <Asset />
            <Asset />
            <Asset />
            <Asset />
          </Wrapper>
        </Container>
      </ScrollView>
    );
  }
}

export default Assets;
