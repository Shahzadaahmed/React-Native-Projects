import React,{useState} from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import CustomTextInput from '../../common/text.input';
import styles from './search.style';
import Fonts from '../../utils/fonts'
import MenuTabs from '../../common/menu.tabs';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {theme} from '../../common';
import SearchItem from './search.item';
import {suggestedVendors, suggestedDishes} from '../../data'

interface Props
{
    navigation: any
}
const Search = (props: Props) =>
{
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [search, setSearch] = useState<string>('')
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.header,styles.row]}>
            <CustomTextInput
                placeholderTitle={'Search'}
                placeholderTextColor={{fontFamily: Fonts.Regular}}
                value={search}
                onChange={setSearch}
                iconName={'search'}
                iconSize={22}
              />
            <Text style={styles.cancelButton} 
            onPress={()=> props.navigation.goBack()}>Cancel</Text>
            </View>
  {/* SEGMENTED CONTROL VIEW */}
  <SegmentedControl
            values={['Vendors', 'Dishes']}
            selectedIndex={selectedIndex}
            onChange={(event: any) => 
            {
            setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
            }}
            style={styles.segmentedControl}
            tintColor={theme.colors.white}
            backgroundColor={theme.colors.bgColor}
            activeFontStyle={{color:theme.colors.lightBlack,fontFamily: Fonts.Medium}}
            fontStyle={{color:theme.colors.darkGrey,fontFamily: Fonts.Regular}}
            />  

            <View style={styles.horizontal15}>
            <Text style={styles.headingText}>{'Popular'}</Text>
            <FlatList
            data={suggestedVendors}
            style={{display: selectedIndex == 0 ? 'flex': 'none'}}
            keyExtractor={(item)=> item.id}
            renderItem={({item,index}: any)=> {
                return(
                <SearchItem
                image={item.image}
                name={item.name}
                rating={item.rating}
                type={item.type}
                distance={item.distance}
                onPress={null}
                />
                )
            }}
            />
             <FlatList
            data={suggestedDishes}
            style={{display: selectedIndex == 1 ? 'flex': 'none'}}
            keyExtractor={(item)=> item.id}
            renderItem={({item,index}: any)=> {
                return(
                <SearchItem
                image={item.image}
                name={item.name}
                // rating={item.rating}
                type={item.type}
                onPress={null}
                price={item.price}
                />
                )
            }}
            />
            </View>
      </SafeAreaView>
    )
}

export default Search;
