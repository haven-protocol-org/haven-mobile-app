// Library Imports
import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";

// Pages
import Assets from "./src/pages/assets";
import Details from "./src/pages/details";
import Exchange from "./src/pages/exchange";
import Transfer from "./src/pages/transfer";
import Settings from "./src/pages/settings";

import TabIcon from "./src/components/tab_icon/index.js";

import { dark, light } from "./src/constants/themes.js";

// Relative Imports
//
const headerOptions = {
  headerStyle: {
    backgroundColor: "#2B2E32"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const tabOptions = {
  tabBarOptions: {
    activeTintColor: "#e91e63",
    labelStyle: {
      fontSize: 12
    },
    style: {
      backgroundColor: "blue"
    }
  }
};

class App extends Component {
  state = {
    theme: dark
  };

  // handleClick = ({ theme, value }) => {
  //   if (theme === "light") {
  //     this.props.selectTheme(light);
  //     this.setState({
  //       value: value
  //     });
  //   } else if (theme === "dark") {
  //     this.props.selectTheme(dark);
  //     this.setState({
  //       value: value
  //     });
  //   } else {
  //     return null;
  //   }
  // };
  //
  // componentDidMount() {
  //   this.setState({
  //     value: this.props.theme.value
  //   });
  // }
  //
  // handleClick = ({ theme, value }) => {
  //   if (theme === "light") {
  //     this.props.selectTheme(light);
  //     this.setState({
  //       value: value
  //     });
  //   } else if (theme === "dark") {
  //     this.props.selectTheme(dark);
  //     this.setState({
  //       value: value
  //     });
  //   } else {
  //     return null;
  //   }
  // };
  //

  render() {
    console.log("Theme", this.state.theme);
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    const AssetStack = () => {
      return (
        <Stack.Navigator screenOptions={headerOptions}>
          <Stack.Screen name="Assets" component={Assets} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      );
    };

    const ExchangeStack = () => {
      return (
        <Stack.Navigator screenOptions={headerOptions}>
          <Stack.Screen name="Exchange" component={Exchange} />
        </Stack.Navigator>
      );
    };

    const TransferStack = () => {
      return (
        <Stack.Navigator screenOptions={headerOptions}>
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      );
    };

    const SettingsStack = () => {
      return (
        <Stack.Navigator screenOptions={headerOptions}>
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      );
    };

    return (
      <ThemeProvider theme={this.state.theme}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />

          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                // You can return any component that you like here!
                return <TabIcon focused={focused} route={route} />;
              }
            })}
            tabBarOptions={{
              activeTintColor: "#ffffff",
              inactiveTintColor: "#8A8D90",
              activeBackgroundColor: "#2B2E32",
              inactiveBackgroundColor: "#2B2E32",

              style: {
                backgroundColor: "#2B2E32",
                activeTintColor: "orange",
                activeBackgroundColor: "pink"
              }
            }}
          >
            <Tab.Screen name="Assets" component={AssetStack} />
            <Tab.Screen name="Exchange" component={ExchangeStack} />
            <Tab.Screen name="Transfer" component={TransferStack} />
            <Tab.Screen name="Settings" component={SettingsStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}

export default App;
