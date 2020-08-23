// Library Imports
import React, { Component } from "react";
import {
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Text,
} from "react-native";

// Relative Imports
import { Container, Label, Haven, Box, View, Brand } from "./styles";

class Base extends Component {
  showModal = () => {
    this.props.navigation.navigate("Modal");
  };
  render() {
    return (
      <Container>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Text>Base Modal</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default Base;
