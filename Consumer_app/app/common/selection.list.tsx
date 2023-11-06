import React,{useState} from 'react'
import {Alert, StyleSheet, Text, View} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import {theme} from '.'
import {actuatedNormalize, Fonts} from '../utils'

interface Props
{
    list: Array<any>
}

const SelectionList = (props: Props) =>
{
    const {list} = props
    const [selected, setSelected] = useState<string>('')

    return (
        <View>
            {list.map((item: any) =>
            {
                const {id, value} = item
                // console.warn(item)
                return (
                    <View key={id}>
                    <TouchableOpacity onPress={()=> setSelected(value)}>
                        <View style={styles.container}>
                            <Text style={styles.text}>{value}</Text>
                            <View style={styles.dotView}>
                                <View style={{...styles.dot, backgroundColor: selected == value ? theme.colors.active : theme.colors.white}} />
                            </View>
                        </View>
                    </TouchableOpacity>
                      </View>
                )
            }
            )}
        </View>
    )
}

export default SelectionList;

const styles = StyleSheet.create
    ({
        container:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginHorizontal: '5%',
            marginTop: '5%'
        },
        dotView:
        {
            height: actuatedNormalize(25),
            width: actuatedNormalize(25),
            borderRadius: actuatedNormalize(12.5),
            borderWidth: 2,
            borderColor: theme.colors.active,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        dot:
        {
            height: actuatedNormalize(12.5),
            width: actuatedNormalize(12.5),
            borderRadius: actuatedNormalize(6.25),
        },
        text:
        {
            fontSize: actuatedNormalize(16),
            fontFamily: Fonts.Regular,
            color: theme.colors.lightBlack
        }
    })
