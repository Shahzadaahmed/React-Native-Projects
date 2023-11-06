/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   HOST PAGE SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState} from 'react'
import {FlatList, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View} from 'react-native'

// IMPORT COMMON STYLING
import {theme} from '../../common';
import {windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';
import styles from './filter.style';
// IMPORT ICONS
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
// IMPORT COMPONENTS
import SelectionView from '../../common/selection.view';
import GraySkeleton from '../../common/grey.skeleton';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import GreySkeleton from '../../common/grey.skeleton';
import Multislider from '../../common/common.multislider';
import Button from '../../common/comButton';

// START THE HOST FILTER FUNCTION THAT WILL BE IMPORTED IN FILTER COMPONENT.
const HostFilter = () =>
{
    const [showSortBy, setShowSortBy] = useState<boolean>(false) //STATE TO HIDE/SHOW SORT BY VIEW
    const [sortByValue, setSortByValue] = useState<string>('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false); // STATE TO HIDE/SHOW DATE PICKER
    const [openingTime, setOpeningTime] = useState<string>('')
    const [isOpeningTime, setForOpeningTime] = useState<boolean>(false)
    const [closingTime, setClosingTime] = useState<string>('')
    const [sittingNumber, setSittingNumber] = useState<number>(1)
    const [type, setType] = useState<string>('')
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(500);
    const [sortBy, setSortBy] = useState<any>([
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
    const [cuisine, setCuisine] = useState<any>([
        {
            id: '0',
            name: 'Mediterranean',
            selected: false
        },
        {
            id: '1',
            name: 'Turkish',
            selected: false
        },
        {
            id: '2',
            name: 'Italian',
            selected: false
        }
    ])

    // SHOW DATE_TIME PICKER METHOD
    const showDatePicker = () =>
    {
        setDatePickerVisibility(true);
    };

    // HIDE DATE_TIME PICKER METGHOD
    const hideDatePicker = () =>
    {
        setDatePickerVisibility(false);
    };

    // HANDLE CONFIRM METHOD ON PICKING DATE_TIME
    const handleConfirm = (time: any) =>
    {
        let formattedDTime = moment(time).format("hh:mm")
        if (isOpeningTime)
        {
            setOpeningTime(formattedDTime);
        }
        else
        {
            setClosingTime(formattedDTime)
        }
        hideDatePicker();
    };

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

    // FUNCTION TO SET MIN AND MAX PRICE RANGE
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
        <View>
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
                <Text style={[styles.subHeadingText, styles.top5]}>{'Time'}</Text>
                <View style={{...styles.row, justifyContent: 'space-between'}}>
                    <GraySkeleton
                        title={'From'}
                        value={openingTime}
                        onPress={() => 
                        {
                            setDatePickerVisibility(true)
                            setForOpeningTime(true)
                        }}
                        style={{width: windowWidth * 0.45}}
                    />
                    <GraySkeleton
                        title={'To'}
                        value={closingTime}
                        onPress={() => 
                        {
                            setDatePickerVisibility(true)
                            setForOpeningTime(false)
                        }}
                        style={{width: windowWidth * 0.45}}
                    />
                </View>
                <Text style={[styles.subHeadingText, styles.top5]}>{'Cuisine'}</Text>

                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={cuisine}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                </View>

                <Text style={[styles.subHeadingText, styles.top5]}>{'Number of guests'}</Text>

                <View style={[styles.row, styles.top5, {justifyContent: 'space-between'}]}>
                    <View style={styles.incrementIcon}>
                        <AntDesign name={'minus'} size={30} color={theme.colors.black}
                            onPress={() => setSittingNumber(sittingNumber - 1)} />
                    </View>
                    <GreySkeleton
                        title={null}
                        value={sittingNumber}
                        style={{width: windowWidth * 0.6, justifyContent: 'center', marginTop: 0}}
                        onPress={null}
                    />
                    <View style={styles.incrementIcon}>
                        <AntDesign name={'plus'} size={30} color={theme.colors.black}
                            onPress={() => setSittingNumber(sittingNumber + 1)} />
                    </View>
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

            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <View style={styles.applyButton}>
                <Button title={'Apply'} style={{width: '92%'}} onPress={null} />
            </View>
        </View>
    )
}

export default HostFilter;