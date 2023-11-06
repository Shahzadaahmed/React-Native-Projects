/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   COMMON SCROLLABLE SHEET SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'

// IMPORT COMMON STYLES
import {theme} from '.';
import {windowHeight, windowWidth} from './Constants';
import {actuatedNormalize, Fonts} from '../utils';

// IMPORT COMPONENTS
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import Handle from './handle.picker';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    onClosePress: any,
    children: any,
    snapPoints : Array<any>,
    overScroll: boolean
}

// START THE FILTER FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const ScrollableView = (props: Props) =>
{
    const {onClosePress, children, snapPoints, overScroll} = props
    return (
        <ScrollBottomSheet
            componentType="ScrollView"
            snapPoints={snapPoints}
            initialSnapIndex={1}
            enableOverScroll={false}
            style={{backgroundColor: theme.colors.white, zIndex: 1,paddingHorizontal: 5}}
            renderHandle={() => (<Handle onPress={props.onClosePress} />)}
        >
            {children}
        </ScrollBottomSheet>

    )
}

export default ScrollableView;