/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   Charity COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React,{useState} from 'react'
import { ImageBackground, FlatList, Text, View, TouchableWithoutFeedback } from 'react-native'
import Images from '../../common/Images';
import { actuatedNormalize, Fonts, Svgs } from '../../utils';
import styles from './charity.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../../common';
import { ScrollView } from 'react-native-gesture-handler';
import SubscriptionView from './charity.subscription.view';
import CategoryView from './charity.category.view';
import PressableIcon from '../../common/pressable.icon';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props 
{
    navigation: any,
    route: any
}

    // START THE MAIN FUNCTION THAT WILL BE IMPORTED IN HOME STACK FILE.
    const Charity = (props: Props) => 
    {
        const {detail} = props.route.params
        const {title, description, askQuestion, subscriptions, categories, placesList} = detail
        const [type, setType] = useState('')

        // RENDER FUNCTION FOR CATEGORIES LIST
        const renderItem = ({item}:any) => 
        {
            const {name} = item
           return(
            <TouchableWithoutFeedback onPress={()=> setType(name)}>
              <View style={{...styles.categoryView,backgroundColor: type == name ? theme.colors.bgColor : theme.colors.white}}>
                  <Text style={{...styles.subText,color:type == name ? theme.colors.active : theme.colors.darkGrey, fontFamily: type == name ? Fonts.SemiBold : Fonts.Regular}}>{name}</Text>
             </View>
             </TouchableWithoutFeedback>
           ) 
        }
    //MAIN VIEW FOR CHARITY PAGE
    return (
        <View style={styles.container}>
            <ScrollView>
            <ImageBackground source={Images.CharityBG} style={styles.imageView}>
                <View style={{...styles.row,justifyContent:'space-between',marginTop:'12%'}}>
                <PressableIcon
                icon={<Ionicons name={'arrow-back'} color={theme.colors.darkGrey} size={28} />}
                onPress={()=> props.navigation.goBack()}
                style={null}
                />
                <PressableIcon
                icon={<Feather name={'search'} color={theme.colors.darkGrey} size={28} />}
                onPress={()=> props.navigation.goBack()}
                style={null}
                />
                </View>
            </ImageBackground>
            <View style={styles.mainView}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.subText}>{description}</Text>
                <View style={styles.buttonView}>
                    <Text style={styles.text}>{askQuestion}</Text>
                </View>
                <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={subscriptions}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=> <SubscriptionView title={item.title} description={item.description}/>}/>
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginVertical: '5%'}}
                data={categories}
                keyExtractor={(item)=> item.id}
                renderItem={renderItem}
                />
                {placesList.map((item:any)=>
                <View key={item.id}>
                <CategoryView 
                icon={item.icon}
                title={item.title}
                description={item.description}
                type={item.type}
                onPress={() => props.navigation.navigate('Vendors', {detail:item,charityDetail:detail})}    
                />
                </View>
                )}
            </View>
            </ScrollView>
        </View>
    )
}

export default Charity;
