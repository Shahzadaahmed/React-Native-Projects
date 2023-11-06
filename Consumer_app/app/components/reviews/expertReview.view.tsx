/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   EXPERT REVIEW COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react';
import {Image, Text, View} from 'react-native';
import {theme} from '../../common';
import Rating from '../../common/comRating';
import {actuatedNormalize, Fonts} from '../../utils';
import styles from './reviews.style';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    video?: string,
    name: string,
    rating: any,
    time: any,
    videoDuration: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const ExpertReview = (props: Props) =>
{
    const {video, name, rating, time, videoDuration} = props
    return (
        <View style={styles.userReviewComponent}>
            <Image source={{uri: video}} style={styles.userVideo}
                borderRadius={10} />
            <Text style={styles.videoDurationText}>
                {videoDuration}
            </Text>
            <Text style={{...styles.subHeadingText, marginBottom: 5, fontFamily: Fonts.Medium}}>
                {name}
            </Text>
            <View style={styles.row}>
                <Rating
                    size={actuatedNormalize(19)}
                    rating={rating}
                    editable={false}
                />
                <Text style={{...styles.subText}}>{`  .  ${time}`}</Text>
            </View>
        </View>
    )
}

export default ExpertReview;