import React from 'react'
import { View, Image, TextInput, StyleSheet, TouchableOpacity, I18nManager } from 'react-native'
import { scaleSize, verticalScale, moderateScale } from '../../styles/mixins';
export class StyledInput extends React.Component {
    render() {
        const { placeholder, style, error, value, onChangeText, secureTextEntry, keyboardType,returnKeyType, onSubmitEditing ,multiline,icon} = this.props
        return(
        <View style={[ styles.inputContainerStyle, style ]} >
            <TextInput
                underlineColorAndroid={'transparent'}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={[ styles.inputStyle, error && { color:'red' } ]}
                placeholder={ placeholder }
                placeholderTextColor={ error?'red':'#C2C2C2' }
                autoCorrect={false}
                keyboardType={keyboardType || undefined}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={ value }
                autoCapitalize='none'
                enablesReturnKeyAutomatically={true}
                onSubmitEditing={onSubmitEditing}
                returnKeyType={returnKeyType}
                multiline={multiline}
            />           
        </View>
        );
    }
  }  


const styles = {
    inputContainerStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: scaleSize(300),
        height: verticalScale(40),
        borderColor: '#C2C2C2',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius:5,
        alignItems: 'center',
        padding: 10,
        paddingLeft:20
    },
    inputIconStyle:{
        tintColor: 'rgba(102,102,102,.8)',
        marginLeft: scaleSize(25),
        resizeMode: 'contain'
    },
    inputStyle:{
        fontSize: moderateScale(14),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        flex:1,
        paddingLeft: scaleSize(26),
        paddingRight: scaleSize(25),
        height: verticalScale(43),
        textAlignVertical: 'center',
        color: '#000'
    },
}