import React from 'react';
import { Image, Text, View, TouchableOpacity, I18nManager } from 'react-native';
import CustomRouteStyle from './customRouteStyle';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class HomeHeaderBack extends React.Component {
    render() {
        let { _onPress, iconName } = this.props;
        return (
            <TouchableOpacity style={CustomRouteStyle.buttonStyle} onPress={_onPress}>
                <MaterialIcon name={iconName ? iconName : 'arrow-back'} size={28} color={'black'} />
            </TouchableOpacity>
        )
    }
};
class HeaderTitle extends React.Component {
    render() {
        let { text } = this.props;
        return <Text style={[CustomRouteStyle.headerTitleStyle, { color: 'black' }]}>{text}</Text>
    }
};
export {HeaderTitle,HomeHeaderBack} ;

