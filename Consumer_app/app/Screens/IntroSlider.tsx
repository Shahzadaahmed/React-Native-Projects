import { NavigationContainer } from '@react-navigation/native';
import React, { useState, FC } from 'react';
import { Container, Content } from 'native-base';
import { View, Image, StyleSheet, Alert, Text, Button, BackHandler } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { getSliderImages ,getSplashScreenAction,getSignupStaticdata} from '../redux/auth/auth.action';
import AppIntroSlider from 'react-native-app-intro-slider';
import Loader from '../common/Loader';
import Buttons from '../common/comButton';


import { windowHeight, windowWidth } from '../common/Constants';


// using interface 
interface Props 
{
    navigation: any;
    navigate: any;
    languageId: string;
    getSliderImages: CallableFunction;
    sliderImageData: CallableFunction;
    isFetchingSpliderScreen: boolean;
    Fetching: boolean;
    translationData: any;
    languages: CallableFunction;
    countryCode: any;
    bannerImages: any;
};


class IntroSlider extends React.Component<Props>
{

    constructor(props:any){
        super(props);
        this.state = { 
            languageId: props.route.params.paramKey, 
            item: '' ,
            getStarted: props.route.params.started, 
            translationData:'',
        };
    }

    static navigationOptions = 
    {
        title: 'Login',
    };
    


    // RENDER ITEM FUNCTION
    render_item = ({ item }:any) => 
    {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundcolor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100,
                    display: 'flex',
                }}>
                <View style={{ justifyContent: 'center' }}>
                    <View >
                        <Image
                            style={[styles.introImageStyle, { resizeMode: 'contain' }]}
                            source={ { uri: item.imageurl } }
                        />
                    </View>
                    <Text style={styles.introTitleStyle}>
                        {item.bannertext} 
                    </Text>
                    <Text style={styles.introTextStyle}>
                        {item.context}
                    </Text>
                </View>
            </View>
        );
    };


    // TO INVOK FUNCTION IMMEDIATELY
    componentDidMount = () => 
    {
        this.get_data_slider();
        BackHandler.addEventListener('hardwareBackPress', this.back_pressed);

    };

    componentWillUnmount = () => 
    {
        BackHandler.removeEventListener('hardwareBackPress', this.back_pressed);

    }
    //USER BACK PRESSED
    back_pressed = () => 
    {
        this.props.navigation.goBack();
        return true;
    }

    //GET DATA FOR SLIDER
    get_data_slider = () => 
    {
        this.props.getSliderImages({'data': 'data'});
        this.setState({ item: this.props.bannerImages })
        this.get_current_location();

    }

    //GET CURRENT LOCATION OF USER FOR COUNTRY PHONE CODE
    get_current_location = () => 
    {
        this.props.countryCode();
    }


    // GET START BUTTON FUNCTION
    buttton = () => 
    {
        return (
            <View style={{ top: 20 }}>
                <Buttons title={'Get started'} onPress={() => this.props.navigation.navigate('loginComponent')} style={{ marginBottom: 30,marginTop:20 }}/>
                {/* <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('loginComponent') }}>
                    <Text style={{ fontSize: 17, fontWeight: '400',color:"#1C1C1C", fontStyle: 'normal', fontFamily: 'Montserrat',lineHeight:25  }}>Get started</Text>
                </TouchableOpacity> */}
            </View>
        )
    };
 


    // IMAGE SLIDER FUNCTION
    SlideView = () => 
    {
        if(this.props.bannerImages && this.props.bannerImages.length > 0) {
            return (
                <AppIntroSlider
                    style={{ flex: 1 }}
                    data={this.props.bannerImages?this.props.bannerImages:[]}
                    renderItem={this.render_item}
                    renderDoneButton={this.buttton}
                    renderSkipButton={this.buttton}
                    onSkip={this.buttton}
                    bottomButton={true}
                    showNextButton={false}
                    // goToSlide={4}
                    showSkipButton={true}
                    activeDotStyle={{ backgroundColor: '#BEBECD', top: 15, width: 13, height: 13, borderRadius: 30 }}
                    dotStyle={{ backgroundColor: '#E0E0EA', top: 15 ,width:8,height:8,borderRadius:30}}
                />
            )
        } 
        else{
            return(
                <></>
            )
        }
        
    };

    // MAIN UI VIEW
    render() 
    {
        return (
            <View style={{ flex: 1 }}>                
                <Loader loading={this.props.isFetchingSpliderScreen} />
                <this.SlideView></this.SlideView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: 
    {
        flexGrow: 1,
        marginTop: 30,
        marginVertical: 10,
    },
    introImageStyle: 
    {
        paddingTop: 10,
        width: 320,
        height: 330,
        resizeMode: 'cover'
    },
    introTextStyle: 
    {
        fontSize: 16,
        color: 'white',
        fontFamily:'Montserrat',
        textAlign: 'center',
        paddingVertical: 10,

    },
    introTitleStyle: 
    {
        fontSize: 20,
        color: '#ffffff',
        fontStyle:'normal',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        paddingTop: 30,
    },
    button: 
    {
        alignItems: 'center',
        backgroundColor: '#FABC5A',
        width: "90%",
        alignSelf: 'center',
        height: 48,
        marginBottom: 35,
        marginTop: 15,
        fontWeight:400,
        justifyContent: 'center',
        borderRadius: 15,
    }

})


const mapStateToProps = (state: any) => ({
    sliderImageData: state.AuthReducers.splashScreenData,
    bannerImages: state.AuthReducers.bannerImages,
    isFetchingSpliderScreen: state.AuthReducers.isFetchingSpliderScreen,
    languageData: state.AuthReducers.getLanguage?.lanData,
    Fetching: state.AuthReducers.checkAppVersion?.isFetchingSpliderScreen,
    languages: state.AuthReducers.checkAppVersion?.versionData,

});

const mapDispatchToProps = (dispatch: any) => ({
    getSliderImages: (params: any) => dispatch(getSplashScreenAction(params)),
    countryCode: (params: any) => dispatch(getSignupStaticdata()),
});
export default connect(mapStateToProps, mapDispatchToProps)(IntroSlider);