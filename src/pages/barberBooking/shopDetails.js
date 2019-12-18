import React, { Component } from 'react';
import { Image, StyleSheet, Text,FlatList,TouchableOpacity, View,ToastAndroid,ScrollView } from 'react-native';
import {Colors} from '../../styles';
import {FONT_BOLD } from '../../styles/typography';
import {width} from '../../styles/mixins';

const Toast = (props) => {
    if (props.visible) {
      ToastAndroid.showWithGravityAndOffset(
        props.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return null;
    }
    return null;
  };

export default class ShopDetails extends Component {
    state={visible:false}
    booking(item){
    if(!item.available){
        this.setState({visible:true})
    }else{
        this.props.navigation.navigate('BookBarber',{barber: item});
    }
    }
    renderBarbers({ item, index }) {
        return (
          <TouchableOpacity
            key={index}
            onPress={()=>this.booking(item)}
            style={styles.barberCard}
          >
             <Image style={styles.imageStyle} source={{uri:item.photo}} resizeMethod={'resize'} />
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={[styles.nomalText,{textAlign:'center'}]}
            >
              {item.name}
            </Text>
            {item.available == true? (
             <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{textAlign:'center', color:Colors.SUCCESS}}
            >
              Available
            </Text>):
            (
             <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{textAlign:'center',color:Colors.ALERT,marginBottom:5}}
            >
              Unavailable
            </Text>) }
          </TouchableOpacity>
        );
      }
  render() {
    const { navigation } = this.props;
    let {
        name,
        photo,
        description,
        workDays,
        workTime,
        employees
      } = navigation.state.params.shop;
    return (
      <ScrollView style={styles.container}>
         <Image
          style={styles.mainPhoto}
          resizeMethod={"resize"}
          source={{ uri: photo }}
        />
        <Text style={[styles.nomalText,styles.descriptionText,{color:Colors.BLUE,textDecorationLine: 'underline'}]} >{name}</Text>   
        <Text style={styles.nomalText} >{description}</Text>
        <View style={styles.textContainer}>
        <Text style={[styles.nomalText,styles.descriptionText]} >Working Days :</Text>   
        <Text style={styles.nomalText} >{workDays}</Text>   
        </View>
        <View style={styles.textContainer}>
        <Text style={[styles.nomalText,styles.descriptionText]} >Working Time :</Text>   
        <Text style={styles.nomalText} >{workTime}</Text>   
        </View>
        <View>
        <Text style={[styles.nomalText,styles.descriptionText,{'color':"#000"}]} >Choose a Barber:</Text>
        <FlatList
          horizontal={true}
          data={employees}
          keyExtractor={(item, index) => item.name.toString()}
          renderItem={this.renderBarbers.bind(this)}
        />   
      </View>
        <Toast visible={this.state.visible} message="To make an appointment please choose Available barber" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  mainPhoto: {
    width: '100%',
    height: 275,
    borderRadius: 5
  },
  textContainer: {
    flexDirection:'row',
    alignContent:'center',
    alignItems: 'center',
  },
  nomalText: {
    color: '#000',
    padding: 10,
    fontSize:14
  },
  descriptionText: {
   color:Colors.PRIMARY,
   fontFamily:FONT_BOLD.fontFamily,
   fontWeight:FONT_BOLD.fontWeight,
   fontSize:18
  },
  imageStyle: {
    height: 90,
    width: '100%',
 },
  barberCard: {
    width: width / 4,
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
    marginHorizontal:5,
    backgroundColor: '#fff'
  },
});
