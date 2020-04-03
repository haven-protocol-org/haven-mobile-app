// Library Imports
import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
// import TabNavgation from "./src/navigation/tabNavigation.js";
import TabNavgation from "./src/navigation/tabNavigator.js";
import { dark, light } from "./src/constants/themes.js";

class App extends Component {
  state = {
    theme: dark,
    initialRouteName: "Exchange",
    authenticated: true,
    barStyle: "light-content"
  };

  authenticateUser = () => {
    this.setState({
      authenticated: true
    });
  };

  render() {
    const { theme, initialRouteName, authenticated, barStyle } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={barStyle} />
        <NavigationContainer>
          <TabNavgation
            authenticated={authenticated}
            initialRouteName={initialRouteName}
            authenticateUser={this.authenticateUser}
          />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}

export default App;
