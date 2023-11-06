/*
   AUTHOR:   Qasim Zubair
  SUMMARY:   HOME COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState, useEffect} from 'react'
import {ImageBackground, SafeAreaView, TouchableWithoutFeedback, Text, View, ScrollView} from 'react-native'
import {theme} from '../../common';
import Images from '../../common/Images';
import {actuatedNormalize, Svgs} from '../../utils'
import styles from './home.style';
import Button from '../../common/comButton';
import {windowHeight} from '../../common/Constants';
import {ChildView} from './home.view';
import {charityDetail} from '../../data/index'
import {navigate} from '../../navigations/root.navigation';
import {requestUserLocationPermission} from '../../services/location.permission';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN APP.TSX FILE.
const Home = (props: Props) =>
{

    useEffect(() => {
        requestUserLocationPermission()
    }, [])
    const [screenHeight, setScreenHeight] = useState<any>();
    const on_content_size_change = (contentWidth: any, contentHeight: any) =>
    {
        // SAVE THE CONTENT HEIGHT IN STATE
        setScreenHeight(contentHeight);
    };
    const scrollEnabled = screenHeight + 70 > windowHeight;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{flex: 1}}
                scrollEnabled={scrollEnabled}
                onContentSizeChange={on_content_size_change}
            >
                <View style={{margin: '5%'}}>
                    <View style={{...styles.row, justifyContent: 'space-between'}}>
                        <Text style={styles.headingText}>{'Home'}</Text>
                        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('NotificationScreen')}>
                            <View style={styles.iconView}>
                                <View style={styles.badge} />
                                <Svgs.BellIcon height={26} width={26} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                   
                    <ImageBackground source={Images.HomeMainBG} style={styles.homeMainView}
                        resizeMode={'cover'} borderRadius={20}>
                        <Text style={styles.subText}>Delivery</Text>
                        <View style={{paddingHorizontal: '3%', paddingTop: 10}}>
                            <Svgs.BikeIcon height={40} width={40} />
                        </View>
                        <Text style={styles.subHeadingText}>Ordering food at {'\n'}a
                            <Text style={{...styles.subHeadingText, color: theme.colors.secondary}}>{' convenient'}</Text> place.</Text>
                        <Button title={'Order'} style={{width: '92%'}} onPress={() => props.navigation.navigate('RestaurantsScreen')} />
                    </ImageBackground>

                    <View style={{...styles.row, justifyContent: 'space-between'}}>
                        <ChildView
                            title={'Charity'}
                            icon={<Svgs.CharityIcon height={26} width={26} />}
                            text={'Help those in need with food.'}
                            onPress={() => props.navigation.navigate('CharityScreen', {detail: charityDetail})}
                        />
                          
                        <ChildView
                            title={'Hangout Out'}
                            icon={<Svgs.HangOutIcon height={26} width={26} />}
                            text={'Eat out, anywhere you select.'}
                            onPress={() => props.navigation.navigate('HangoutStack')}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
