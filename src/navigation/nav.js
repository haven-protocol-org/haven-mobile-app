// Library Imports
import React, { Component, useEffect, useState } from "react";
import { View, WebView, Button } from "react-native";
import TabIcon from "../components/tab_icon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";

// Primary Pages
import Splash from "../pages/splash";
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

const Tab = createBottomTabNavigator();
import { dark, light } from "../constants/themes.js";

const Nav = () => {
  const AssetStack = createStackNavigator();
  const Assets = () => {
    return (
      <AssetStack.Navigator>
        <AssetStack.Screen name="Assets" component={Assets} />
        <AssetStack.Screen name="Details" component={Details} />
        <AssetStack.Screen name="Explorer" component={Explorer} />
      </AssetStack.Navigator>
    );
  };

  const ExchangeStack = createStackNavigator();
  const Exchanges = () => {
    return (
      <ExchangeStack.Navigator>
        <ExchangeStack.Screen name="Exchange" component={Exchange} />
        <ExchangeStack.Screen name="Options" component={Options} />
        <ExchangeStack.Screen name="Tokens" component={Tokens} />
        <ExchangeStack.Screen name="Review" component={Review} />
        <ExchangeStack.Screen name="Modal" component={ModalStack} />
      </ExchangeStack.Navigator>
    );
  };

  const TransfersStack = createStackNavigator();
  const Transfers = () => {
    return (
      <TransfersStack.Navigator>
        <TransfersStack.Screen name="Transfer" component={Transfer} />
      </TransfersStack.Navigator>
    );
  };

  const DetailsStack = createStackNavigator();
  const Details = () => {
    return (
      <DetailsStack.Navigator>
        <DetailsStack.Screen name="Details" component={Details} />
        <DetailsStack.Screen name="Explorer" component={Explorer} />
      </DetailsStack.Navigator>
    );
  };

  const SettingsStack = createStackNavigator();
  const Settings = () => {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings" component={Settings} />
      </SettingsStack.Navigator>
    );
  };

  const AuthStack = createStackNavigator();
  const Authentication = () => {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Welcome" component={Welcome} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Vaults" component={Vaults} />
        <AuthStack.Screen name="Restore" component={Restore} />
        <AuthStack.Screen name="Security" component={Security} />
        <AuthStack.Screen name="Seed" component={Seed} />
        <AuthStack.Screen name="Validate" component={Validate} />
      </AuthStack.Navigator>
    );
  };

  const TabStack = createBottomTabNavigator();
  const Tabs = () => {
    return (
      <TabStack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <TabIcon focused={focused} route={route} />;
          },
        })}
      >
        <TabStack.Screen name="Assets" component={Assets} />
        <TabStack.Screen name="Exchange" component={Exchanges} />
        <TabStack.Screen name="Transfer" component={Transfers} />
        <TabStack.Screen name="Settings" component={Settings} />
      </TabStack.Navigator>
    );
  };

  const RootStack = createBottomTabNavigator();
  const Root = () => {
    return (
      <RootStack.Navigator
        headerMode="none"
        screenOptions={{ animationEnabled: false }}
        mode="modal"
      >
        <RootStack.Screen name="Tabs" component={Tabs} />
      </RootStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default Nav;

//   <RootStack.Screen
//   name="Modal"
//   component={Modal}
//   options={{ animationEnabled: true }}
// />

// {isLoading ? (
//   <RootStack.Screen name="Splash" component={Splash} />
// ) : user ? (
//   <RootStack.Screen name="Tabs" component={Tabs} />
// ) : (
//   <RootStack.Screen name="Authentication" component={Authentication} />
// )}
// <RootStack.Screen
//   name="Modal"
//   component={Modal}
//   options={{ animationEnabled: true }}
// />
