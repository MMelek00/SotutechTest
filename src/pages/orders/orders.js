import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import {fetchOrders} from '../../redux/actions/orders';
import {Colors} from '../../styles';
import {FONT_BOLD } from '../../styles/typography';
import {verticalScale,scaleSize} from '../../styles/mixins';
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
  componentDidMount () {
    this.props.fetchOrders();
    console.log('redux',this.props.userOrdersData);
      }
 
  render() {
    return (
      this.props.userOrdersData.orders? (<EmptyScreen navigation={this.props.navigation}/>):(
      <View style={styles.container}>
        <Text>"Welcome to Login"</Text>
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