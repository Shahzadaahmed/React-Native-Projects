/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   OFFERS COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React,{useState,useEffect,useRef} from 'react'
import { ImageBackground, Text, View, TouchableWithoutFeedback,TouchableOpacity,Image } from 'react-native'
import Images from '../../common/Images';
import { actuatedNormalize, Fonts, Svgs } from '../../utils';
import styles from './offerDetailStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../common';
import { ScrollView } from 'react-native-gesture-handler';
import PressableIcon from '../../common/pressable.icon';
import {charityCategoryList} from '../../data/index'
import { windowHeight, windowWidth } from '../../common/Constants';
import RBSheet from "react-native-raw-bottom-sheet";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MenuView from './offerMenuList.View'
import AntDesign from 'react-native-vector-icons/AntDesign';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../common/comButtonWithIcon'
import svgs from '../../utils/svgs';
import {banners, restaurantCategories, charityDetail, restaurantsList,restaurantOffers} from '../../data'
import bgImage from '../../../assets/icons'
import SubcriptionView from './subcriptionlist.View'
import normalize from 'react-native-normalize';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import icons from '../../../assets/icons';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props 
{
 navigation: any,
 route: any
 title:any
 discounts:any
 icon:any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN MORE STACK FILE.
const OfferDetails = (props: Props) => 
    {
        const [type, setType] = useState('')
        const [isList, setIsList] = useState(true)
        const {details} = props.route.params
        const {title, discount,icon} = details //DATA MANIPULATION
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
        // DESCRIPTION CARD ONE 
        const  RenderDescriptionCard = () =>
        {
            return(
                <View style={{flexDirection:"row",backgroundColor:theme.colors.bgColor,width:windowWidth*0.44,padding:10,borderRadius:16}}>
                <View style={{backgroundColor:theme.colors.white,padding:13,borderRadius:16}}>
                <svgs.hyegne_icon height={18} width={23}/>
                    </View>
                    <View style={{padding:10,}}>
                     <Text style={styles.textH1}>{"Hygiene"}</Text>
                    <View style={{top:5}}>
                    <Text style={styles.textH1}>{"Course"}</Text>
                    </View>
                        </View>
                </View>

            )
        }
        // DESCRIPTION CARD TOW
        const  RenderCardDescriptionTwo = () =>
        {
            return(
                <View style={{flexDirection:"row",backgroundColor:theme.colors.bgColor,width:windowWidth*0.42,padding:10,borderRadius:16}}>
                <View style={{backgroundColor:theme.colors.white,padding:13,borderRadius:16}}>
                <svgs.off_apple height={18} width={23}/>
                    </View>
                    <View style={{padding:10,}}>
                     <Text style={styles.textH1}>{"Ingredients"}</Text>
                    <View style={{top:5}}>
                    <Text style={styles.textH1}>{"Selction Course"}</Text>
                    </View>
                        </View>
                </View>

            )
        }
            //RENDER HEADER FUNCTION  FOR FLATLIST
            const RenderHeaderComponents = ()=>
            {
                return(
                    <><ImageBackground source={bgImage.pic_bg} style={styles.imageView}>
                        <View style={{...styles.row, justifyContent: 'space-between', marginTop: '13%'}}>
                            <PressableIcon icon={<Ionicons name={'arrow-back'} color={theme.colors.darkGrey} size={28} />}onPress={() => props.navigation.goBack()} />
                            </View>
                            </ImageBackground>
                            <View style={styles.mainView}>
                            <View style={{backgroundColor:"transparent",padding:25,}}>
                            <Text style={styles.titleText}>{title}</Text>
                            <View style={{padding:15,flexDirection:"row",backgroundColor:"transparent",justifyContent:"space-evenly",width:"75%",top:15,}}>
                            <Text style={styles.textH4}>Italian</Text>
                            <View style={styles.dotView1}>
                            </View>
                            <Text style={styles.textH4}>Seafood</Text>
                            <View style={styles.dotView1}>
                            </View>
                            <Text style={styles.textH4}>Turkish</Text>
                             </View>
                             </View>
                            <View style={styles.btnOrderView}>
                            <View style={styles.btnOrder}>
                            <AntDesign name="star" size={15} />
                            <Text style={styles.textH1}>4.5</Text>
                            </View>
                            <View style={styles.btnOrder}>
                            <svgs.homeLocation  height={13.5} width={12.72}/>
                            <Text style={styles.textH1}> 8 Areas</Text>
                            </View>
                            <View style={styles.btnOrder}>
                            <svgs.host_icon/>
                            <Text style={styles.textH1}>Hosts</Text>
                            </View>
                            <TouchableOpacity style={styles.btnOrder} >
                            <Svgs.infoIcon height={13} width={13}  />
                            <Text style={styles.textH1}>Info</Text>
                            </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.btnSpecialOffer}>
                            <Svgs.Edit height={22} width={17} style={{alignSelf:"center",}} />
                            <Text style={styles.textH5}>Special Order</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%"}}>
                           
                            <RenderDescriptionCard />
                            <RenderCardDescriptionTwo />
                            </View>
                            <View style={styles.topImageView}>
                            <Image resizeMode="contain" source={icon} style={styles.topRoundedImage} />
                            </View>
                            </View>
                            <View style={{backgroundColor:"transprent",width:"92%",alignSelf:"center",}}>
                            <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={charityDetail.subscriptions}
                            keyExtractor={(item)=> item.id}
                            renderItem={({item})=> <SubcriptionView title={item.title} description={item.description}/>}/>
                            <View style={{alignSelf:"center",padding:25}}>
                            <View style={styles.row}>
                            <PressableIcon
                            icon={<Svgs.FilterIcon height={24} width={24} />}
                            onPress={() => setIsList(!isList)}
                            style={null}
                        />
                        <FlatList
                            horizontal
                            style={{padding:5}}
                            showsHorizontalScrollIndicator={false}
                            data={restaurantOffers}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                        />
                    </View>
                    </View>
                           </View>
                             </> 
                     )
            }
            //RENDER FOOTER FUNCTION BUTTON
            const RenderButton = ()=>
            {
             return(
                    <View style={styles.discountView}>
                        <Text style={{fontSize:normalize(24),fontFamily:Fonts.SemiBold,color:"#0E5561",right:"10%"}}>{discount}</Text>
                         <Text style={{alignSelf:"center",color:theme.colors.darkGrey}}> on Selected items </Text>
                    </View>
                    )
                }
            // MAIN VIEW FOR VENDOR PAGE
            return (
                 <View style={styles.container}>
                 <View style={{flex:1}}>
                    <FlatList //FLATLIST WHICH IS DISPLAY RENDER MENU LIST
                     key={'#'}
                     showsHorizontalScrollIndicator={false}
                     data={charityCategoryList}
                     ListHeaderComponent={
                     <RenderHeaderComponents/>//RENDER HEADER COMPONENTS TO INCLUDE WHOLE CONTAINER IN FALTLIST
                    }
                    numColumns={2}
                    keyExtractor={(item)=> item.id}
                    renderItem={({item})=> <MenuView charityDetail={item} />}/>
                    </View>
                    <RenderButton/> 
                     </View>
                )
            }


export default OfferDetails;
