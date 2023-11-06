import React from 'react'
import {Text, View} from 'react-native'
import ScrollableView from '../../common/scrollable.sheet'
import styles from './restaurant.style'

interface Props
{
    list: Array<any>,
    onClosePress: any,
    snapPoints: Array<any>,
    overScroll: boolean
}
const IngredientsList = (props: Props) =>
{
    const {list, onClosePress, snapPoints, overScroll} = props
    return (
        <ScrollableView
            snapPoints={snapPoints}
            overScroll={overScroll}
            onClosePress={onClosePress}
            children=
            {
                <>
                    <Text style={styles.headingText}>{'Ingredients'}</Text>
                    <View style={[styles.horizontal15, styles.marginVertical]}>
                        {list.map((item, index) =>
                        {
                            const {name, weight} = item
                            return (
                                <View style={[styles.row, styles.spacebtw]} key={index}>
                                    <Text style={styles.subTitleText}>{name}</Text>
                                    <Text style={styles.gridText}>{weight}</Text>
                                </View>
                            )
                        })}
                    </View>
                </>
            }
        />
    )
}

export default IngredientsList;