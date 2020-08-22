// Library Imports
import React, { Component } from "react";
import { ScrollView, Modal as Sheet, RefreshControl } from "react-native";

// Relative Imports
import { Container, Label, Haven, Box, View, Brand } from "./styles";

class Modal extends Component {
  render() {
    return (
      <Container>
        <Sheet
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        />
      </Container>
    );
  }
}

export default Modal;
