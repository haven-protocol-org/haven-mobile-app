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

class Modal extends Component {
  render() {
    return (
      <Container>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Text>Close Modal</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default Modal;
