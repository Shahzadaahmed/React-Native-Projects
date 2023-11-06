/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   NOTIFICATION COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React,{useState} from 'react'
import { Alert, SafeAreaView, SectionList, Text, View } from 'react-native'
import { actuatedNormalize, Fonts, Svgs } from '../../utils';
import { Header } from './notification.header';
import { NotificationItem } from './notification.item';
import styles from './notification.style';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { theme } from '../../common';
import { notificationList } from '../../data';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props 
{
    navigation: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN HOME STACK FILE.
 const Notification = (props: Props) => 
 {
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            {/* HEADER VIEW */}
            <Header
            title={'Notification'}
            rightIcon={<Svgs.BinIcon height={24} width={24}/>}
            rightAction={()=>Alert.alert('pressed')}
            leftAction={()=>props.navigation.goBack()}
            />
            <View>
            {/* SEGMENTED CONTROL VIEW */}
            <SegmentedControl
            values={['General', 'Orders']}
            selectedIndex={selectedIndex}
            onChange={(event: any) => 
            {
            setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
            }}
            style={styles.segmentedControl}
            tintColor={theme.colors.white}
            backgroundColor={theme.colors.bgColor}
            activeFontStyle={{color:theme.colors.lightBlack,fontFamily: Fonts.Medium}}
            fontStyle={{color:theme.colors.darkGrey,fontFamily: Fonts.Regular}}
            />
            {/* SECTION LIST */}
           <SectionList
            contentContainerStyle={{paddingBottom: '30%'}}
            sections={notificationList}
            keyExtractor =
            {(item, index) => item.id}
            renderItem =
            {({ item }) => 
            <NotificationItem 
            avatar={item.avatar}
            order={item.order}
            status={item.status}
            duration={item.duration}
            />
            }
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
            />
            </View>
        </SafeAreaView>
    )
}

export default Notification;

