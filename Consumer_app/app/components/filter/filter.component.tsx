/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   FILTER PAGE SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'

// IMPORT COMMON STYLES
import {theme} from '../../common';
import {windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';

// IMPORT COMPONENTS
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import Handle from '../../common/handle.picker';
import HostFilter from './host.filter';
import DishFilter from './dish.filter';
import MainFilter from './main.filter';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    onClosePress: any,
    goTo: string,
    onPressListView? : any,
    onPressGridView? : any,
    gridView? : boolean,
    listView? : boolean,
    snapPoints : Array<any>,
    overScroll: boolean
}

// START THE FILTER FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const Filter = (props: Props) =>
{
    const {onClosePress, goTo, onPressListView, onPressGridView, gridView, listView, snapPoints, overScroll} = props
    return (
        <ScrollBottomSheet
            componentType="ScrollView"
            snapPoints={snapPoints}
            initialSnapIndex={1}
            enableOverScroll={false}
            style={{backgroundColor: theme.colors.white, zIndex: 1,paddingHorizontal: 5}}
            renderHandle={() => (<Handle onPress={props.onClosePress} />)}
        >
            {goTo == 'dishFilter' ?
                <DishFilter />
                :
                goTo == 'hostFilter' ?
                    <HostFilter />
                    :
                    goTo == 'mainFilter' ?
                        <MainFilter 
                        onPressListView={onPressListView}
                        onPressGridView={onPressGridView}
                        listView={listView}
                        gridView={gridView}
                        /> : null
            }
        </ScrollBottomSheet>

    )
}

export default Filter;