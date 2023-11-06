import React from 'react'
import {Text, View, Image} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {theme} from '../../common'
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './search.style'
import {windowWidth} from '../../common/Constants';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT
interface Props
{
    name: String,
    type: String,
    onPress: any,
    image: string,
    rating?: any,
    distance?: any,
    price?: any
}

const SearchItem = (props: Props) =>
{
    const {name, type, image, rating, distance, price} = props
    return (
        <TouchableOpacity onPress={() => props.onPress()}>
            <View style={styles.itemContainer}>
                <Image source={{uri: image}} style={styles.itemImage} />

                <View style={{marginLeft: 15}}>
                    <Text style={styles.text} numberOfLines={1}>{name}</Text>
                    <View style={[styles.row, styles.subView]}>
                        {price ?
                            <Text style={styles.subText}>{price}</Text>
                            :
                            <View style={{...styles.row, width: windowWidth * 0.15}}>
                                <AntDesign name={'star'} color={theme.colors.secondary} size={20} />
                                <Text style={styles.subText}>{rating}</Text>
                            </View>}
                            {distance ?
                            <>
                            <Text style={{...styles.subText, width: windowWidth * 0.4}}>{type}</Text>
                            <Text style={{...styles.subText, width: windowWidth * 0.25}}>{distance}</Text>
                            </>
                            :
                            <Text style={{...styles.subText, width: windowWidth * 0.7}}>{type}</Text>
                            }
                        </View>
                    <View style={styles.divider} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SearchItem;