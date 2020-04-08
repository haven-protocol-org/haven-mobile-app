// Library Imports
import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

// import TabNavgation from "./src/navigation/tabNavigation.js";
import TabNavigator from "./src/navigation/tabNavigator.js";
import { dark, light } from "./src/constants/themes.js";
import Splash from "./src/pages/splash/index.js";
import Application from "./Application.js";

//REDUX
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import { connect } from "react-redux";

// const store = createStore(reducers, applyMiddleware(thunk));
const store = createStore(reducers);

class App extends Component {
  state = {
    theme: dark
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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Application />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
