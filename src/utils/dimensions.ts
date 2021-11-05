import { Dimensions, Platform, PixelRatio } from "react-native";

export function isSmallAndroid() {
    const dimen = Dimensions.get('window');

    return Platform.OS === 'android' &&
        Dimensions.get('window').width <= 360 &&
        Dimensions.get('window').height <= 700
}


export function widthPercentageToDP(widthPercent: number) {
    const screenWidth = Dimensions.get('window').width;
    // Convert string input to decimal number
    const elemWidth = widthPercent;
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

export function heightPercentageToDP(heightPercent: number) {
    const screenHeight = Dimensions.get('window').height;

    return PixelRatio.roundToNearestPixel(screenHeight * heightPercent / 100);
};