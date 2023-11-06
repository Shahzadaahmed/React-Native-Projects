import React, { useEffect, useState,FC,useCallback } from 'react'
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity, 
    Platform,
    BackHandler
} from 'react-native';

// IMPORT DEPEDENCYES
import * as RNLocalize from "react-native-localize";
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { checkAppVersion, getLanguage,getSliderImages,countryCode } from '../../redux/auth/auth.action';
import { Colors } from '../../../style';
import { getData, setData } from '../../common/Methods';
import Loader from '../../common/Loader';
import Buttons from '../../common/comButton';



// DECLARE PROPRS FOR TYPESCRIPT
interface Props {
    navigation: any;
    navigate: any;
    getLang: CallableFunction;
    isFetching: boolean;
    languageData: string;
    renderLanItem:CallableFunction;
    getKey:CallableFunction;
    change_language:CallableFunction;
    checkAppVersion:CallableFunction;
    checkApp:CallableFunction;
    screen_referesh:CallableFunction;
    getSliderImages: CallableFunction;
    countryCode: any;
};


class Language extends React.Component<Props> {
    state = 
    {
        countryCode:'In',
        opacity:0.4,
        languageData:[],    
        isFetching:false,
        selectedItem:0,
        lanSelectindex:0,
        lanSelect:false,
        languageId:0,
        modalVisible: false,
        getStarted:'',
    };
    // FIRST WAY REFRESH PAGE GET COUNTRY LIST LANGUAGE
    componentDidMount = async () => 
    {
        this.get_data_slider();
        this.screen_referesh();
        BackHandler.addEventListener('hardwareBackPress', this.back_pressed);
        this.focus_page();
    };

    //ON AGAIN FOCUS ON PAGE
    focus_page = () => 
    {
        const unsubscribe = this.props.navigation.addListener('focus', () => {
            // this.screen_referesh();
        });
    }


    componentWillUnmount = () => 
    {
        BackHandler.removeEventListener('hardwareBackPress', this.back_pressed);

    }


    //WHEN PRESS BACK PRESS FROM THIS PAGE
    back_pressed = () => 
    {
        BackHandler.exitApp();
        return true;
    }

    //TO INITIALIZE THE DATA FOR THIS PAGE
    screen_referesh = async () => 
    { 
       
        this.props.getLang({data: { countryCode: RNLocalize.getCountry() } });
        this.setState({ modalVisible: true})
        if (Platform.OS == 'ios')
        {
            
            setTimeout(() => {
              
                if(this.props?.languageData?.length == 0) {
                } else {                 
                    let arr = [];
                    arr.push(this.props.languageData[0])
                    arr.push(this.props.languageData[2])
                    arr.push(this.props.languageData[1])
                    this.setState({languageData:arr});
                    this.setState({ modalVisible: false })
                }
            }, 5000);
        } 
        else
        {
            
            setTimeout(() => {
                if (this.props?.languageData?.length == 0) {
                } else {
                    let arr = [];
                    arr.push(this.props.languageData[1])
                    arr.push(this.props.languageData[0])
                    arr.push(this.props.languageData[2])
                    this.setState({ languageData: arr });
                    this.setState({ modalVisible: false })
                }
            }, 2500);
        }
    }

    
    //GET DATA FOR SLIDER
    get_data_slider = () => 
    {
        this.get_current_location();

    }

    //GET CURRENT LOCATION OF USER FOR COUNTRY PHONE CODE
    get_current_location = () => 
    {
        this.props.countryCode();
    }
    
    // CHANGE LANGUAGE TYPE
    on_press_handler = async(item:any) =>  
    {
       this.setState({ selectedItem: item.language_id, lanSelect: true, languageId: item.language_id, getStarted: item.lbl_getstarted});
        await setData('TEXT_DIRECTION',item.direction);
    }

    // CHANGE LANGUAGE FUNCTION
    change_language = async(id:number) =>  
    {
        // CALL FUNCTION TO GET LANGUAGES
        this.setState({ lanSelect: false, selectedItem: '' })
        /* this.props.getSliderImages({
            data: {
                languageId: this.state.languageId
            }
        }); */
        await setData('languageId',this.state.languageId.toString());
/*          this.props.checkApp({
            data: {
                appVersion: 73, appType: 1, deviceType: Platform.OS === 'ios' ? 2 : 1, deviceToken: 'Simulator', customerId: 0, languageId: this.state.languageId,
            },
            navigation: this.props.navigation
        }); */
        this.props.navigation.navigate('Slider',{paramKey: this.state.languageId,started:this.state.getStarted}); 
    }
    
    render() {
  
        return (
            <View style={styles.container}>
                <Loader loading={this.state.modalVisible }/>
                <View style={styles.textShow}>
                    <Text style={styles.headingText}>Choose language</Text>
                </View>

                {this.state.languageData && this.state.languageData.length > 0 && <FlatList
                    data={this.state.languageData}
                    horizontal={false}
                    renderItem={({ item }:any) =>
                        <TouchableOpacity
                            onPress={() => this.on_press_handler(item)}
                            style={[styles.lanShow, this.state.selectedItem == item.language_id && { borderWidth: 2, borderColor: Colors.buttonText }]}
                        >
                            <Text style={styles.lanText}
                            >{item?.name}
                            </Text>
                        </TouchableOpacity>
                        }
                    keyExtractor={(item:any) => item.language_id.toString()}
                    extraData={this.state.selectedItem}
                />
               } 
              

                <View style={styles.buttonShow}>
                    {
                        this.state.lanSelect ? (
                            <TouchableOpacity style={styles.submitButton} onPress={() => this.change_language(1)}  >
                                <Text style={styles.cnfrmText}>Confirm</Text>
                            </TouchableOpacity>
                        ) : (
                        <Button 
                            mode="contained" 
                            uppercase={false} 
                            labelStyle={[{ color: Colors.languageButtonTextColor},styles.lanTextBtn]}
                            style={[styles.submitButton,{opacity:0.4}]} color={Colors.buttonText} >
                            Confirm
                        </Button>
                        )
                    }
                    
                </View>       
            </View> 
        );
    }
}





const mapStateToProps = (state: any) => {
    // GET DATA FROM REDUCERS
    return {
        languageData: state.AuthReducers?.lanData,
        isFetching: state.AuthReducers.isFetching,
        // versionData: state.AuthReducers.checkAppVersion?.versionData,
    }};

    // DISPATCH FUNCTION FOR CALL TO ACTION SAGA
const mapDispatchToProps = (dispatch: any) => ({

    getLang: (params: any) => dispatch(getLanguage(params)),
    getSliderImages: (params: any) => dispatch(getSliderImages(params)),
    checkApp: (params: any) => dispatch(checkAppVersion(params)),
    countryCode: (params: any) => dispatch(countryCode(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Language);


// STYPES 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.backgroundColor
    },
    textShow:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50,
        marginBottom:30,
    },
    headingText: {
        fontSize:24,
        fontFamily:'Montserrat',
        fontWeight:'700',
        color:Colors.headingTextColor,
    },
    lanShow:{
        backgroundColor:'#F7F7FA',
        marginTop:12,
        marginLeft:15,
        marginRight:15,
        marginBottom:0,
        borderRadius:16,
        height:70
    },
    lanText: {
        color:'#000000',   //Taking these styles from  figma !!
        margin:20,
        alignSelf:'flex-start',
        fontFamily:"Montserrat", 
        fontSize:16,
        fontWeight:'400'
    },    
    buttonShow: {
        display:'flex',
        justifyContent:'center',
        position: 'absolute',
        alignItems:'center',
        bottom:10,
        width: '100%', 
    },
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },  
    button: 
    {
        alignItems: 'center',
        backgroundColor: '#FABC5A',
        width: "90%",
        alignSelf: 'center',
        height: 53,
        marginBottom: 35,
        marginTop: 15,
        justifyContent: 'center',
        borderRadius: 15,
    },
    lanTextBtn: {
        color: '#000000',
        // marginTop: 16,
        alignSelf: 'flex-start',
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: '400'
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,
        margin: 15,
        height: 48,
        borderRadius: 12,
        width: "80%",
        backgroundColor: '#FABC5A',
    }, 
    buttonCnrfm:
    {
        alignItems: 'center',
        backgroundColor: '#FABC5A',
        // width: "75%",
        alignSelf: 'center',
        height: 48,
        marginBottom: 35,
        marginTop: 15,
        fontWeight: 400,
        justifyContent: 'center',
        borderRadius: 15,
    },
    cnfrmText: { 
        fontSize: 17,
        fontWeight: '400', 
        color: "#1C1C1C", 
        fontStyle: 'normal', 
        fontFamily: 'Montserrat', 
        lineHeight: 25 
    }
    
    
});