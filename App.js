// Library Imports
import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

import TabNavigator from "./src/navigation/tabNavigator.js";
import { dark, light } from "./src/constants/themes.js";
import Splash from "./src/pages/splash/index.js";
import Application from "./Application.js";

//REDUX
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}

export default App;
