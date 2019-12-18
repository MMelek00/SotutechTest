import { StyleSheet } from 'react-native';
import { Header } from 'react-navigation-stack';
let headerHeight = Header.HEIGHT;
import {FONT_BOLD} from '../styles/typography';

export default CustomRouteStyle = StyleSheet.create({
    headerTitleStyle: {
        fontFamily: FONT_BOLD.FONT_FAMILY_BOLD,
        fontWeight: FONT_BOLD.fontWeight,
        textAlign: 'center',
        alignSelf:'center',
        fontSize: 22,
        flex: 1,
    },
    buttonStyle: {
        height: headerHeight,
        paddingHorizontal: 15,
        justifyContent: 'center',
        position: 'relative',
        backgroundColor:'#fff',
    }
});