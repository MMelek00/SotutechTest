import React, { Component } from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import AppNavigation from './src/routes/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff"/>
      {Platform.OS === 'ios' ?
      <SafeAreaView style={{ flex: 1 }} forceInset={{ 'top': 'never' }}><AppNavigation /></SafeAreaView>
      :
      <AppNavigation />
      }
      </View>
    );
  }
}