/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   WEEK PLAN COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useRef, useState} from 'react';
import {FlatList, SafeAreaView, Text, View, ScrollView} from 'react-native';

// IMPORT COMMON STYLES
import {theme} from '../../common';
import styles from './special_order.style';
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts, Svgs} from '../../utils';

// IMPORT COMMON COMPONENTS
import CommonHeader from '../../common/header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PlanSelectionView from '../../common/plan.selectionview';
import SelectFoodItem from '../../common/selectfood.item';
import InputWithLable from '../../common/inputwithlable';
import {PrimaryButton} from '../../common/primary.button';
import Button from '../../common/comButton';
import PeriodList from './period.list';
import RBSheet from "react-native-raw-bottom-sheet";
import DatePicker from "react-native-date-picker";

// IMPORT ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarIcon from '../../assets/svg/calendar.svg';

import {weekplan} from '../../data';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT STACK FILE.
const WeekPlan = (props: Props) =>
{
    const scrollView = useRef<any>();
    const sheetRef = useRef<any>();
    const [numOfPersons, setNumOfPersons] = useState<string>('')
    const [visibleSheet, setVisibleSheet] = useState<string>('')
    const [selectedFrom, setSelectedFrom] = useState<string>('')
    const [isStartDate, setStartDate] = useState<boolean>(false)
    const [time, setTime] = useState<any>()
    const [date, setDate] = useState<any>()
    const [periodList, setPeriodList] = useState([
        {
            id: '0',
            type: '1 week',
            selected: false
        },
        {
            id: '1',
            type: '2 weeks',
            selected: false
        },
        {
            id: '2',
            type: '3 weeks',
            selected: false
        },
        {
            id: '3',
            type: '4 weeks',
            selected: false
        },
        {
            id: '4',
            type: '5 weeks',
            selected: false
        },
        {
            id: '5',
            type: '6 weeks',
            selected: false
        },
        {
            id: '6',
            type: '7 weeks',
            selected: false
        },
        {
            id: '7',
            type: '8 weeks',
            selected: false
        },
        {
            id: '8',
            type: '9 weeks',
            selected: false
        },
        {
            id: '9',
            type: '10 weeks',
            selected: false
        }
    ])

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: visibleSheet != '' ? 'rgba(0,0,0,0.9)' : 'white'}}>
        <View style={{opacity: visibleSheet != '' ? 0.3 : 1}}>
            <CommonHeader
                title={'Special company order'}
                backgroundColor={theme.colors.white}
                iconColor={theme.colors.darkGrey}
                allowTextWrap={true}
                hideIcon={false}
                rightAction=
                {
                    <AntDesign name={'questioncircle'} color={theme.colors.darkGrey} size={26} />
                }
            />
            <ScrollView contentContainerStyle={{paddingBottom:'15%'}}>

                <SelectFoodItem
                    label='Monday'
                    data={weekplan}
                    navigation={props.navigation}
                />

                <SelectFoodItem
                    label='Tuesday'
                    data={weekplan}
                    navigation={props.navigation}
                />

                <SelectFoodItem
                    label='Wednesday'
                    data={weekplan}
                    navigation={props.navigation}
                />

                <SelectFoodItem
                    label='Thursday'
                    data={weekplan}
                    navigation={props.navigation}
                />

                <SelectFoodItem
                    label='Friday'
                    data={weekplan}
                    navigation={props.navigation}
                />

                <SelectFoodItem
                    label='Saturday'
                    data={weekplan}
                    navigation={props.navigation}
                />

                <SelectFoodItem
                    label='Sunday'
                    data={weekplan}
                    navigation={props.navigation}
                />

                <View style={[styles.margin, styles.alignCenter]}>
                    <InputWithLable
                        label={'Number of persons'}
                        value={numOfPersons}
                        setValue={setNumOfPersons}
                        width={windowWidth * 0.92}
                    />

                    <View style={[styles.row, styles.spacebtw, styles.vertical5]}>
                        <PrimaryButton
                            backgroundColor={theme.colors.bgColor}
                            onPress={()=> setVisibleSheet('showPeriodList')}
                            height={50}
                            width={windowWidth * 0.45}
                            text={'Period'}
                            borderRadius={10}
                            icon={<CalendarIcon height={24} width={24} />}
                            fontSize={actuatedNormalize(17)}
                            style={styles.alignCenter}
                        />
                        <PrimaryButton
                            backgroundColor={theme.colors.bgColor}
                            onPress={null}
                            height={50}
                            width={windowWidth * 0.45}
                            text={'Time'}
                            borderRadius={10}
                            icon={<MaterialCommunityIcons name="clock" size={26} />}
                            fontSize={actuatedNormalize(17)}
                            style={styles.alignCenter}
                        />
                    </View>


                </View>

                <Button title={'Set the start date of delivery'} style={{width: '92%', backgroundColor: theme.colors.bgColor, marginTop: '-5%'}} />

                <View style={[styles.cartButton, styles.top5]}>
                    <Text style={styles.cartButtonText}>{`Create company order`}</Text>
                    <Text style={{...styles.cartButtonText, fontFamily: Fonts.Medium}}>{`$ 152.21`}</Text>
                </View>

                {/* <RBSheet
                                ref={sheetRef}
                                height={400}
                                openDuration={250}
                                customStyles={{container: {borderTopRightRadius: 30, borderTopLeftRadius: 30, paddingHorizontal: 20}}}
                            >
                                <View style={{paddingBottom: 20, paddingTop: 40}}>
                                    <Text>
                                        {"Set delivery time"}
                                    </Text>
                                    <Text>
                                        {"From"}
                                    </Text>

                                    <View style={styles.alignCenter}>
                                        {
                                            !selectedFrom &&
                                            <DatePicker
                                                date={time}
                                                mode={"time"}
                                                is24hourSource={"locale"}
                                                minimumDate={new Date()}
                                                maximumDate={new Date("2030-12-30")}
                                                onDateChange={(d) => setTime(d)}
                                            />
                                        }

                                        {
                                            selectedFrom &&
                                            <DatePicker
                                                date={date}
                                                mode={"date"}
                                                // minimumDate={fromDate}
                                                maximumDate={new Date("2030-12-30")}
                                                onDateChange={(da) => setDate(da)}
                                            />
                                        }
                                    </View>
                                </View>

                              
                            </RBSheet> */}

            </ScrollView>
            </View>
            {visibleSheet == 'showPeriodList' &&
                <PeriodList
                    list={periodList}
                    onClosePress={() => setVisibleSheet('')}
                    snapPoints={['30%', '50%', '50%']}
                    overScroll={false}
                />
            }
        </SafeAreaView>
    )
}

export default WeekPlan;
