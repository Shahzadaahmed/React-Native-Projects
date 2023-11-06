import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'
import {theme} from '.'
import {actuatedNormalize, Fonts} from '../utils'
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props
{
    label: string,
    value: string,
    setValue: any,
    width: any
}
const InputWithLable = (props: Props) =>
{
    const {label, value, setValue, width} = props
    const [clear, setClear] = useState<boolean>(false)
    let ref: any = ''

    const setField = (value: any) =>
    {
        setValue(value)
        if (value.length > 0)
        {
            setClear(true)
        } else
        {
            setClear(false)
        }
    }

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={{...styles.inputView, width: width}}>
                <TextInput
                    ref={input => ref = input}
                    style={{...styles.input, width: width - 35}}
                    value={value}
                    onChangeText={(text) => setField(text)}
                />
                <Ionicons name="close-circle" size={20} color={theme.colors.borderColor} style={{display: clear ? 'flex' : 'none'}}
                    onPress={() =>
                    {
                        ref.clear()
                        setClear(false)
                    }} />
            </View>
        </View>
    )
}

export default InputWithLable;

const styles = StyleSheet.create({
    label:
    {
        fontSize: actuatedNormalize(16),
        color: theme.colors.darkGrey,
        fontFamily: Fonts.Regular
    },
    input:
    {
        // paddingHorizontal: 10,
        color: theme.colors.lightBlack,
        fontFamily: Fonts.Regular,
        fontSize: actuatedNormalize(16)
    },
    inputView:
    {
        paddingVertical: 15,
        backgroundColor: theme.colors.bgColor,
        borderRadius: 10,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})
