import React, { Component } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity,Image, Text } from 'react-native';

import {FONT_REGULAR } from '../../styles/typography';
import {Colors} from '../../styles';
import {width,height} from '../../styles/mixins';
import salons from '../../assets/salons.json';
    
export default class BarberShops extends Component {
  
  renderItems({ item }) {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        style={[styles.card,{backgroundColor:item.color}]}
        onPress={() => navigation.navigate("ShopDetails", {shop: item})}
      >
      <Image style={styles.ImageStyle} source={{uri:item.photo}} resizeMethod={'resize'} />
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.TextStyle}>
      {item.name}
      </Text>
      </TouchableOpacity>
    );
  }
  emptyScreen = () => {
    return (
      <View style={{ height: height / 1.195,alignContent:'center'}}>
        <Text>No Data Found</Text>
      </View>
    );
  };  
  render() {     
    return (
      <View style={styles.container}>
      <FlatList
       data={salons}
       renderItem={this.renderItems.bind(this)}
       keyExtractor={item => item.name}
       ListEmptyComponent={this.emptyScreen}
       numColumns={2}
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
    width: width / 2.2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 4,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: '#fff'
  },
  TextStyle: {
    fontFamily: FONT_REGULAR.fontFamily,
    fontWeight: FONT_REGULAR.fontWeight,
    textAlign: 'center',
    marginBottom:5,
    color: Colors.BLACK,
    fontSize:16,
    marginTop:10
  },
  ImageStyle: {
    height: 140,
    width: '100%',
},
});
