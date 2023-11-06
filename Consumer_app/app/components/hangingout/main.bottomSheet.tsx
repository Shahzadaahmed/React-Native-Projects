/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   BOTTOM SHEET SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState, useRef, useMemo} from "react";
import {Alert, FlatList, TouchableWithoutFeedback, Text, TextInput, View, SafeAreaView} from 'react-native'
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
// IMPORT COMMON STYLING
import {theme} from '../../common';
import {ASPECT_RATIO, windowHeight} from "../../common/Constants";
import styles from './hangingout.style';
import {actuatedNormalize, Fonts, Svgs} from "../../utils";
// IMPORT COMPONENTS
import {CommonSlider} from "../../common/commonSlider";
import {HangoutListItem} from "../../common/hangout.listItem";
import Filter from "../filter/filter.component";
// IMPORT ICONS
import PressableIcon from "../../common/pressable.icon";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// IMPORT STATIC DATA
import {banners, hangoutBanners, hangoutRestaurantsList, markers, restaurantCategories, restaurantsList} from "../../data";

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
  sheetRef: any,
  snapPoints: any,
  navigation: any,
  showFilter: any,
  closeFilter: any,
  filter: boolean
  //    handleSheetChange: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FUNCTION.
const BottomView = (props: Props) =>
{
  const {sheetRef, snapPoints, navigation, showFilter, closeFilter, filter} = props
  const [type, setType] = useState<string>('All')
  const [sheetVisible, setSheetVisible] = useState<string>('')

  // RENDER FUNCTION FOR CATEGORIES LIST
  const renderItem = ({item}: any) => 
  {
    const {name} = item
    return (
      <TouchableWithoutFeedback onPress={() => setType(name)}>
        <View style={{...styles.categoryView, backgroundColor: type == name ? theme.colors.bgColor : theme.colors.white}}>
          <Text style={{...styles.subTextBottomSheet, color: type == name ? theme.colors.active : theme.colors.darkGrey, fontFamily: type == name ? Fonts.SemiBold : Fonts.Regular}}>{name}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }


  return (
    <>
      <ScrollBottomSheet // IF YOU ARE USING TS, THAT'LL INFER THE RENDER_ITEM `ITEM` TYPE
        componentType="FlatList"
        snapPoints={[actuatedNormalize(100), '30%', windowHeight - 81]}
        initialSnapIndex={2}
        style={{backgroundColor: theme.colors.white, zIndex: 1}}
        renderHandle={() => (
          <View style={styles.header}>
            <View style={styles.panelHandle} />
          </View>
        )}
        ListHeaderComponent={() => (
          <View >
            <View style={{...styles.row, marginBottom: '5%'}}>
              <Text style={styles.headingText}>{'Hanging Out'}</Text>
              <MaterialIcons name={'info'} color={theme.colors.lightGray} size={26} />
            </View>

            <CommonSlider
              height={ASPECT_RATIO * windowHeight / 4}
              data={hangoutBanners}
              style={{marginHorizontal: 15}}
            />

            <View style={{...styles.row, marginLeft: 15, marginTop: 10}}>
              <PressableIcon
                icon={<Svgs.FilterIcon height={24} width={24} />}
                onPress={showFilter}
                style={null}
              />
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{marginVertical: '5%'}}
                data={restaurantCategories}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
              />
            </View>
          </View>
        )}
        data={hangoutRestaurantsList}
        keyExtractor={(item) => item.id}
        renderItem={({item}: any) => (
          <HangoutListItem
            name={item.name}
            image={item.image}
            timing={item.timing}
            pricing={item.pricing}
            rating={item.rating}
            distance={item.distance}
            onPress={() => navigation.navigate('HostPage', {item: item})}
          />
        )}
      // contentContainerStyle={styles.contentContainerStyle}
      />
      {filter &&
        <Filter
          goTo="hostFilter"
          onClosePress={closeFilter}
          snapPoints={[actuatedNormalize(100), '25%', '30%']}
          overScroll={false}
        />
      }
    </>
  )
}

export default BottomView;
