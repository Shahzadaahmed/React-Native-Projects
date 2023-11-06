import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScrollableView from '../../common/scrollable.sheet';
import styles from './restaurant.style'
interface Props
{
    list: Array<string>,
    onClosePress: any,
    snapPoints: Array<any>
    overScroll: boolean
}

const AreasList = (props: Props) =>
{
    const {list, onClosePress, snapPoints, overScroll} = props 
    return (
        <ScrollableView
        onClosePress={onClosePress}
        snapPoints={snapPoints}
        overScroll={overScroll}
        children={
            <>
            <Text style={styles.headingText}>{'Delivery'}</Text>
            <View style={styles.horizontal15}>
            <Text style={styles.subText}>
                {'After your food is read, delivery is carried out within 30 minutes in different areas of the city'}
            </Text>
            <Text style={styles.subHeadingText}>{'Delivery Areas'}</Text>
            {list.map((item,index) => 
                {
                    return(
                        <View key={index} style={styles.row}>
                            <View style={styles.dot}/>
                            <Text style={styles.subTextBottomSheet}>{item}</Text>
                        </View>

                    )
                })}
            </View>
            </>
        }
        />
    )
}

export default AreasList;