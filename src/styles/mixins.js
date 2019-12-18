import {Dimensions,PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 642;
export const { width, height } = Dimensions.get('window');

export const scaleSize = size => (WINDOW_WIDTH/guidelineBaseWidth) * size;

export const scaleFont = size => size * PixelRatio.getFontScale();
export const verticalScale = size => (height / guidelineBaseHeight) * size;
const defaultFactor = (width > guidelineBaseWidth)?.5:1.25
export const moderateScale = (size, factor = defaultFactor) => size + ( scaleSize(size) - size ) * factor;

