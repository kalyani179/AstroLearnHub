import React from "react";
import { PixelRatio } from "react-native";
function getPixels(pixels)
{
    var pixelsVal = pixels;
    var dip = PixelRatio.roundToNearestPixel(pixelsVal);
    dip = Math.round(dip);
    // console.log(dip);
    return dip;
}
export default getPixels;