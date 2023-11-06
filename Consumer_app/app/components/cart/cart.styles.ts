import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../common';
import { windowHeight, windowWidth } from '../../common/Constants';
import { actuatedNormalize, Fonts } from '../../utils';
import normalize from 'react-native-normalize';

// STYLING
export default StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  topHeader:
  {
      marginTop: Platform.OS === 'ios' ? normalize(40) : -20,
      flexDirection:'row',
      backgroundColor:"transparent",
      margin:10,
      justifyContent:"space-between",
      alignItems:"center"
  },
  imageView:
  {
    height: windowHeight*0.28,
    width: windowWidth,
    resizeMode: 'contain',
    paddingHorizontal: '5%'
  },
  markerBox:
  {
    height:54,
    width:54,
    backgroundColor:theme.colors.bgColor,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:16
  },
  mainView:
  {
    paddingVertical: '6%',
    paddingHorizontal: '4%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor:'orange',
    marginTop: -30
  },
  titleText:
  {
    fontSize: actuatedNormalize('22'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.lightBlack
  },
  subTitleText:
  {
    fontSize: actuatedNormalize('17'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.lightBlack,
    padding:normalize(5),
    marginHorizontal:20,
  },
  row:
  {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconView:
  {
    height: 50,
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white
  },
  subText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    marginVertical: 5
  },
  text:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.black,
    textAlign: 'center'
  },
  textH2:
  {
    fontSize: actuatedNormalize('17'),
    fontFamily: Fonts.Regular,
    color: theme.colors.black,
  },
  textH3:{
    fontSize: actuatedNormalize('17'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
  },
  textH1:
  {
    fontSize: actuatedNormalize('17'),
    fontFamily: Fonts.Medium,
    color: theme.colors.black,
  },
  cartDescriptionBox:{
    flexDirection:"row",
    backgroundColor:"transparent",
    alignItems:"center",
    width:"90%",
    alignSelf:"center"
  },
  buttonView:
  {
    padding: '5%',
    borderRadius: 15,
    backgroundColor: theme.colors.bgColor,
    marginVertical: 15
  },
  categoryView:
  {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 20
  },
  footerMainBox:
  {
    padding:10,
    backgroundColor:"transparent",
    marginVertical:"10%",
    width:"95%",
    alignSelf:"center"

  },
  descriptionTextBox:
  {
    backgroundColor:theme.colors.bgColor,
    borderRadius:16,
    marginVertical:10,
    height:windowHeight*0.09
  },
  textInput:
  {
    backgroundColor:"transparent", 
    textAlignVertical: "top",
    width:"95%",
    color:theme.colors.black,
    flex:1,
    fontSize: actuatedNormalize('16'),
    margin:10

  },
  buttonView1:
  {
    borderRadius: 15,
    backgroundColor: theme.colors.bgColor,
    flexDirection:"row",
    width:windowWidth*0.7,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    height:50,
  },
  CallButtonView:
  {
    borderRadius: 15,
    backgroundColor: theme.colors.bgColor,
    width:"15%",
    justifyContent:"center",
    height:50,
  },
  bottomBox:{
    flexDirection:"row",
    backgroundColor:"transparent",
    justifyContent:"space-evenly",
    alignItems:"center",
  },
  btnText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.text,
    textAlign: 'center',
  },
  btnOrderView:
  {
    backgroundColor:"transparent",
    flexDirection:"row",
    height:60,
    alignItems:"center",
    justifyContent:"space-between",
    padding:10,bottom:5
  },
  btnOrder:
  {
    width:windowHeight*0.09,
    backgroundColor:theme.colors.bgColor,
    height:windowWidth*0.14,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:16,
    flexDirection:"row"
  },
  btnApple:
  {
    width:windowWidth*0.7,
    backgroundColor:theme.colors.orange,
    height:windowHeight*0.065,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:16,
    flexDirection:"row"
  },
  containerBottomSheet: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: '#F3F4F9',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4
  },
  item: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 10,
  },                     
})