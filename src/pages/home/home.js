import React, { Component } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity,Dimensions,Image, Text } from 'react-native';

import {FONT_REGULAR } from '../../styles/typography';
import {Colors} from '../../styles';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const mainNav= [
    {title:"BarberShops", color:"#37C778",icon:require("../../assets/images/barber.png"),link:"BarberShops"},
    {title:"Orders",color:"#F05561",icon:require("../../assets/images/choices.png"),link:"BarberShops"},
    ];
 
    
export default class Home extends Component {
  renderItems({ item }) {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        style={[styles.card,{backgroundColor:item.color}]}
        onPress={() => navigation.navigate(item.link)}
      >
      <Image style={styles.ImageStyle} source={item.icon} resizeMethod={'resize'} />
      <Text style={styles.TextStyle}>{item.title}</Text>
      </TouchableOpacity>
    );
  }  
  render() {     
    return (
      <View style={styles.container}>
      <FlatList
        data={mainNav}
       renderItem={this.renderItems.bind(this)}
       keyExtractor={item => item.title}
      />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:10
  },
  card: {
    height:WINDOW_HEIGHT/4,
    width: WINDOW_WIDTH -40,
    marginBottom:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    fontFamily: FONT_REGULAR.fontFamily,
    fontWeight: FONT_REGULAR.fontWeight,
    textAlign: 'center',
    color: Colors.WHITE,
    fontSize:20,
    marginTop:10
  },
  ImageStyle: {
    width: 70,
    height: 90,
    resizeMode: 'contain',
},
});
