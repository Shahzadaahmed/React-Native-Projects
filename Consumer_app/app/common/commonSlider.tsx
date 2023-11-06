/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   SLIDER/CAROUSAL VIEW SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {FlatListSlider} from 'react-native-flatlist-slider';
import {theme} from '.';
import {windowWidth} from './Constants';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    data: Array<Object>,
    height: number,
    style: any
}

// SET ITEM WIIDTH AND GAP FOR SLIDER
const itemWidth = (windowWidth / 3) * 2.5;
const gap = (windowWidth - itemWidth) / 4;

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
export const CommonSlider = (props: Props) =>
{
    const {data, height, style} = props
    return (
        <FlatListSlider
            data={data}
            imageKey={'image'}
            local
            width={itemWidth}
            height={height}
            timer={3000}
            loop={false}
            onPress={(item: any) => console.log(JSON.stringify(item))}
            indicatorActiveColor={theme.colors.active}
            indicatorActiveWidth={15}
            separatorWidth={gap}
            animation
            contentContainerStyle={style}
        />
    )
}

