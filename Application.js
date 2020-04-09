// Library Imports
import React, { Component, Fragment } from "react";
import { StatusBar, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

// import TabNavgation from "./src/navigation/tabNavigation.js";
import TabNavigator from "./src/navigation/tabNavigator.js";
import { dark, light } from "./src/constants/themes.js";
import Splash from "./src/pages/splash/index.js";

//REDUX
import { connect } from "react-redux";

class Application extends Component {
  state = {
    currentTheme: "dark",
    initialRouteName: "Settings",
    authenticated: true,
    barStyle: "light-content",
    loaded: true,
    authenticateUser: false,
    authUser: true
  };

  componentDidUpdate(prevProps) {
    if (this.props.authUser !== prevProps.authUser) {
      this.setState({
        authUser: this.props.authUser
      });
    } else if (this.props.currentTheme !== prevProps.currentTheme) {
      this.setState({
        currentTheme: this.props.currentTheme
      });
    }
  }

  render() {
    const {
      theme,
      initialRouteName,
      authenticated,
      barStyle,
      loaded,
      authUser
    } = this.state;

    console.log("CURRENT THEME STATE", this.state.currentTheme);
    console.log("CURRENT THEME PROPS", this.props.currentTheme);

    return (
      <ThemeProvider theme={this.state.currentTheme === "dark" ? dark : light}>
        <StatusBar barStyle={barStyle} />
        {loaded ? (
          <NavigationContainer>
            <TabNavigator
              authenticated={authenticated}
              authUser={this.state.authUser === true ? "true" : "false"}
              initialRouteName={initialRouteName}
            />
          </NavigationContainer>
        ) : (
          <Splash />
        )}
      </ThemeProvider>
    );
  }
}

export const mapStateToProps = state => ({
  authUser: state.authUser,
  currentTheme: state.currentTheme
});

export default connect(mapStateToProps)(Application);
