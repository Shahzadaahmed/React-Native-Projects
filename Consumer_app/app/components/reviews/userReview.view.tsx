/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   USER REVIEW COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react';
import { Image, Text, View } from 'react-native';
import {theme} from '../../common';
import Rating from '../../common/comRating';
import {actuatedNormalize, Fonts} from '../../utils';
import styles from './reviews.style';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    image: string,
    name: string,
    rating: any,
    time: any,
    description: string
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const UserReview = (props: Props) =>
 {
     const {image, name, rating, time, description} = props
    return (
        <View style={styles.userReviewComponent}>
            <View style={styles.row}>
                <Image source={{uri: image}} style={styles.userImage}/>
               <View style={{...styles.horizontal15}}>
                <Text style={{...styles.subHeadingText,marginBottom: 5,fontFamily: Fonts.Medium}}>
                    {name}
                </Text>

                <Rating
                size={actuatedNormalize(19)}
                rating={rating}
                editable={false}
                />
                </View>
            </View>
            <Text style={styles.timeText}>{time}</Text>
            <Text style={{...styles.subText,color: theme.colors.black,marginTop:10}}>{description}</Text>
        </View>
    )
}

export default UserReview;