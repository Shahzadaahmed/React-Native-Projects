import {parseZone} from 'moment';
import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../common';
import {windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';

// STYLING
export default StyleSheet.create({

  container:
  {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map:
  {
    ...StyleSheet.absoluteFillObject
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
  markerFixed:
  {
    left: Platform.OS == 'ios' ? windowHeight / windowWidth * 72 : windowWidth * 0.34,
    // marginTop: -48,
    position: 'absolute',
    top: '25%'
  },
  backIcon:
  {
    position: 'absolute',
    top: 45,
    left: 15,
  },
  dragSign:
  {
    height: 5,
    width: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.borderColor,
    alignSelf: 'center',
    marginBottom: '5%'
    // position: 'absolute',
    // top: 20
  },
  headingText:
  {
    fontSize: actuatedNormalize(22),
    fontFamily: Fonts.SemiBold,
    marginBottom: '10%',
  },
  inputView:
  {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: theme.colors.bgColor,
  },
  input:
  {
    fontSize: actuatedNormalize(16),
    fontFamily: Fonts.Regular,
    paddingHorizontal: 5,
    backgroundColor: theme.colors.bgColor,
  },
  buttonView:
  {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: theme.colors.bgColor,
    marginTop: 15,
    marginBottom: 5
  },
  bottomSheet:
  {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: 10
  },
  buttonText:
  {
    fontSize: actuatedNormalize(18),
    fontFamily: Fonts.Regular,
    textAlign: 'center'
  },
  googlePlace:
  {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CDCFD0',
    borderWidth: 1,
    backgroundColor: '#000',
    borderRadius: 10,
    marginTop: '5%',
    marginBottom: '10%',
    paddingHorizontal: 5,
    marginHorizontal: '5%',
    shadowColor: '#CDCFD0',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {height: 2, width: 2},
  },
  iconView:
  {
    shadowColor: theme.colors.darkGrey,
    shadowRadius: 2,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.9,
    zIndex: 1
  },
  bottomView:
  {
    width: windowWidth*0.92,
    alignSelf: 'center',
  },
  borderTop:
  {
    backgroundColor: 'white',
    padding: 10,
    // paddingBottom: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 10,
    borderBottomWidth:5,
    borderColor: theme.colors.white
  },
  row: {flexDirection:'row',alignItems:'center'},
  space: {justifyContent: 'space-between'},
  marginVertical: {marginVertical: '5%'},
  addressTypeView:
  {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth*0.25,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 5
  },
  subText:
  {
    fontSize: actuatedNormalize(16),
    fontFamily: Fonts.Regular,
    marginLeft: 5
  },
  favViewPopup:
  {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5%',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 15,
    marginBottom: '5%',
    marginHorizontal: '5%',
    position: 'absolute',
    top: '25%',
    zIndex:1
  },
  favIcon:
  {
    position: 'absolute',
    right: '5%'
  },
  smallText:
  {
    fontSize: actuatedNormalize(14),
    fontFamily: Fonts.Regular,
    color: theme.colors.black,
    width: windowWidth*0.6,
    marginLeft: 5
  },
  favSheet:
  {
    padding: '5%',
    backgroundColor: theme.colors.white
  }
})