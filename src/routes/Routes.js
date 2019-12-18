import React from "react";
import { View } from "react-native";
import {
  createAppContainer,
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import {Colors} from '../styles';

import CustomRouteStyle from "./customRouteStyle";

import HomeScreen from '../pages/home/home';
import {
  HeaderTitle,
  HomeHeaderBack
} from './appRouteCustoms';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: <HeaderTitle text="Home" />,
          headerTitleStyle: CustomRouteStyle.headerTitleStyle,
          headerRight: (<View />),
          headerStyle: {
            backgroundColor: Colors.WHITE,
              elevation: 0,
              shadowOpacity: 0,
          },
          headerLeft: (<View />),
        };
      }
    },
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(MainStack);