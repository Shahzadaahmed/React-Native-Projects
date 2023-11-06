
// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React,{useState,useEffect,useRef} from 'react'
import { ImageBackground, FlatList, Text, View, TouchableWithoutFeedback,TouchableOpacity,Image } from 'react-native'
import styles from './offerDetailStyle';
import { theme } from '../../common';
import { windowHeight, windowWidth } from '../../common/Constants';
import NumericInput from '../../common/comNumericInput';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props 
{
 navigation: any,
 route: any,
 charityDetail:any
}
// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN VENDOR COMPONENT FILE.
const Menu = (props: Props) => 
    {
        const {charityDetail} = props
        const {image,name,price,weight} = charityDetail
        const [quantity, setQuantity] = useState<any>(0); //QUANTITY VARIABLE ITS TAKE VALUSE OF NUMERIC INPUT
    const IncrementItem =() => //NUMERIC INPUT FUNTION FOR INCREMENT OF QUANTITY
    {
        if(quantity > 1000) //IF QUANTITY GRATER THEN 1000 NUMERIC INPUT DISABLE FOR INCREMENT
        {
            }else{
                setQuantity(quantity + 1 )
            }
    }
    const  DecreaseItem =() => //NUMERIC INPUT FUNTION FOR DECREMENT OF QUANTITY
    {
            if(quantity <= 0) //IF QUANTITY LESS THEN 0 NUMERIC INPUT DISABLE FOR DECREMENT
            {
        
            }else{
                setQuantity(quantity - 1)
            }
    }
            return(
                <View style={styles.categoryListContainer}>
                    <View style={styles.categoryImageView}>
                    <Image source={{uri:image}}style={ styles.categoryImage}borderRadius={10}/>
                    <View style={{justifyContent:"center",alignItems:"center",paddingTop:"6%"}}>
                    <Text style={styles.categoryListText}> {name} </Text>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                    <Text style={styles.categoryListText1}> ${price} </Text>
                    <View style={styles.dotView1}></View>
                    <Text style={styles.categoryListText1}> {weight} </Text>
                    </View>
                    <NumericInput btnIconLeft={"minus"} style={{width: '90%',backgroundColor:theme.colors.white,height:windowHeight*0.05,top:"5%"}}  btnIconLeftSize ={22} btnIconRightSize={22} btnIconRight ="plus" value={quantity}  onPressLeft={()=>DecreaseItem()} onPressRight={()=>IncrementItem()}/> 
                    </View>
                    </View>
                </View> 
                ) 
    }
export default Menu;
