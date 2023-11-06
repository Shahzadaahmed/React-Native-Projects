/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   REVIEW COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, { useState } from 'react';
import FilledStar from '../assets/svg/filledStar.svg';
import UnFilledStar from '../assets/svg/unFilledStar.svg';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

interface Props
{
  size: any,
  rating: any,
  editable: boolean
}
const Rating = (props: Props) => {
  const {size, rating, editable} = props
  // TO SET THE DEFAULT STAR SELECTED
  const [defaultRating, setDefaultRating] = useState(rating);
  // TO SET THE MAX NUMBER OF STARS
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableWithoutFeedback
              activeOpacity={0.7}
              key={item}
              onPress={editable ? () => setDefaultRating(item): null}>
              {
                  item <= defaultRating
                    ? <FilledStar height={size} width={size}/> 
                    : <UnFilledStar height={size} width={size}/>
                }
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  };


export default Rating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  customRatingBarStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    // marginVertical: 10,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});
