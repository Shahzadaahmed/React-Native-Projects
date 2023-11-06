import React, { useEffect, useState,FC,useCallback } from 'react'
import {
    FlatList,
    StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

import * as RNLocalize from "react-native-localize";
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { getLanguage } from '../../redux/auth/auth.action';
import { useDispatch, useSelector } from 'react-redux';

export type Props = {
    route: any,
    navigation: any,
    message: string
}

// export type SubmitParams={
//     opacity?:number
//     lan?:string
//     languageId:string
// }

const Lan: FC<Props> = (props) => { 
    const { navigation } = props
    const [isLoading, setIsLoading] = useState(false)
    const [lan, setLan] = useState([{"languageId":1,"languageName":"English","languageCode":"en","defaultLanguage":true,"cultureInfo":"en-US","textDirection":"L"}])
    const [opacity, setOpacity] = useState(0.4)
    const [selectLan, setSelectLan] = useState(0.4)

    const dispatch = useDispatch();
    
    const languageData = useSelector((state:any) => state?.getLanguage?.lanData)
    const obj = JSON.parse(languageData)
    setLan(obj.result.languageList);
    // console.log(JSON.stringify(lanData));
    
    
    // setLan(obj);
    
    
    useEffect(() => {
        let lanParams = {
            'countryCode': RNLocalize.getCountry()
        }
        dispatch(getLanguage({ data: lanParams}));

        
        
        // setTimeout(function () {
            
        // }, 1000)
          
        
    }, [])


    
    // const renderCategoryItem = ({ item, index }: { item: any, index: number }) => {
    //     return (<TouchableOpacity onPress={() => setCategoryIndex(index)}
    //         style={[styles.categoryButton, categoryIndex != index && { backgroundColor: theme.colors.white }]}>
    //         <Text style={[styles.categoryButtonTxt, categoryIndex != index && { color: theme.colors.greyDark }]}>{item.c_name}</Text>
    //     </TouchableOpacity>)
    // }

    const renderCategoryItem = ({ item, index }: { item: any, index: number }) => {
        return (<TouchableOpacity onPress={() => setOpacity(1)} 
                        style={[item.selected ? styles.lanSelectShow :  styles.lanShow]}>
                        <Text style={styles.lanText}  
                            >{item.languageName}
                        </Text>
                </TouchableOpacity>)
    }

    

    return (
        <View style={styles.container}>
            <View style={styles.textShow}>
                <Text style={styles.text}>Choose language</Text>
            </View>
            <FlatList  
                data={lan}  
                // renderItem={({item,index}) => 
                // <TouchableOpacity style={[item.selected ? styles.lanSelectShow :  styles.lanShow]}>
                //         <Text style={styles.lanText}  
                //             >{item.languageName}
                //         </Text>
                // </TouchableOpacity> 
                // }  
                renderItem={renderCategoryItem}
                extraData={selectLan}
                // keyExtractor={item => item.id.toString()}
                // ItemSeparatorComponent={this.renderSeparator}  
            />  
            <View style={styles.buttonShow}>
                <Button mode="contained" 
                    uppercase={false} 
                    labelStyle={{ color: "white", fontSize: 18 }} 
                    style={[styles.submitButton,{opacity:opacity,}]} color={'#FABC5A'} 
                    onPress={() => console.log('Pressed')}>
                    Confirm
                </Button>
            </View>       
    </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-around',
        backgroundColor:'#ffff'
    },
    textShow:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50,
    },
    text: {
        fontSize:24,
        fontFamily:'Montserrat',
        fontStyle:'normal',
        fontWeight:'bold',
        color:'#1C1C1C'
    },
    lanShow:{
        // flex:1,
        // flexDirection:'row',
        backgroundColor:'#F7F7FA',
        marginTop:10,
        marginLeft:15,
        marginRight:15,
        marginBottom:10,
        borderRadius:15,
    },
    lanSelectShow:{
        // flex:1,
        // flexDirection:'row',
        backgroundColor:'#F7F7FA',
        marginTop:10,
        marginLeft:15,
        marginRight:15,
        marginBottom:10,
        borderRadius:15,
        borderColor:'#FABC5A',
        borderWidth:1
    },
    lanText: {
        color:'#000000',
        margin:20
    },
    buttonShow: {
        justifyContent:'center',
        position: 'absolute',
        bottom:10,
        width: '100%', 
    },
    submitButton: {
        // position: 'absolute',
        bottom:10,
        // left:20,
        margin:15,
        // marginRight:20,
        borderRadius:15,
        // width: '100%', 
    },
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },  
});

export default Lan