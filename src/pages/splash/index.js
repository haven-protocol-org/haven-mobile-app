// Library Imports
import React, { Component } from "react";
import { ScrollView, RefreshControl } from "react-native";

// Relative Imports
import { Container, Label, Haven, Box, View, Brand } from "./styles";

class Splash extends Component {
  render() {
    return (
      <Container>
        <Box>
          <Brand source={require("../../assets/icon/icon.png")} />
        </Box>
      </Container>
    );
  }
}

export default Splash;
