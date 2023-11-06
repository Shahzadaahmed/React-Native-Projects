/*
	 AUTHOR: QASIM ZUBAIR
	SUMMARY: PROVIDES THE GLOBAL STYLES FOR THE APP.
*/

// IMPORT REACT NATIVE DIMENSIONS MODULE TO FIND THE DIMENSIONS OF USER'S DEVICE.
import {Dimensions} from "react-native"
export const fontStyle = {letterSpacing: 0.3, fontFamily: "Montserrat-Regular", color: "#fff"};
export const fontMedium = {fontFamily: "Montserrat-Medium"};
export const centered: object = {alignItems: "center", justifyContent: "center"};
export const setCircle = (size: number) => ({width: getWidth (size), height: getWidth (size), borderRadius: getWidth (size) / 2});
export const setCirclePt = (size: number) => ({width: size, height: size, borderRadius: size / 2});
export const setRadius = (top: number, right: number, bottom: number, left: number) => ({borderTopLeftRadius: top, borderTopRightRadius: right, borderBottomRightRadius: bottom, borderBottomLeftRadius: left});
export const setPadding = (top: any, right: any, bottom: any, left: any) => ({paddingTop: top, paddingLeft: left, paddingRight: right, paddingBottom: bottom})
export const setMargin = (top: any, right: any, bottom: any, left: any) => ({marginTop: top, marginLeft: left, marginRight: right, marginBottom: bottom})
const window = Dimensions.get ("window");

// RETURN WIDTH AND HEIGHT IN NUMBER.
export const getHeight = (percentage: number) => (window.height * percentage) / 100;
export const getWidth = (percentage: number) => (window.width * percentage) / 100;
export const getVideoHeightRatio = (videoWidth: number) => ((videoWidth / 16) * 9);
