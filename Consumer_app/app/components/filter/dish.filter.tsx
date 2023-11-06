/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   DISH PAGE SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState} from 'react'
import {Alert, FlatList, ScrollView, Text, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native'

// IMPORT COMMON STYLES
import {theme} from '../../common';
import {windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';
import styles from './filter.style';

// IMPORT ICONS
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// IMPORT COMPONENTS
import SelectionView from '../../common/selection.view';
import GraySkeleton from '../../common/grey.skeleton';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import Multislider from '../../common/common.multislider';
import Button from '../../common/comButton';

// START THE DISH FILTER FUNCTION THAT WILL BE IMPORTED IN FILTER COMPONENT.
const DishFilter = () =>
{
    const [showSortBy, setShowSortBy] = useState<boolean>(false) // STATE TO HIDE/DISPLAY SORT_BY VIEW 
    const [sortByValue, setSortByValue] = useState<string>('') // STATE TO SELECT/DESELECT ITEM
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false); // STATE TO HIDE/DISPLAY TIME PICKER
    const [showVendors, setShowVendors] = useState<boolean>(false) // STATE TO HIDE/DISPLAY VENDORS VIEW
    const [type, setType] = useState<string>('') // STATE TO SELECT/DESELECT ITEM
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(500);
    const [sortBy, setSortBy] = useState<any>([ // SORT BY ARRAY
        {
            id: '0',
            value: 'Price (low first)'
        },
        {
            id: '1',
            value: 'Price (high first)'
        },
        {
            id: '2',
            value: 'Rating'
        }
    ])
    const [vendors, setVendors] = useState<any>([ // VENDORS ARRAY
        {
            id: '0',
            value: 'Vendor # 1'
        },
        {
            id: '1',
            value: 'Vendor # 2'
        },
        {
            id: '2',
            value: 'Vendor # 3'
        },
        {
            id: '3',
            value: 'Vendor # 4'
        }
    ])
    const [mealType, setMealType] = useState<any>([ // MEAL TYPE ARRAY
        {
            id: '0',
            name: 'Breakfast',
            selected: false
        },
        {
            id: '1',
            name: 'Dinner',
            selected: false
        },
        {
            id: '2',
            name: 'Lunch',
            selected: false
        }
    ])

    // RENDER FUNCTION FOR CATEGORIES LIST
    const renderItem = ({item, index}: any) => 
    {
        const {name} = item
        return (
            <TouchableWithoutFeedback onPress={() => setType(name)}>
                <View style={{...styles.categoryView, borderColor: type == name ? theme.colors.active : theme.colors.white, marginLeft: index == 0 ? 0 : 10}}>
                    <Text style={{...styles.subTextBottomSheet, color: type == name ? theme.colors.active : theme.colors.darkGrey, fontFamily: type == name ? Fonts.Medium : Fonts.Regular}}>{name}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    // FUNCTION TO SET PRICE RANGE (MIN/MAX)
    const setValues = (values: any) =>
    {
        try
        {
            setMin(values[0]);
            setMax(values[1]);
        } catch (error)
        {
            console.error(error);
        }
    };

    return (
        <>
            <View style={styles.container}>
                <View style={{...styles.row, justifyContent: 'space-between'}}>
                    <Text style={styles.headingText}>{'Filters'}</Text>
                    <Text style={{...styles.text, color: theme.colors.active}}>{'Reset'}</Text>
                </View>
                <TouchableNativeFeedback
                    onPress={() => setShowSortBy(!showSortBy)}
                >
                    <View style={{...styles.row, justifyContent: 'space-between', marginVertical: '5%'}}>
                        <Text style={styles.subHeadingText}>{'Sort by'}</Text>
                        <FontAwesome
                            name={showSortBy ? "angle-up" : "angle-down"}
                            size={actuatedNormalize(34)}
                            color={theme.colors.lightBlack}
                            style={{marginRight: 5}}
                        />
                    </View>
                </TouchableNativeFeedback>

                <View style={{display: showSortBy ? 'flex' : 'none'}}>
                    {sortBy.map((item: any, index: any) =>
                    {
                        return (
                            <View key={index}>
                                <SelectionView
                                    value={item.value}
                                    onPress={() => setSortByValue(item.value)}
                                    selected={sortByValue == item.value ? true : false}
                                />
                            </View>
                        )
                    })}
                </View>

                <Text style={[styles.subHeadingText, styles.top5]}>{'Meal type'}</Text>

                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={mealType}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                </View>

                <Text style={[styles.subHeadingText, styles.top5]}>{'Price'}</Text>
                <View style={{...styles.row, justifyContent: 'space-between'}}>
                    <GraySkeleton
                        title={'From'}
                        value={`$ ${min}`}
                        onPress={null}
                        style={{width: windowWidth * 0.45}}
                    />
                    <GraySkeleton
                        title={'To'}
                        value={`$ ${max}`}
                        onPress={null}
                        style={{width: windowWidth * 0.45}}
                    />
                </View>
                <Multislider
                    min={min}
                    max={max}
                    setValues={setValues}
                />
                <TouchableNativeFeedback
                    onPress={() => setShowVendors(!showVendors)}
                >
                    <View style={{...styles.row, justifyContent: 'space-between', marginVertical: '5%'}}>
                        <Text style={styles.subHeadingText}>{'Vendors'}</Text>
                        <FontAwesome
                            name={showVendors ? "angle-up" : "angle-down"}
                            size={actuatedNormalize(34)}
                            color={theme.colors.lightBlack}
                            style={{marginRight: 5}}
                        />
                    </View>
                </TouchableNativeFeedback>
                <View style={{display: showVendors ? 'flex' : 'none'}}>
                    {vendors.map((item: any, index: any) =>
                    {
                        return (
                            <View key={index}>
                                <SelectionView
                                    value={item.value}
                                    onPress={() => setSortByValue(item.value)}
                                    selected={sortByValue == item.value ? true : false}
                                    icon={true}
                                />
                            </View>
                        )
                    })}
                </View>

            </View>
            <View style={styles.applyButton}>
                <Button title={'Apply'} style={{width: '92%'}} onPress={null} />
            </View>
        </>
    )
}

export default DishFilter;