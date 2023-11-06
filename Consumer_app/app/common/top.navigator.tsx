/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   TOP NAVIGATOR SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ASPECT_RATIO, windowHeight, windowWidth} from './Constants';
import PressableIcon from './pressable.icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '.';
import {actuatedNormalize, Fonts} from '../utils';

const BANNER_H = ASPECT_RATIO * windowHeight / 1.8
const TOPNAVI_H = actuatedNormalize(65)

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    title: string,
    scrollA: any,
    onPressBack: any,
    onPressLike: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const TopNavigator = (props: Props) => {
  const safeArea = useSafeAreaInsets();

  const {title, scrollA, onPressBack, onPressLike} = props;
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);

  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener((a:any) => {
      const topNaviOffset = BANNER_H - TOPNAVI_H - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });

  return (
    <>
      <StatusBar
        barStyle={isTransparent ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container(safeArea, isFloating, isTransparent)}>
                <PressableIcon
                    icon={<Ionicons name={'arrow-back'} color={theme.colors.darkGrey} size={28} />}
                    onPress={onPressBack}
                    style={null}
                />
                <Text style={styles.title(isTransparent)} numberOfLines={2}>{!isTransparent && title}</Text>
                <PressableIcon
                    icon={<Ionicons name={'heart'} size={actuatedNormalize(32)} color={theme.colors.delete} />}
                    onPress={onPressLike}
                    style={null}
                />
      </View>
    </>
  );
};

const styles = {
  container: (safeArea: any, isFloating: boolean, isTransparent: boolean) => ({
    paddingTop: safeArea.top,
    marginBottom: isFloating ? -TOPNAVI_H - safeArea.top : 0,
    height: TOPNAVI_H + safeArea.top,
    shadowOffset: {y: 0},
    backgroundColor: isTransparent ? theme.colors.transparent : theme.colors.white,
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 10,
  }),
  title: (isTransparent: boolean) => ({
    fontSize: actuatedNormalize(20), 
    fontFamily: Fonts.Medium, 
    textAlign:'center',
    width: windowWidth*0.65,
    color: isTransparent ? theme.colors.white : theme.colors.black,
  }),
};

export default TopNavigator;