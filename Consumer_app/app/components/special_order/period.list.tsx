/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   PERIOD LIST SHEET SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React,{useState} from 'react'
import {Text, View} from 'react-native'

// IMPORT COMMON STYLES
import {theme} from '../../common'
import styles from './special_order.style'
import {windowWidth} from '../../common/Constants'

// IMPORT COMMON COMPONENTS
import Button from '../../common/comButton'
import ScrollableView from '../../common/scrollable.sheet'
import SelectionView from '../../common/selection.view'

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    list: Array<any>,
    onClosePress: any,
    snapPoints: Array<any>,
    overScroll: boolean
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT STACK FILE.
const PeriodList = (props: Props) =>
{
    const {list, onClosePress, snapPoints, overScroll} = props
    const [selectedPeriod, setSelectedPeriod] = useState<string>('')
    return (
        <ScrollableView
            snapPoints={snapPoints}
            overScroll={overScroll}
            onClosePress={onClosePress}
            children=
            {
                <>
                    <Text style={styles.headingText}>{'Choose period'}</Text>
                    <View style={[styles.horizontal15, styles.marginVertical]}>
                    {list.map((item: any, index: any) =>
                    {
                        return (
                            <View key={index}>
                                <SelectionView
                                    value={item.type}
                                    onPress={() => setSelectedPeriod(item.type)}
                                    selected={selectedPeriod == item.type ? true : false}
                                />
                            </View>
                        )
                    })}
                        <View style={{marginTop:'10%'}}>
                <Button title={'Confirm'} style={{width: '100%', backgroundColor: theme.colors.secondary, marginTop: '-5%'}} onPress={onClosePress}/>
                </View>
                </View>
                </>
                
            }
        />
    )
}

export default PeriodList;