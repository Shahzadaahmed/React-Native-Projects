/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   BOTTOM SHEET SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState, useRef} from 'react'
import {FlatList, Text, TextInput, TouchableWithoutFeedback, View, KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native'
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import {theme} from '../../common';
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import Handle from '../../common/handle.picker';
import InputWithLable from '../../common/inputwithlable';
import PressableIcon from '../../common/pressable.icon';
import styles from './location.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {savedAddress} from '../../data';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BottomSheet from '../bottomsheets/bottomSheet.component';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    onClose: any,
    address: string,
    inputView: any,
    showAddressPopup: any,
    sheetRef: any,
    sheetRef2: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FUNCTION.
const BottomView = (props: Props) =>
{
    const {onClose, inputView, showAddressPopup, sheetRef, sheetRef2} = props
    const [value, setValue] = useState<string>('')
    const [building, setBuilding] = useState<string>('')
    const [flat, setFlat] = useState<string>('')
    const [landmark, setLandmark] = useState<string>('')
    const [showAddressTypes, setShowAddressTypes] = useState<boolean>(false)
    const [addressType, setAddressType] = useState<string>('')
    const [favValue, setFavValue] = useState('')

    const renderItem = ({item}: any) => 
    {
        return (
            <TouchableWithoutFeedback
                onPress={
                    showAddressPopup
                }>
                <View style={{...styles.addressTypeView, backgroundColor: addressType == item.name ? theme.colors.bgColor : theme.colors.white}}>
                    {
                        item.name == 'Home' ?
                            <AntDesign name={item.icon} color={theme.colors.lightBlack} size={18} />
                            :
                            <Ionicons name={item.icon} color={theme.colors.lightBlack} size={18} />
                    }
                    <Text style={styles.subText}>{item.name}</Text>

                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <>
            <RBSheet
                ref={sheetRef}
                openDuration={250}
                customStyles={{
                    container: {
                        height: windowHeight * 0.6,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    },
                    wrapper: {
                        backgroundColor: theme.colors.transparent
                    }
                }}
                closeOnDragDown={false}
                onClose={onClose}
            >
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.bottomSheet}>
                        <View style={styles.dragSign} />
                        <View style={{marginHorizontal: 10}}>
                            <Text style={styles.headingText}>{'Delivery Address'}</Text>

                            <View style={styles.inputView}>
                                <EvilIcons name="location" size={32} color={theme.colors.darkGrey} style={{position: 'absolute', left: 5, top: 12}} />
                                {inputView}
                            </View>
                            <View style={[styles.row, styles.space, styles.marginVertical]}>
                                <InputWithLable
                                    label={'Building number'}
                                    value={building}
                                    setValue={setBuilding}
                                    width={windowWidth * 0.435}
                                />
                                <InputWithLable
                                    label={'Flat number'}
                                    value={flat}
                                    setValue={setFlat}
                                    width={windowWidth * 0.435}
                                />
                            </View>

                            <InputWithLable
                                label={'Flat number'}
                                value={landmark}
                                setValue={setLandmark}
                                width={windowWidth * 0.92}
                            />

                            <View style={styles.bottomView}>
                                <TouchableWithoutFeedback onPress={() => setShowAddressTypes(true)}>
                                    <View style={{...styles.buttonView, display: showAddressTypes ? 'none' : 'flex'}}>
                                        <Text style={styles.buttonText}>{'Add Address'}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <View style={{...styles.row, display: showAddressTypes ? 'flex' : 'none'}}>
                                    <PressableIcon
                                        icon={<AntDesign name={'plus'} size={30} color={theme.colors.black} />}
                                        onPress={null}
                                        style={null}
                                    />
                                    <FlatList
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{marginVertical: '5%'}}
                                        data={savedAddress}
                                        keyExtractor={(item) => item.id}
                                        renderItem={renderItem}
                                    />
                                </View>
                                <View style={{...styles.buttonView, backgroundColor: theme.colors.secondary}}>
                                    <Text style={styles.buttonText}>{'Done'}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>


            </RBSheet>


            <BottomSheet
                sheetRef={sheetRef2}
                height={windowHeight * 0.35}
                onClose={() => console.log('')}
                children={
                    (
                        <ScrollView>
                            <View style={styles.favSheet}>
                                <View style={styles.dragSign} />
                                <Text style={styles.headingText}>{'Adding an address to favorites'}</Text>
                                <InputWithLable
                                    label={'Name'}
                                    value={favValue}
                                    setValue={setFavValue}
                                    width={windowWidth * 0.92}
                                />
                                <View style={{...styles.buttonView, backgroundColor: theme.colors.secondary}}>
                                    <Text style={styles.buttonText}>{'Done'}</Text>
                                </View>
                            </View>
                        </ScrollView>
                    )
                }
                navigation={null}

            />
        </>

    )
}

export default BottomView;
