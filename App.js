// Library Imports
import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";

// Pages

import TabNavgation from "./src/navigation/tabNavigation.js";

import { dark, light } from "./src/constants/themes.js";

class App extends Component {
  state = {
    theme: dark
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <TabNavgation />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}

export default App;
