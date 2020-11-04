// Library Imports
import React, { Component, Fragment } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

// import TabNavgation from "./src/navigation/tabNavigation.js";
// import TabNavigator from "./src/navigation/_tabNavigator.js";
import Navigation from "./src/navigation/config";
import Nav from "./src/navigation/nav";
import { dark, light } from "./src/constants/themes.js";
import Splash from "./src/pages/splash/index.js";

//REDUX
import { connect } from "react-redux";

class Application extends Component {
  state = {
    currentTheme: "dark",
    initialRouteName: "Assets",
    authenticated: true,
    barStyle: "light-content",
    loaded: true,
    authUser: true,
  };

  componentDidUpdate(prevProps) {
    if (this.props.authUser !== prevProps.authUser) {
      this.setState({
        authUser: this.props.authUser,
      });
    } else if (this.props.currentTheme !== prevProps.currentTheme) {
      this.setState({
        currentTheme: this.props.currentTheme,
      });
    }
  }

  render() {
    const {
      currentTheme,
      authenticated,
      loaded,
      authUser,
      initialRouteName,
    } = this.state;
    return (
      <ThemeProvider theme={currentTheme === "dark" ? dark : light}>
        <StatusBar
          barStyle={currentTheme === "dark" ? "light-content" : "dark-content"}
        />
        {loaded ? (
          <Navigation
            authenticated={authenticated}
            authUser={authUser ? true : false}
            initialRouteName={initialRouteName}
          />
        ) : (
          <Splash />
        )}
      </ThemeProvider>
    );
  }
}

export const mapStateToProps = (state) => ({
  authUser: state.authUser,
  currentTheme: state.currentTheme,
});

export default connect(mapStateToProps)(Application);
