import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../common';
import { windowHeight, windowWidth } from '../../common/Constants';
import { actuatedNormalize, Fonts } from '../../utils';

// STYLING FOR VENDOR.COMPONENT.TSX
export default StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  imageView:
  {
    height: windowHeight*0.28,
    width: windowWidth,
    resizeMode: 'contain',
    paddingHorizontal: '5%'
  },
  mainView:
  {
    paddingVertical: '6%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor:'white',
    marginTop: -30,
    alignItems:"center",
    justifyContent:"center"
  },
  titleText:
  {
    fontSize: actuatedNormalize('22'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.lightBlack,
    alignSelf:"center"
  },
  h1:
  {
    fontSize: actuatedNormalize('24'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.lightBlack,
    alignSelf:"center"
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
    fontSize: actuatedNormalize('15'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    marginVertical: 10
  },
  descriptionText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    marginVertical: 10,
    fontWeight:"400",
  },
  btnText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.text,
    textAlign: 'center',
    
  },
  buttonView:
  {
    borderRadius: 15,
    backgroundColor: theme.colors.bgColor,
    marginVertical: 15,
    flexDirection:"row",
    width:"92%",
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center"
  },
  cartBtnText1:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.text,
    textAlign: 'center',
    right:40
  },
  cartBtnText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.text,
    textAlign: 'center',
    left:40,
    fontWeight:"bold"
  },
  text:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    textAlign: 'center'
  },
  BottomSheetText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    top:5
  },
  categoryListText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.black,
    textAlign: 'center'
  },
  categoryListText1:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    textAlign: 'center',
    padding:2,
    top:5
  },
  
  dotView:
  {
    height:4,
    width:4,
    borderRadius:4/2,
    backgroundColor:"#818C99",
  },
  dotView1:
  {
    height:4,
    width:4,
    borderRadius:4/2,
    backgroundColor:"#818C99",
    alignSelf:"center",left:3,
    top:5
  },
  addressView:{
    flexDirection:"row",
    width:"95%",
    alignSelf:"center",
    backgroundColor:"transparent",
    padding:5
  },
  categoryListContainer:
  {
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"transparent",
    marginHorizontal:"1.5%",
    left:"2%",
    marginVertical:"2%",
  },
  categoryImageView:
  {
    height: windowHeight / 2.7,
    width: windowWidth * 0.46,
    backgroundColor:theme.colors.bgColor,
    justifyContent:"center",
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  categoryImage:
  {
    height: windowHeight / 6,
    width: windowWidth * 0.42,
    padding: 10,
    paddingVertical: 15,
    backgroundColor:"transparent",
    alignSelf:"center"
  },
  categoryView:
  {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 20
  },
  cartButtonView:
  {
    backgroundColor: theme.colors.orange,
    flexDirection:"row",
    height:50,
    width:"92%",
    alignSelf:"center",
    justifyContent:"space-around",
    alignItems:"center",
    borderRadius:15,
    bottom:30
  },
  map: 
  {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
  btnOrderView:
  {
    backgroundColor:"transprent",
    flexDirection:"row",
    height:60,
    alignItems:"center",
    justifyContent:"space-evenly",
    padding:10,
    width:"65%"
  },
  btnOrder:
  {
    width:windowWidth*0.26,
    backgroundColor:theme.colors.bgColor,
    height:windowHeight*0.05,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    flexDirection:"row"
  },
  btnApple:
  {
    width:windowWidth*0.26,
    backgroundColor:theme.colors.bgColor,
    height:windowHeight*0.05,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:16,
    flexDirection:"row"
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

})