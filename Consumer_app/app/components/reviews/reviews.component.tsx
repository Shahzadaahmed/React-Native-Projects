/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   REVIEW PAGE SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState, useRef} from "react";
import {FlatList, Text, View, TouchableOpacity, Animated} from 'react-native'
// IMPORT COMMON STYLING
import {theme} from '../../common';
import {windowHeight, windowWidth} from "../../common/Constants";
import styles from './reviews.style';
import {actuatedNormalize, Fonts, Svgs} from "../../utils";
// IMPORT COMPONENTS
import RBSheet from "react-native-raw-bottom-sheet";
import Rating from "../../common/comRating";
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {ProgressBar} from 'react-native-paper';
import UserReview from "./userReview.view";
import ExpertReview from "./expertReview.view";
import SelectionList from "../../common/selection.list";
import Handle from "../../common/handle.picker";
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
// IMPORT ICON
import Ionicons from 'react-native-vector-icons/Ionicons';
// IMPORT STATIC DATA
import {expertReview, stats, userReviews} from "../../data";
import MenuTabs from "../../common/menu.tabs";

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
  sheetRef: any,
  navigation: any,
  onClosePress: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const Review = (props: Props) =>
{
  const {sheetRef, navigation, onClosePress} = props
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const tabs: Array<string> = ['User Reviews', 'Expert Reviews'];
  const [activeTab, setActiveTab] = useState<any>(tabs[0]);
  const [sortBy, setSortBy] = useState<any>([
    {
      id: '0',
      value: 'Recent'
    },
    {
      id: '1',
      value: 'Helpful'
    },
    {
      id: '2',
      value: 'Critical'
    },
    {
      id: '3',
      value: 'Favourites'
    }
  ])
  const [sortByValue, setSortByValue] = useState<string>('')
  const sortSheet = useRef<any>()
  const renderItem = ({item, index}: any) => 
  {
    const {text, percentage} = item
    return (
      <View style={styles.statsView}>
        <View style={styles.statsPercentView}>
          <Text style={{...styles.statsPerctentText, color: percentage < '70%' ? theme.colors.secondary : theme.colors.active}}>
            {percentage}
          </Text>
        </View>
        <Text style={styles.statsText}>{text}</Text>
      </View>
    )
  }

  return (
    <>
      <ScrollBottomSheet // If you are using TS, that'll infer the renderItem `item` type
        componentType="FlatList"
        snapPoints={[actuatedNormalize(100), '30%', '30%']}
        initialSnapIndex={0}
        enableOverScroll={true}
        style={{backgroundColor: theme.colors.white, zIndex: 1}}
        renderHandle={() => (<Handle onPress={onClosePress} />)}
        ListHeaderComponent={() => (
          <View >
            <View style={{marginBottom: '20%'}}>
              <Text style={styles.headingText}>{'Rate & Review'}</Text>
            </View>

            <View style={{backgroundColor: theme.colors.bgColor, borderRadius: 15, paddingVertical: 10}}>
              <View style={styles.ring}>
                <Text style={styles.headingText}>{'4.5'}</Text>
                <Text style={styles.subText}>{'out of 5'}</Text>
              </View>
              <View style={styles.rating}>
                <Rating
                  size={actuatedNormalize(20)}
                  rating={5}
                  editable={false}
                />
              </View>
              <View style={styles.progressBarView}>
                <Text style={styles.smallText}>{'Excellent'}</Text>
                <View style={styles.progressBarWidth}>
                  <ProgressBar progress={0.75} color={theme.colors.active} style={styles.progressBar} />
                </View>
              </View>
              <View style={styles.progressBarView}>
                <Text style={styles.smallText}>{'Well'}</Text>
                <View style={styles.progressBarWidth}>
                  <ProgressBar progress={0.6} color={theme.colors.active} style={styles.progressBar} />
                </View>
              </View>
              <View style={styles.progressBarView}>
                <Text style={styles.smallText}>{'Fine'}</Text>
                <View style={styles.progressBarWidth}>
                  <ProgressBar progress={0.45} color={theme.colors.active} style={styles.progressBar} />
                </View>
              </View>
              <View style={styles.progressBarView}>
                <Text style={styles.smallText}>{'Poorly'}</Text>
                <View style={styles.progressBarWidth}>
                  <ProgressBar progress={0.3} color={theme.colors.active} style={styles.progressBar} />
                </View>
              </View>
              <View style={styles.progressBarView}>
                <Text style={styles.smallText}>{'Terrible'}</Text>
                <View style={styles.progressBarWidth}>
                  <ProgressBar progress={0.15} color={theme.colors.active} style={styles.progressBar} />
                </View>
              </View>
            </View>

            <FlatList
              data={stats}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              contentContainerStyle={{marginVertical: '5%'}}
              showsHorizontalScrollIndicator={false}
            />

            <View style={[styles.row, styles.horizontal15, {justifyContent: 'space-between'}]}>
              <TouchableOpacity onPress={() => sortSheet.current.open()}>
                <View style={styles.row}>
                  <Text style={styles.subHeadingText}>{'Sort by Most Recent'}</Text>
                  <Ionicons
                    name={"chevron-down"}
                    size={actuatedNormalize(24)}
                    color={theme.colors.active}
                    style={{marginLeft: 5}}
                  // onPress={() => setShowIngredients(!showIngredients)}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.subHeadingText}>{'33'}</Text>
            </View>

            {/* SEGMENTED CONTROL VIEW */}
            <View style={styles.menuTabs}><MenuTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} /></View>

          </View>
        )}

        data={selectedIndex == 0 ? userReviews : expertReview}
        keyExtractor={(item) => item.id}
        renderItem={({item}: any) =>
        {
          return (
            selectedIndex == 0 ?
              <UserReview
                name={item.name}
                image={item.image}
                time={item.time}
                rating={item.rating}
                description={item.description}
              // onPress={() => navigation.navigate('HostPage', {item: item})}
              />
              :
              <ExpertReview
                name={item.name}
                video={item.video}
                time={item.time}
                rating={item.rating}
                videoDuration={item.videoDuration}
              />
          )
        }
        }
      // contentContainerStyle={styles.contentContainerStyle}
      />

      <RBSheet
        ref={sortSheet}
        openDuration={250}
        customStyles={{
          container: {
            height: 300,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40
          },
          wrapper: {
            backgroundColor: "transparent"
          }
        }}
        closeOnDragDown={true}
      // onClose={onClose}
      >

        <Text style={styles.headingText}>{'Sort by'}</Text>
        <View style={{paddingHorizontal: '5%', position: 'absolute', bottom: '20%', width: windowWidth}}>
          <SelectionList
            list={sortBy}
          />
        </View>
      </RBSheet>
    </>
  )
}

export default Review;
