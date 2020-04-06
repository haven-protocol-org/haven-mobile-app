// Library Imports
import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
// import TabNavgation from "./src/navigation/tabNavigation.js";
import TabNavgation from "./src/navigation/tabNavigator.js";
import { dark, light } from "./src/constants/themes.js";
import Splash from "./src/pages/splash/index.js";

class App extends Component {
  state = {
    theme: dark,
    initialRouteName: "Exchange",
    authenticated: true,
    barStyle: "light-content",
    loaded: true
  };

  authenticateUser = () => {
    this.setState({
      authenticated: true
    });
  };

  render() {
    const {
      theme,
      initialRouteName,
      authenticated,
      barStyle,
      loaded
    } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={barStyle} />
        {loaded ? (
          <NavigationContainer>
            <TabNavgation
              authenticated={authenticated}
              initialRouteName={initialRouteName}
              authenticateUser={this.authenticateUser}
            />
          </NavigationContainer>
        ) : (
          <Splash />
        )}
      </ThemeProvider>
    );
  }
}

export default App;
