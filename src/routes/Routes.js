import React from "react";
import { View } from "react-native";
import {
  createAppContainer,
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import CustomRouteStyle from "./customRouteStyle";

import HomeScreen from '../pages/home/home';
import BarberShops from '../pages/barberBooking/barberShops';
import ShopDetails from '../pages/barberBooking/shopDetails';
import BookBarber from '../pages/barberBooking/bookBareber';
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
          headerLeft: (<View />),
        };
      }
    },
    BarberShops: {
      screen: BarberShops,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: <HeaderTitle text="Available Shops" />,
          headerTitleStyle: CustomRouteStyle.headerTitleStyle,
          headerRight: (<View />),
          headerLeft: (
            <HomeHeaderBack
            navigation={navigation}
            _onPress={() => navigation.goBack()} /> 
           ),
          };
      }
    },
    ShopDetails: {
      screen: ShopDetails,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: <HeaderTitle text="BarberShop" />,
          headerTitleStyle: CustomRouteStyle.headerTitleStyle,
          headerRight: (<View />),
          headerLeft: (
            <HomeHeaderBack
            navigation={navigation}
            _onPress={() => navigation.goBack()} /> 
           ),
          };
      }
    },
    BookBarber: {
      screen: BookBarber,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: <HeaderTitle text="Book Now" />,
          headerTitleStyle: CustomRouteStyle.headerTitleStyle,
          headerRight: (<View />),
          headerLeft: (
            <HomeHeaderBack
            navigation={navigation}
            _onPress={() => navigation.goBack()} /> 
           ),
          };
      }
    },
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(MainStack);