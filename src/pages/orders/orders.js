import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View,ActivityIndicator,FlatList } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import {fetchOrders} from '../../redux/actions/orders';
import {Colors} from '../../styles';
import {FONT_BOLD,FONT_REGULAR } from '../../styles/typography';
import {verticalScale,scaleSize, width,height} from '../../styles/mixins';
  const EmptyScreen = (props) => {
    return (
      <View style={styles.container}>
        <Text>No Orders Made Yet</Text>
        <TouchableOpacity 
        onPress={()=>props.navigation.navigate('BarberShops')}
        style={styles.buttonStyle}
        >
        <Text style={styles.textStyle} >Check Available BarberShops</Text>
      </TouchableOpacity>
      </View>
    );
  }; 
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
    };
}
    async componentDidMount () {
    await this.props.fetchOrders();
      this.setState({loading:false })
      console.log('redux',this.props.userOrdersData, this.state.loading);
      }
      renderItems({ item }) {
        return (
          <View  style={styles.card}>
          <Text style={styles.TextStyle}><Text style={{color:Colors.PRIMARY}}>Name:</Text>{item.name}</Text>
          <Text style={styles.TextStyle}>{moment(item.date).format("dddd, MMMM Do YYYY h:mm a")}</Text>
          <Text style={styles.TextStyle}><Text style={{color:Colors.PRIMARY}}>Barber :</Text> {item.barber.name}</Text>
          </View>
        );
      } 
  render() {
    let {orders} = this.props.userOrdersData;
    console.log('orders',orders);
    if(this.state.loading){
      return(
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>)
    }
    return (
      !orders? (<EmptyScreen navigation={this.props.navigation}/>):(
      <View style={styles.container}>
      <FlatList
       data={orders}
       renderItem={this.renderItems.bind(this)}
       keyExtractor={item => item.date.toString()}
      />     
     </View>)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
 card: {
  //width: width -40,
  marginBottom:10,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 2,
  marginTop: 5,
  marginHorizontal:5,
  backgroundColor: '#fff',
  alignItems:'flex-start',
  paddingHorizontal:20
},
TextStyle: {
  fontFamily: FONT_REGULAR.fontFamily,
  fontWeight: FONT_REGULAR.fontWeight,
  textAlign: 'center',
  color: Colors.BLACK,
  fontSize:20,
  marginTop:10
},
});


const mapStateToProps = state => ({
  userOrdersData: state.userOrdersData,
});

const mapDispatchToProps = (dispatch) => {
  return {
      fetchOrders: () => dispatch(fetchOrders()),
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Orders);