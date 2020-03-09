// Library Imports
import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import TabNavgation from "./src/navigation/tabNavigation.js";
import { dark, light } from "./src/constants/themes.js";

class App extends Component {
  state = {
    theme: dark
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <TabNavgation />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}

export default App;
