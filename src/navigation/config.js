// Library Imports
import React, { Component } from "react";
import { View, WebView, Button } from "react-native";
import TabIcon from "../components/tab_icon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import { HeaderBackButton } from "@react-navigation/stack";

// Primary Pages
import Assets from "../pages/assets";
import Details from "../pages/details";
import Exchange from "../pages/exchange";
import Transfer from "../pages/transfer";
import Options from "../pages/options";

// Seconday Pages
import Settings from "../pages/settings";
import Tokens from "../pages/tokens";
import Explorer from "../pages/explorer";
import Review from "../pages/review";

// Auth Pages
import Welcome from "../pages/_auth/welcome";
import Login from "../pages/_auth/login";
import Security from "../pages/_auth/security";
import Seed from "../pages/_auth/seed";
import Validate from "../pages/_auth/validate";
import Restore from "../pages/_auth/restore";
import Vaults from "../pages/_auth/vaults";
import Modal from "../pages/modal";
import Base from "../pages/modal/base";

import { dark, light } from "../constants/themes.js";

class Navigation extends Component {
  state = {
    headerOptions: {
      headerStyle: {
        backgroundColor: "#2B2E32",
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
    tabBarOptions: {
      activeTintColor: "#ffffff",
      inactiveTintColor: "#8A8D90",
      style: {
        backgroundColor: "#2B2E32",
      },
    },
  };

  render() {
    const { currentTheme } = this.props;
    const header = {
      headerStyle: {
        shadowColor:
          currentTheme === "dark"
            ? `${dark.body.border}`
            : `${light.body.border}`,
        backgroundColor:
          currentTheme === "dark"
            ? `${dark.body.foreground}`
            : `${light.body.foreground}`,
      },
      headerTintColor:
        currentTheme === "dark"
          ? `${dark.type.primary}`
          : `${light.type.primary}`,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    };

    const footer = {
      activeTintColor:
        currentTheme === "dark"
          ? `${dark.type.primary}`
          : `${light.type.primary}`,
      inactiveTintColor:
        currentTheme === "dark"
          ? `${dark.type.secondary}`
          : `${light.type.secondary}`,
      style: {
        borderTopColor:
          currentTheme === "dark"
            ? `${dark.body.border}`
            : `${light.body.border}`,
        backgroundColor:
          currentTheme === "dark"
            ? `${dark.body.foreground}`
            : `${light.body.foreground}`,
      },
    };

    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    const ExchangeStack = () => {
      return (
        <Stack.Navigator screenOptions={header}>
          <Stack.Screen name="Exchange" component={Exchange} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="Tokens" component={Tokens} />
        </Stack.Navigator>
      );
    };

    const AuthStack = () => {
      return (
        <Stack.Navigator screenOptions={header}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Vaults" component={Vaults} />
          <Stack.Screen name="Restore" component={Restore} />
          <Stack.Screen name="Security" component={Security} />
          <Stack.Screen name="Seed" component={Seed} />
          <Stack.Screen name="Validate" component={Validate} />
        </Stack.Navigator>
      );
    };

    const TransferStack = () => {
      return (
        <Stack.Navigator screenOptions={header}>
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen name="Tokens" component={Tokens} />
        </Stack.Navigator>
      );
    };

    const SettingsStack = () => {
      return (
        <Stack.Navigator screenOptions={header}>
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      );
    };

    const AssetStack = () => {
      return (
        <Stack.Navigator screenOptions={header}>
          <Stack.Screen name="Assets" component={Assets} />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerBackTitle: "Assets" }}
          />
          <Stack.Screen name="Explorer" component={Explorer} />
        </Stack.Navigator>
      );
    };

    const ModalStack = () => {
      return (
        <Stack.Navigator screenOptions={header}>
          <Stack.Screen name="Review" component={Review} />
          <Stack.Screen name="Base" component={Base} />
        </Stack.Navigator>
      );
    };

    const TabStack = () => {
      return (
        <Tab.Navigator
          tabBarOptions={footer}
          initialRouteName={this.props.initialRouteName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return <TabIcon focused={focused} route={route} />;
            },
          })}
        >
          <Tab.Screen name="Assets" component={AssetStack} />
          <Tab.Screen name="Exchange" component={ExchangeStack} />
          <Tab.Screen name="Transfer" component={TransferStack} />
          <Stack.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
      );
    };

    const MainStack = () => {
      return (
        <Stack.Navigator screenOptions={header} headerMode="none" mode="modal">
          <Stack.Screen name="Tabs" component={TabStack} />
          <Stack.Screen name="Modal" component={ModalStack} />
        </Stack.Navigator>
      );
    };

    const auth = false;
    return (
      <NavigationContainer>
        {this.props.authUser ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    );
  }
}
export const mapStateToProps = (state) => ({
  currentTheme: state.currentTheme,
});

export default connect(mapStateToProps)(Navigation);
