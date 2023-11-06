import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '.';

interface Props
{
    onPress: any
}
const Handle = (props: Props) =>
{
    return (
        <>
            <AntDesign
                name={'closecircle'}
                size={40}
                color={theme.colors.bgColor}
                onPress={props.onPress}
                style={styles.closeButton}
            />
            <View style={styles.header}>
                <View style={styles.panelHandle} />
            </View>
        </>
    )
}

export default Handle;

const styles = StyleSheet.create
({
    panelHandle:
    {
        height: 5,
        width: 40,
        borderRadius: 20,
        backgroundColor: theme.colors.borderColor,
        alignSelf: 'center',
        position: 'absolute',
        top: 10
        // marginTop: -20
    },
    header:
    {
        backgroundColor: 'white',
        padding: 40,
        paddingBottom: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    closeButton: 
    {
        alignSelf: 'flex-end',
        marginRight: 5,
        position: 'absolute',
        top: -50,
        right: 5
    }
})
