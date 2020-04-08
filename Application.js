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
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import { connect } from "react-redux";

// const store = createStore(reducers, applyMiddleware(thunk));
const store = createStore(reducers);

class Application extends Component {
  state = {
    theme: dark,
    initialRouteName: "Assets",
    authenticated: true,
    barStyle: "light-content",
    loaded: true,
    authenticateUser: false,
    authUser: false
  };

  componentDidMount() {
    console.log("CDM", this.props.authUser);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    if (this.props.authUser !== prevProps.authUser) {
      this.setState({
        authUser: this.props.authUser
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

    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  authUser: state.authUser
});

export default connect(mapStateToProps)(Application);
