// Library Imports
import React, { Component } from "react";
import { View, WebView } from "react-native";
import TabIcon from "../components/tab_icon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Relative Imports
import Assets from "../pages/assets";
import Details from "../pages/details";
import Exchange from "../pages/exchange";
import Transfer from "../pages/transfer";
import Settings from "../pages/settings";
import Tokens from "../pages/tokens";
import Explorer from "../pages/explorer";
import Review from "../pages/review";

const headerOptions = {
  headerStyle: {
    backgroundColor: "#2B2E32"
  },
  headerTintColor: "#ffffff",
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

function Asset() {}

class TabNavgation extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    const AssetStack = ({ navigation }) => {
      return (
        <Stack.Navigator screenOptions={headerOptions}>
          <Stack.Screen name="Assets" component={Assets} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Explorer" component={Explorer} />
        </Stack.Navigator>
      );
    };

    const ExchangeStack = ({ navigation }) => {
      return (
        <Stack.Navigator screenOptions={headerOptions}>
          <Stack.Screen name="Exchange" component={Exchange} />
          <Stack.Screen name="Tokens" component={Tokens} />
          <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>
      );
    };

    const ModalState = () => {
      return (
        <Stack.Navigator headerShown={false} headerBackTitle={"Close"}>
          <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>
      );
    };

    const TransferStack = () => {
      return (
        <Stack.Navigator screenOptions={headerOptions} mode="modal">
          <Stack.Screen
            name="Transfer"
            component={Transfer}
            options={{
              tabBarVisible: false
            }}
          />
          <Stack.Screen
            name="Review"
            component={Review}
            options={{
              title: "Review Transfer",
              tabBarVisible: false
            }}
          />
        </Stack.Navigator>
      );
    };

    const DetailStack = () => {
      return (
        <Stack.Navigator screenOptions={headerOptions}>
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Explorer" component={Explorer} />
        </Stack.Navigator>
      );
    };

    const SettingsStack = () => {
      return (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#2B2E32"
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        >
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      );
    };
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <TabIcon focused={focused} route={route} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: "#ffffff",
          inactiveTintColor: "#8A8D90",
          activeBackgroundColor: `${props => props.theme.body.background}`,
          inactiveBackgroundColor: `${props => props.theme.body.background}`,
          style: {
            backgroundColor: "#2B2E32"
          }
        }}
      >
        <Tab.Screen name="Assets" component={AssetStack} />
        <Tab.Screen name="Exchange" component={ExchangeStack} />
        <Tab.Screen name="Transfer" component={TransferStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    );
  }
}

export default TabNavgation;
