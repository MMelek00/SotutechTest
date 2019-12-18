import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, View,Text,Platform,Button,TouchableOpacity,ActivityIndicator,Alert
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-community/async-storage';

import moment from 'moment';
import {StyledInput} from './styledInput';
import {Colors} from '../../styles';
import {FONT_BOLD } from '../../styles/typography';
import {verticalScale,scaleSize} from '../../styles/mixins';
import { connect } from 'react-redux'

class BookBarber extends Component {
    state = {
        date: new Date(),
        mode: 'date',
        show: false,
        fullName:'',
        loading:false,
      }
      onChange(name, val) {
        this.setState({ [name]: val });
    }  
      setDate = (event, date) => {
        date = date || this.state.date;
    
        this.setState({
          show: Platform.OS === 'ios' ? true : false,
          date,
        });
      }
    
      show = mode => {
        this.setState({
          show: true,
          mode,
        });
      }
    
      datepicker = () => {
        this.show('date');
      }
    
      timepicker = () => {
        this.show('time');
      }
       bookNow= async () =>{
        const { navigation } = this.props;

        if(!this.state.fullName){
          Alert.alert(
            'error',
            'Please fill all Fields',

          );
        }else{
        this.setState({ loading: true})
        let order=this.props.userOrdersData.orders;
        let obj={
          name:this.state.fullName,
          date:this.state.date,
          barber:navigation.state.params.barber
        }
        order.push(obj)
        try {
          await AsyncStorage.setItem('USER_ORDERS_INFO', JSON.stringify(order));
          //await this.props.fetchOrders();
          this.setState({ loading: false})
          navigation.navigate('Home');
        } catch (error) {
          // Error saving data
          this.setState({ loading: false})
        }
      }
        }
  render() {
    const { navigation } = this.props;
    let {
        name,
        photo,
      } = navigation.state.params.barber;
    const { show, date, mode,loading } = this.state;
  if(loading){
    return(<View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>)
  }
    return (
        <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
        <Image
         style={styles.mainPhoto}
         resizeMethod={"resize"}
         source={{ uri: photo }}
       />
        <Text style={[styles.nomalText,styles.descriptionText]} >{name}</Text>   
        </View>
        <StyledInput
         style={styles.inputSepratorStyle}
         value={this.state.fullName}
         placeholder='you Name'
         onChangeText={this.onChange.bind(this, 'fullName')}
         autoCapitalize="none"
         />
        <View style={styles.datecontainer}>
          <Button style={{backgroundColor:'red',alignSelf:'center'}} onPress={this.datepicker} title="Pick Day of Visit" />
          <Text style={[styles.nomalText,styles.descriptionText]} >{moment(date).format("dddd, MMMM Do YYYY")}</Text>   
        </View>
        <View style={styles.datecontainer}>
          <Button onPress={this.timepicker} title="Pick Hour of Visit" />
        <Text style={[styles.nomalText,styles.descriptionText]} >{moment(date).format(" h:mm a")}</Text>   
        </View>
        { show && <DateTimePicker value={date}
                    mode={mode}
                    minimumDate={new Date()}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
        }
        <TouchableOpacity 
            onPress={this.bookNow}
            style={styles.buttonStyle}
        >
            <Text style={styles.textStyle} >BOOK NOW</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  datecontainer: {
    flexDirection:'row',
    padding:30,
    alignItems:'center'
  },
  inputSepratorStyle: {
    margin: 20,
    alignSelf:'center'

  },
  mainPhoto: {
    width: '40%',
    height: 120,
    borderRadius: 5
  },
  descriptionText: {
    color:Colors.BLACK,
    fontFamily:FONT_BOLD.fontFamily,
    fontWeight:FONT_BOLD.fontWeight,
    fontSize:18,
    marginHorizontal:20
   },
   headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingVertical:10,
   },
   textStyle:{
    fontSize: 16,
    color: '#fff',
    fontWeight:FONT_BOLD.fontWeight,
    textAlign: 'center',
}, 
   buttonStyle:{
    marginTop: verticalScale(30),
    width: scaleSize(309),
    height: verticalScale(40),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
    shadowColor: 'rgba(107,85,163,0.3)',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    elevation: 2,
    alignSelf:'center'
},
});


const mapStateToProps = state => ({
  userOrdersData: state.userOrdersData,
});

const mapDispatchToProps = (dispatch) => {
  return {
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(BookBarber);
